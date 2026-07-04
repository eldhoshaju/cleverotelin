"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Headphones,
  Truck,
  Building2,
  Heart,
  Landmark,
  GraduationCap,
  ShoppingCart,
  UtensilsCrossed,
  Home,
  Shield,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import type { Industry } from "@/constants/industries";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Headphones,
  Truck,
  Building2,
  Heart,
  Landmark,
  GraduationCap,
  ShoppingCart,
  UtensilsCrossed,
  Home,
  Shield,
  MessageCircle,
};

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

export default function IndustryCard({ industry, index }: IndustryCardProps) {
  const Icon = iconMap[industry.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className="group relative h-[420px] cursor-pointer overflow-hidden rounded-[32px] border border-white/10 shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      {/* Background - abstract pattern instead of image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={cn("absolute inset-0 bg-gradient-to-b", industry.gradient)} />
        {/* Abstract geometric background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-md transition-transform duration-700 group-hover:scale-125" />
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-white/10 blur-md transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute right-[20%] top-[30%] h-16 w-16 rounded-2xl bg-white/5 rotate-12 transition-transform duration-700 group-hover:rotate-45" />
        </div>
        {/* Icon in background - large and faded */}
        {Icon && (
          <div className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 opacity-10 transition-transform duration-700 group-hover:scale-110">
            <Icon className="h-32 w-32 text-white" />
          </div>
        )}
      </div>

      {/* Dark gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content at bottom */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col p-6">
        {/* Icon badge */}
        {Icon && (
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-5 w-5 text-white" />
          </div>
        )}

        {/* Title */}
        <h3 className="mb-1.5 text-lg font-bold text-white sm:text-xl">
          {industry.name}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-white/70">
          {industry.description}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold text-white/90 transition-colors group-hover:text-white">
            Learn More
          </span>
          <ArrowRight className="h-4 w-4 text-white/70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-white" />
        </div>
      </div>

      {/* Hover border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/0 transition-all duration-500 group-hover:border-white/20" />
    </motion.div>
  );
}
