"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glass?: boolean;
  hover?: boolean;
}

export default function AnimatedCard({
  children,
  className,
  delay = 0,
  glass = false,
  hover = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : undefined
      }
      className={cn(
        "rounded-2xl border border-white/60 p-4 shadow-lg transition-shadow duration-300",
        glass &&
          "bg-white/70 backdrop-blur-xl border-white/40 shadow-xl",
        !glass && "bg-white",
        hover && "hover:shadow-2xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
