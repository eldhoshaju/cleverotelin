"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RecordingFeatureChipProps {
  icon: LucideIcon;
  label: string;
  index: number;
}

export default function RecordingFeatureChip({
  icon: Icon,
  label,
  index,
}: RecordingFeatureChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.4,
        delay: 0.2 + index * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-indigo-100/80 bg-white/70 px-4 py-2 backdrop-blur-md transition-all duration-300",
        "hover:border-indigo-300/60 hover:bg-white/90 hover:shadow-lg hover:shadow-indigo-200/30"
      )}
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED]/10 to-[#3B82F6]/10 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-3.5 w-3.5 text-[#6366F1]" />
      </div>
      <span className="text-sm font-medium text-[#374151]">{label}</span>
    </motion.div>
  );
}
