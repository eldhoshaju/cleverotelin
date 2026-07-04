"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "+",
  duration = 2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        {/* Glow behind number */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/10 via-[#7C3AED]/10 to-[#3B82F6]/10 blur-[60px]" />

        {/* Number */}
        <span className="relative bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#3B82F6] bg-clip-text text-[120px] font-black leading-none tracking-tighter text-transparent sm:text-[160px] lg:text-[200px]">
          {count}
          {suffix}
        </span>
      </div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-2 text-lg font-semibold text-gray-600 sm:text-xl"
      >
        Industries Served
      </motion.p>
    </motion.div>
  );
}
