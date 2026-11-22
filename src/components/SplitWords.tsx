"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SplitWordsProps = {
  text: string;
  delay?: number;
  className?: string;
  stagger?: number;
  children?: ReactNode;
};

export function SplitWords({ text, delay = 0, className, stagger = 0.055 }: SplitWordsProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
            padding: "0.04em 0.06em",
            margin: "-0.04em -0.06em",
          }}
        >
          <motion.span
            style={{ display: "inline-block", willChange: "transform" }}
            initial={reduce ? false : { y: "115%" }}
            animate={reduce ? undefined : { y: 0 }}
            transition={{
              duration: 1.05,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
