"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  accent: "cyan" | "amber" | "blue" | "pink" | "purple" | "green";
  index: number;
}

const accentStyles = {
  cyan: {
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    borderGlow: "hover:shadow-cyan-500/10",
    borderHover: "hover:border-cyan-500/40",
    ctaColor: "from-cyan-400 to-cyan-300",
    glowColor: "bg-cyan-500/5",
  },
  amber: {
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    borderGlow: "hover:shadow-amber-500/10",
    borderHover: "hover:border-amber-500/40",
    ctaColor: "from-amber-400 to-amber-300",
    glowColor: "bg-amber-500/5",
  },
  blue: {
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderGlow: "hover:shadow-blue-500/10",
    borderHover: "hover:border-blue-500/40",
    ctaColor: "from-blue-400 to-blue-300",
    glowColor: "bg-blue-500/5",
  },
  pink: {
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    borderGlow: "hover:shadow-pink-500/10",
    borderHover: "hover:border-pink-500/40",
    ctaColor: "from-pink-400 to-pink-300",
    glowColor: "bg-pink-500/5",
  },
  purple: {
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    borderGlow: "hover:shadow-purple-500/10",
    borderHover: "hover:border-purple-500/40",
    ctaColor: "from-purple-400 to-purple-300",
    glowColor: "bg-purple-500/5",
  },
  green: {
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    borderGlow: "hover:shadow-emerald-500/10",
    borderHover: "hover:border-emerald-500/40",
    ctaColor: "from-emerald-400 to-emerald-300",
    glowColor: "bg-emerald-500/5",
  },
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  cta,
  accent,
  index,
}: FeatureCardProps) {
  const styles = accentStyles[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className={cn(
        "group relative flex cursor-pointer flex-col overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500",
        styles.borderHover,
        styles.borderGlow,
        "hover:bg-white/[0.04] hover:shadow-2xl"
      )}
    >
      {/* Subtle glow on hover */}
      <div
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-100",
          styles.glowColor
        )}
      />

      {/* Icon */}
      <div
        className={cn(
          "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110",
          styles.iconBg
        )}
      >
        <Icon className={cn("h-7 w-7", styles.iconColor)} />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>

      {/* Description */}
      <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
        {description}
      </p>

      {/* CTA */}
      <div className="flex items-center gap-1.5">
        <span
          className={cn(
            "bg-gradient-to-r bg-clip-text text-sm font-semibold text-transparent",
            styles.ctaColor
          )}
        >
          {cta}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "transition-transform duration-300 group-hover:translate-x-1",
            styles.iconColor
          )}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
}
