"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  accent: "pink" | "orange" | "green" | "blue" | "purple" | "cyan";
  index: number;
}

const accentStyles = {
  pink: {
    border: "border-[#E5E7EB] hover:border-[#1F4E8C]/30",
    iconBg: "bg-[#EEF4FF]",
    iconColor: "text-[#1F4E8C]",
    glow: "group-hover:shadow-[#1F4E8C]/8",
    glowBg: "bg-[#1F4E8C]/5",
  },
  orange: {
    border: "border-[#E5E7EB] hover:border-[#1F4E8C]/30",
    iconBg: "bg-blue-50",
    iconColor: "text-[#1F4E8C]",
    glow: "group-hover:shadow-[#1F4E8C]/8",
    glowBg: "bg-[#1F4E8C]/5",
  },
  green: {
    border: "border-[#E5E7EB] hover:border-emerald-300",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    glow: "group-hover:shadow-emerald-100/50",
    glowBg: "bg-emerald-400/5",
  },
  blue: {
    border: "border-[#E5E7EB] hover:border-[#1F4E8C]/30",
    iconBg: "bg-[#EEF4FF]",
    iconColor: "text-[#1F4E8C]",
    glow: "group-hover:shadow-[#1F4E8C]/8",
    glowBg: "bg-[#1F4E8C]/5",
  },
  purple: {
    border: "border-[#E5E7EB] hover:border-[#8A6FA8]/40",
    iconBg: "bg-purple-50",
    iconColor: "text-[#8A6FA8]",
    glow: "group-hover:shadow-purple-100/50",
    glowBg: "bg-purple-400/5",
  },
  cyan: {
    border: "border-[#E5E7EB] hover:border-cyan-300",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    glow: "group-hover:shadow-cyan-100/50",
    glowBg: "bg-cyan-400/5",
  },
};

export default function SolutionCard({
  icon: Icon,
  title,
  description,
  cta,
  accent,
  index,
}: SolutionCardProps) {
  const styles = accentStyles[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.01,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className={cn(
        "group relative flex h-[440px] cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white p-10 shadow-sm transition-all duration-500",
        styles.border,
        styles.glow,
        "hover:shadow-xl"
      )}
    >
      {/* Subtle glow behind card on hover */}
      <div
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100",
          styles.glowBg
        )}
      />

      {/* Icon Container */}
      <div
        className={cn(
          "relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110",
          styles.iconBg
        )}
      >
        <Icon className={cn("relative h-7 w-7", styles.iconColor)} />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold leading-tight text-[#0F172A] sm:text-2xl">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-auto text-sm leading-relaxed text-[#6B7280] lg:text-base">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-1.5">
        <span className="text-sm font-semibold text-[#1F4E8C]">
          {cta}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#1F4E8C] transition-transform duration-300 group-hover:translate-x-1.5"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
}
