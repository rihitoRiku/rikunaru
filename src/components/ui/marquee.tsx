import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        pauseOnHover && "hover:[--pause:paused]",
        className
      )}
    >
      <div
        className={cn(
          "animate-marquee flex min-w-full shrink-0 items-center justify-around gap-4",
          reverse && "animate-marquee-reverse",
          "motion-safe:animate-[marquee_var(--duration)_linear_infinite]",
          "motion-safe:[animation-play-state:var(--pause,running)]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "animate-marquee flex min-w-full shrink-0 items-center justify-around gap-4",
          !reverse && "animate-marquee",
          "motion-safe:animate-[marquee_var(--duration)_linear_infinite]",
          "motion-safe:[animation-play-state:var(--pause,running)]"
        )}
      >
        {children}
      </div>
    </div>
  );
} 