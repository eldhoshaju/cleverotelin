"use client";

import { motion } from "framer-motion";

export interface ConnectionLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

export default function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
  delay,
}: ConnectionLineProps) {
  // Calculate control points for a smooth curve
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const curvature = 0.2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const cx = midX - dy * curvature;
  const cy = midY + dx * curvature;

  const pathD = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
  const gradientId = `line-grad-${x1}-${y1}-${x2}-${y2}`;

  return (
    <>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
          <stop offset="50%" stopColor="rgba(236, 72, 153, 0.4)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
        </linearGradient>
      </defs>
      {/* Base line */}
      <path
        d={pathD}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
        opacity="0.4"
      />
      {/* Animated dot traveling along the path */}
      <motion.circle
        r="2"
        fill="#a78bfa"
        opacity="0.8"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          ease: "linear",
          delay: delay * 0.5,
        }}
        style={{
          offsetPath: `path("${pathD}")`,
        }}
      />
    </>
  );
}
