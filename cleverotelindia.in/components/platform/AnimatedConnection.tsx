"use client";

import { motion } from "framer-motion";

export interface AnimatedConnectionProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  index: number;
}

export default function AnimatedConnection({
  x1,
  y1,
  x2,
  y2,
  index,
}: AnimatedConnectionProps) {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const curvature = 0.15;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const cx = midX - dy * curvature;
  const cy = midY + dx * curvature;

  const pathD = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
  const gradId = `platform-grad-${index}`;

  return (
    <>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(236, 72, 153, 0.25)" />
          <stop offset="50%" stopColor="rgba(124, 58, 237, 0.3)" />
          <stop offset="100%" stopColor="rgba(99, 102, 241, 0.25)" />
        </linearGradient>
      </defs>
      <path
        d={pathD}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="1"
        opacity="0.5"
      />
      <motion.circle
        r="1.5"
        fill="#7C3AED"
        opacity="0.7"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          duration: 3 + index * 0.4,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.3,
        }}
        style={{
          offsetPath: `path("${pathD}")`,
        }}
      />
    </>
  );
}
