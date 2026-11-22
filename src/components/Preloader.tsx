"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDone(true);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const duration = 1150;
    const start = performance.now();
    let frame = 0;
    let timeout = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        timeout = window.setTimeout(() => setDone(true), 260);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader__top">
            <span className="preloader__brand">
              PORTFOLIO<span>.</span>
            </span>
            <span className="mono muted">Game & code portfolio / 2026</span>
          </div>

          <div className="preloader__center">
            <motion.div
              className="preloader__word"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              PLAY <em>BUILD</em>
            </motion.div>
          </div>

          <div className="preloader__bottom">
            <span className="preloader__count">{String(count).padStart(3, "0")}</span>
            <span className="preloader__bar">
              <motion.i
                initial={{ scaleX: 0 }}
                animate={{ scaleX: count / 100 }}
                transition={{ duration: 0.15, ease: "linear" }}
              />
            </span>
            <span className="mono muted">Loading worlds</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
