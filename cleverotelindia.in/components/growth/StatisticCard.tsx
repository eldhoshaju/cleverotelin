"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StatisticCardProps {
  value: string;
  label: string;
  position: string;
  delay: number;
}

export default function StatisticCard({
  value,
  label,
  position,
  delay,
}: StatisticCardProps) {
  return (
    <motion.div
      className={cn("absolute z-10", position)}
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
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3.5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.08,
          y: -6,
          transition: { duration: 0.25 },
        }}
        className="flex cursor-pointer flex-col items-center rounded-2xl border border-white/60 bg-white/80 px-5 py-3.5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl"
      >
        <span className="text-lg font-extrabold text-[#111827] sm:text-xl">
          {value}
        </span>
        <span className="text-[11px] font-medium text-gray-500">{label}</span>
      </motion.div>
    </motion.div>
  );
}
