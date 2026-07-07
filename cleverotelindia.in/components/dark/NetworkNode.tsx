"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

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
}: NetworkNodeProps) {
  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1.5"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        whileHover={{
          y: -4,
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 4 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-md shadow-gray-200/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 sm:h-14 sm:w-14"
      >
        <Icon className="h-5 w-5 text-[#2563EB] sm:h-6 sm:w-6" />
      </motion.div>
      <span className="text-[9px] font-medium text-[#334155] sm:text-[10px]">
        {label}
      </span>
    </motion.div>
  );
}
