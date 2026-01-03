"use client";

import * as React from "react";

const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_uv = (a_position + 1.0) * 0.5;
    v_uv.y = 1.0 - v_uv.y;
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform float u_time;
  uniform vec2 u_resolution;
  varying vec2 v_uv;

  // Simple pseudo-random hash
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // Smooth noise based on the hash
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  void main() {
    // Normalized coordinates centered on the screen, with aspect ratio correction
    vec2 uv = v_uv - 0.5;
    float aspect = u_resolution.x / u_resolution.y;
    uv.x *= aspect;

    float time = u_time * 0.18;

    float r = length(uv);
    float angle = atan(uv.y, uv.x);

    // Subtle swirling to give the accretion disk motion
    float swirlStrength = 0.35 * exp(-r * 3.0);
    angle += swirlStrength * sin(time + r * 11.0);

    // Extra chaotic warping using animated noise on both radius and angle
    float radialNoise = (noise(uv * 6.0 + time * 0.8) - 0.5) * 0.08;
    float angularNoise = (noise(uv * 9.0 - time * 0.6) - 0.5) * 0.9;
    angle += angularNoise * smoothstep(0.05, 0.6, r);
    r = max(0.0, r + radialNoise);

    vec2 warped = vec2(cos(angle), sin(angle)) * r;
    r = length(warped);

    // Core black hole and bright ring radii (smaller overall)
    float blackHoleRadius = 0.16;
    float ringInnerRadius = 0.19;
    float ringOuterRadius = 0.42;

    // Ring mask using smooth transitions
    // Add some noisy variation to the inner edge so it is not a perfect circle
    float edgeNoise = (noise(warped * 11.0 + time * 1.1) - 0.5) * 0.035;
    float innerEdge = blackHoleRadius + edgeNoise;
    float innerMask = smoothstep(innerEdge, innerEdge + 0.035, r);
    float outerMask = 1.0 - smoothstep(ringOuterRadius, ringOuterRadius + 0.25, r);
    float ringMask = innerMask * outerMask;

    // Radial gradient along the ring for hotter inner edge
    float t = clamp((r - ringInnerRadius) / (ringOuterRadius - ringInnerRadius + 1e-4), 0.0, 1.0);

    vec3 innerColor = vec3(1.0, 0.95, 0.75);  // almost white-hot
    vec3 midColor   = vec3(1.0, 0.65, 0.20);  // orange
    vec3 outerColor = vec3(0.85, 0.25, 0.02); // deep red-orange

    vec3 ringColor = mix(innerColor, midColor, t);
    ringColor = mix(ringColor, outerColor, t * t);

    // Doppler-like asymmetry: lower part of the ring is brighter
    float doppler = 0.4 + 0.6 * smoothstep(-0.4, 0.3, -warped.y);
    ringColor *= doppler;

    // Strengthen the ring with a non-linear falloff
    float intensity = pow(ringMask, 1.35);
    vec3 color = ringColor * intensity;

    // Soft glow around the disk
    float glow = smoothstep(ringOuterRadius + 0.1, ringInnerRadius, r) * 0.7;
    vec3 glowColor = vec3(0.9, 0.45, 0.12);
    color += glowColor * glow;

    // Vignette to keep corners very dark
    float vignette = smoothstep(1.3, 0.45, length(uv));
    color *= vignette;

    // Fade to black in the very center to represent the event horizon
    // Use a softer, noisy transition so the inner circle blends more organically
    float holeNoise = (noise(uv * 14.0 - time * 1.2) - 0.5) * 0.05;
    float holeRadius = blackHoleRadius + holeNoise;
    float holeMask = smoothstep(holeRadius - 0.04, holeRadius + 0.02, r);
    color = mix(vec3(0.0), color, holeMask);

    // Final gamma-ish correction
    color = pow(color, vec3(0.9));

    gl_FragColor = vec4(color, 1.0);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Error compiling shader:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(
  gl: WebGLRenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader,
): WebGLProgram | null {
  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Error linking program:", gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

export default function ShaderBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const animationFrameRef = React.useRef<number | undefined>(undefined);
  const startTimeRef = React.useRef<number>(Date.now());

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Create shaders
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) {
      return;
    }

    // Create program
    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) {
      return;
    }

    // Setup geometry (fullscreen quad)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Get attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, "a_position");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    // Setup viewport
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    // Animation loop
    const animate = () => {
      const currentTime = (Date.now() - startTimeRef.current) / 1000.0;

      gl.useProgram(program);

      // Setup attributes
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      // Set uniforms
      gl.uniform1f(timeLocation, currentTime);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      style={{ background: "transparent" }}
    />
  );
}
