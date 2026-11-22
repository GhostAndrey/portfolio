"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  value: string;
  duration?: number;
  className?: string;
};

export function CountUp({ value, duration = 1.4, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const target = Number(value);
  const isNumber = Number.isFinite(target);
  // Always start from "0" so the server and client render the same markup.
  const [display, setDisplay] = useState(isNumber ? "0" : value);

  useEffect(() => {
    if (!isNumber) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(String(Math.round(target * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumber, reduce, target, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
