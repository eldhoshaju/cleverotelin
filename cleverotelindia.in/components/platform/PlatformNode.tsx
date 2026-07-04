"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface PlatformNodeProps {
  icon: LucideIcon;
  label: string;
  x: number;
  y: number;
  delay: number;
  accent: string;
}

export default function PlatformNode({
  icon: Icon,
  label,
  x,
  y,
  delay,
  accent,
}: PlatformNodeProps) {
  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3.5 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.15,
          transition: { duration: 0.2 },
        }}
        className="group relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-white/70 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl sm:h-13 sm:w-13"
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50"
          style={{ backgroundColor: `${accent}25` }}
        />
        <Icon className="relative h-5 w-5 sm:h-5.5 sm:w-5.5" style={{ color: accent }} />

        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-2xl border"
          style={{ borderColor: `${accent}30` }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
        />
      </motion.div>
      <span className="mt-0.5 text-[9px] font-medium text-gray-500 sm:text-[10px]">
        {label}
      </span>
    </motion.div>
  );
}
