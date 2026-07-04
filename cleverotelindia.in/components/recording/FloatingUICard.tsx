"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FloatingUICardProps {
  icon: LucideIcon;
  title: string;
  value?: string;
  accent: string;
  x: string;
  y: string;
  delay: number;
  rotation?: number;
}

export default function FloatingUICard({
  icon: Icon,
  title,
  value,
  accent,
  x,
  y,
  delay,
  rotation = 0,
}: FloatingUICardProps) {
  return (
    <motion.div
      className="absolute z-10"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3.5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.08,
          y: -8,
          transition: { duration: 0.25 },
        }}
        className={cn(
          "flex cursor-pointer items-center gap-2.5 rounded-2xl border border-white/60 bg-white/80 px-3.5 py-2.5 shadow-xl backdrop-blur-xl transition-all duration-300",
          "hover:shadow-2xl"
        )}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div
          className="flex h-8 w-8 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accent}15` }}
        >
          <Icon className="h-4 w-4" style={{ color: accent }} />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-[#111827]">{title}</p>
          {value && (
            <p className="text-[9px] font-medium text-gray-500">{value}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
