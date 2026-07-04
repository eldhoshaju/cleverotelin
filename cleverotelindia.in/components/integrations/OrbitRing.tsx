"use client";

import { motion } from "framer-motion";

interface OrbitRingProps {
  radius: number;
  duration: number;
  delay?: number;
}

export default function OrbitRing({ radius, duration, delay = 0 }: OrbitRingProps) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.06]"
      style={{
        width: radius * 2,
        height: radius * 2,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Rotating highlight */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, rgba(124, 58, 237, 0.15) 20%, transparent 40%)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}
