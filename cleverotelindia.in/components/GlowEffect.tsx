"use client";

import { motion } from "framer-motion";

export default function GlowEffect() {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-[55%] h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(31, 78, 140, 0.08) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%)",
      }}
      animate={{
        opacity: [0.15, 0.25, 0.15],
        scale: [0.95, 1.05, 0.95],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
