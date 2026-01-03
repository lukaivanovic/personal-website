"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PlayIcon } from "./PlayIcon";

interface VideoPlayerProps {
  url: string;
  aspectRatio: string;
  className?: string;
  autoPlay?: boolean;
}

export default function VideoPlayer({
  url,
  aspectRatio = "video",
  className,
  autoPlay = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);

          if (entry.isIntersecting && videoRef.current && autoPlay) {
            const video = videoRef.current;
            if (video.readyState >= 2) {
              video.play().catch((error) => {
                console.error("Error playing video:", error);
              });
            } else {
              video.addEventListener(
                "canplay",
                () => {
                  video.play().catch((error) => {
                    console.error("Error playing video:", error);
                  });
                },
                { once: true },
              );
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [autoPlay]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const handleVideoLoad = () => {
    setIsVideoReady(true);
  };

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(`overflow-hidden relative w-full`, className)}
      style={{ aspectRatio: aspectRatio }}
    >
      <img
        src={`/thumbnails/${url}.png`}
        alt="Video thumbnail"
        className={`w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 object-cover transition-opacity duration-500 ${
          isVideoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {isInView || !autoPlay ? (
        <video
          ref={videoRef}
          playsInline
          autoPlay={autoPlay}
          muted
          loop
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
          poster={`https://cdn.ivanovicluka.co/${url}.mp4?t=0.1`}
          onLoadedData={handleVideoLoad}
        >
          <source src={`https://cdn.ivanovicluka.co/${url}.mp4`} type={"video/mp4"} />
          {/* <source
            src={`https://cdn.ivanovicluka.co/${url}.webm`}
            type={"video/webm"}
          /> */}
          Your browser does not support the video tag.
        </video>
      ) : null}

      {(!autoPlay || isPlaying) && (
        <button
          onClick={handleTogglePlay}
          className="absolute top-2 right-2 bg-background text-secondary p-1 transition-colors z-10 flex items-center justify-center"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path
                fill="currentColor"
                d="M5 1.5v9H2v-9h3Zm5 0v9H7v-9h3Zm-2 8h1v-7H8v7Zm-5 0h1v-7H3v7Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M10.984 6 2.5 11V1l8.484 5ZM3.5 9.25 9.015 6 3.5 2.749V9.25Z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
