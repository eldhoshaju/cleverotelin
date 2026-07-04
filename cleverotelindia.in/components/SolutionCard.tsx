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
    border: "border-pink-200/80 hover:border-pink-400",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    glow: "group-hover:shadow-pink-200/50",
    ctaGradient: "from-pink-500 to-rose-500",
    glowBg: "bg-pink-400/10",
  },
  orange: {
    border: "border-orange-200/80 hover:border-orange-400",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    glow: "group-hover:shadow-orange-200/50",
    ctaGradient: "from-orange-500 to-amber-500",
    glowBg: "bg-orange-400/10",
  },
  green: {
    border: "border-emerald-200/80 hover:border-emerald-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    glow: "group-hover:shadow-emerald-200/50",
    ctaGradient: "from-emerald-500 to-teal-500",
    glowBg: "bg-emerald-400/10",
  },
  blue: {
    border: "border-blue-200/80 hover:border-blue-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    glow: "group-hover:shadow-blue-200/50",
    ctaGradient: "from-blue-500 to-indigo-500",
    glowBg: "bg-blue-400/10",
  },
  purple: {
    border: "border-purple-200/80 hover:border-purple-500",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    glow: "group-hover:shadow-purple-200/50",
    ctaGradient: "from-purple-500 to-violet-500",
    glowBg: "bg-purple-400/10",
  },
  cyan: {
    border: "border-cyan-200/80 hover:border-cyan-500",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-500",
    glow: "group-hover:shadow-cyan-200/50",
    ctaGradient: "from-cyan-500 to-sky-500",
    glowBg: "bg-cyan-400/10",
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
        y: -10,
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className={cn(
        "group relative flex h-[440px] cursor-pointer flex-col overflow-hidden rounded-[32px] border bg-white/90 p-10 shadow-lg backdrop-blur-sm transition-all duration-500",
        styles.border,
        styles.glow,
        "hover:shadow-2xl"
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
          "relative mb-6 flex h-20 w-20 items-center justify-center rounded-3xl transition-transform duration-500 group-hover:scale-110",
          styles.iconBg
        )}
      >
        {/* Icon glow */}
        <div
          className={cn(
            "absolute inset-0 rounded-3xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-40",
            styles.glowBg
          )}
        />
        <Icon className={cn("relative h-[34px] w-[34px]", styles.iconColor)} />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-bold leading-tight text-[#111827] sm:text-[28px] lg:text-[32px]">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-auto text-base leading-relaxed text-gray-500 lg:text-lg">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-1.5">
        <span
          className={cn(
            "bg-gradient-to-r bg-clip-text text-sm font-semibold text-transparent",
            styles.ctaGradient
          )}
        >
          {cta}
        </span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("transition-transform duration-300 group-hover:translate-x-1.5", styles.iconColor)}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </motion.svg>
      </div>
    </motion.div>
  );
}
