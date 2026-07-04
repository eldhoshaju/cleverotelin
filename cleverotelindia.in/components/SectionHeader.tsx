"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  heading: string;
  gradientWord: string;
  subtitle: string;
}

export default function SectionHeader({
  badge,
  heading,
  gradientWord,
  subtitle,
}: SectionHeaderProps) {
  // Split heading around the gradient word
  const parts = heading.split(gradientWord);
  const before = parts[0] || "";
  const after = parts[1] || "";

  return (
    <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center md:mb-20">
      {/* Badge */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mb-5 inline-flex rounded-full border border-purple-200/60 bg-purple-50/80 px-4 py-1.5 text-sm font-medium"
      >
        <span className="bg-gradient-to-r from-[#7C3AED] to-[#6366F1] bg-clip-text text-transparent">
          {badge}
        </span>
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-6 text-[34px] font-extrabold leading-tight tracking-tight text-[#111827] sm:text-[48px] lg:text-[64px]"
      >
        {before}
        <span className="bg-gradient-to-r from-[#EC4899] to-[#6366F1] bg-clip-text text-transparent">
          {gradientWord}
        </span>
        {after}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-[700px] text-base leading-relaxed text-gray-600 md:text-lg"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
