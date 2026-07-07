"use client";

import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top-left blue blob */}
      <motion.div
        className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full opacity-15 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #1F4E8C 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top-right light blue blob */}
      <motion.div
        className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center subtle navy blob */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full opacity-5 blur-[80px]"
        style={{
          background: "radial-gradient(circle, #0F172A 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating circles - subtle blue tones */}
      <motion.div
        className="absolute left-[15%] top-[20%] h-3 w-3 rounded-full bg-[#1F4E8C]/10"
        animate={{ y: [0, -15, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[20%] top-[30%] h-2 w-2 rounded-full bg-[#3B82F6]/15"
        animate={{ y: [0, 12, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[70%] top-[15%] h-4 w-4 rounded-full bg-[#1F4E8C]/8"
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
