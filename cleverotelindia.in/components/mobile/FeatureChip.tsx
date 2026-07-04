"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureChipProps {
  icon: LucideIcon;
  label: string;
  index: number;
}

export default function FeatureChip({ icon: Icon, label, index }: FeatureChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.4,
        delay: 0.3 + index * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "group inline-flex cursor-pointer items-center gap-2 rounded-full border border-purple-100/80 bg-white/70 px-4 py-2 backdrop-blur-md transition-all duration-300",
        "hover:border-purple-300/60 hover:bg-white/90 hover:shadow-lg hover:shadow-purple-200/30"
      )}
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#EC4899]/10 to-[#6366F1]/10 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-3.5 w-3.5 text-[#7C3AED]" />
      </div>
      <span className="text-sm font-medium text-[#374151]">{label}</span>
    </motion.div>
  );
}
