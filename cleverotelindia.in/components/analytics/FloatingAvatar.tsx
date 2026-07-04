"use client";

import { motion } from "framer-motion";

export interface FloatingAvatarProps {
  initials: string;
  color: string;
  x: string;
  y: string;
  delay: number;
  size?: "sm" | "md";
}

export default function FloatingAvatar({
  initials,
  color,
  x,
  y,
  delay,
  size = "md",
}: FloatingAvatarProps) {
  const sizeClasses = size === "sm" ? "h-8 w-8 text-[9px]" : "h-10 w-10 text-[11px]";

  return (
    <motion.div
      className="absolute z-20"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, type: "spring", stiffness: 200 }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
        className={`flex cursor-pointer items-center justify-center rounded-full border-2 border-white font-bold text-white shadow-lg ${sizeClasses}`}
        style={{ backgroundColor: color }}
      >
        {initials}
      </motion.div>
    </motion.div>
  );
}
