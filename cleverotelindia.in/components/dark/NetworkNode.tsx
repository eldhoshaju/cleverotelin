"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NetworkNodeProps {
  icon: LucideIcon;
  label: string;
  x: number;
  y: number;
  delay: number;
  accent: string;
}

export default function NetworkNode({
  icon: Icon,
  label,
  x,
  y,
  delay,
  accent,
}: NetworkNodeProps) {
  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1.5"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
        className={cn(
          "group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-lg sm:h-14 sm:w-14",
        )}
      >
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"
          style={{ backgroundColor: `${accent}20` }}
        />
        <Icon className="relative h-5 w-5 sm:h-6 sm:w-6" style={{ color: accent }} />
      </motion.div>
      <span className="text-[10px] font-medium text-gray-500 sm:text-xs">
        {label}
      </span>
    </motion.div>
  );
}
