/* eslint-disable react/jsx-key */
"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";

export interface EmblaCarouselProps {
  /** Slides to render inside the carousel */
  children: React.ReactNode;
  /** Optional className for the outer container */
  className?: string;
  /** Optional className applied to each slide item */
  slideClassName?: string;
  /** Optional Embla options (loop is forced off) */
  // Keep this simple for now – you can extend with concrete options later
  options?: {
    align?: "start" | "center" | "end";
    containScroll?: "trimSnaps";
    dragFree?: boolean;
  };
}

/**
 * A simple, generic Embla carousel wrapper.
 *
 * - **No looping** (loop is always `false`).
 * - **Adjacent slides remain visible** via fractional slide widths.
 * - No arrows/dots yet – just drag/scroll.
 */
export function EmblaCarousel({
  children,
  className,
  slideClassName,
  options,
}: EmblaCarouselProps) {
  const [viewportRef] = useEmblaCarousel({
    align: "start",
    ...options,
    // Ensure loop always disabled
    loop: false,
  });

  const items = React.Children.toArray(children);

  return (
    <div className={cn("", className)}>
      <div ref={viewportRef}>
        <div className="flex gap-4">
          {items.map((child, index) => (
            <div
              key={index}
              className={cn(
                // Show multiple slides at once so neighbours are visible
                "shrink-0 ",
                slideClassName,
              )}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmblaCarousel;
