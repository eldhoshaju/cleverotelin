"use client";

import { motion } from "framer-motion";

export default function GlowEffect() {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-[55%] h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[100px]"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(91, 92, 246, 0.15) 0%, rgba(217, 70, 239, 0.08) 40%, transparent 70%)",
      }}
      animate={{
        opacity: [0.2, 0.35, 0.2],
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
