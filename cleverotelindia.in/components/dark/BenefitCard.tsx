"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "purple" | "blue" | "pink" | "cyan" | "amber" | "green";
  index: number;
}

const accentMap = {
  purple: { iconBg: "bg-purple-500/10", iconColor: "text-purple-400", glow: "group-hover:shadow-purple-500/10" },
  blue: { iconBg: "bg-blue-500/10", iconColor: "text-blue-400", glow: "group-hover:shadow-blue-500/10" },
  pink: { iconBg: "bg-pink-500/10", iconColor: "text-pink-400", glow: "group-hover:shadow-pink-500/10" },
  cyan: { iconBg: "bg-cyan-500/10", iconColor: "text-cyan-400", glow: "group-hover:shadow-cyan-500/10" },
  amber: { iconBg: "bg-amber-500/10", iconColor: "text-amber-400", glow: "group-hover:shadow-amber-500/10" },
  green: { iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400", glow: "group-hover:shadow-emerald-500/10" },
};

export default function BenefitCard({
  icon: Icon,
  title,
  description,
  accent,
  index,
}: BenefitCardProps) {
  const styles = accentMap[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={cn(
        "group flex cursor-pointer flex-col items-start gap-3 rounded-3xl border border-white/[0.05] bg-white/[0.02] p-6 backdrop-blur-lg transition-all duration-400",
        "hover:border-white/[0.1] hover:bg-white/[0.04] hover:shadow-xl",
        styles.glow
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
          styles.iconBg
        )}
      >
        <Icon className={cn("h-5 w-5", styles.iconColor)} />
      </div>

      {/* Title */}
      <h4 className="text-sm font-bold text-white">{title}</h4>

      {/* Description */}
      <p className="text-xs leading-relaxed text-gray-500">{description}</p>
    </motion.div>
  );
}
