export default function Pattern({ viewBoxWidth = 320 }: { viewBoxWidth?: number }) {
  const viewBox = `0 0 ${viewBoxWidth} 4`;
  return (
    <svg
      width="100%"
      height="4"
      viewBox={viewBox}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-border"
    >
      <defs>
        <pattern id="step" patternUnits="userSpaceOnUse" width="8" height="4">
          <path
            d="M-1.5 3.5H2L2 0.5H6V3.5H8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </pattern>
      </defs>

      <rect x="0" y="0" width="100%" height="4" fill="url(#step)" />
    </svg>
  );
}
