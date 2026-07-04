"use client";

import { motion } from "framer-motion";
import { INDUSTRIES } from "@/constants/industries";
import IndustryCard from "./IndustryCard";

export default function IndustrySection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[5%] h-[500px] w-[500px] rounded-full bg-purple-100/30 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] h-[400px] w-[400px] rounded-full bg-blue-100/25 blur-[100px]" />
        {/* Subtle grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="industry-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.6" fill="#6B7280" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#industry-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex rounded-full border border-purple-200/60 bg-purple-50/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          >
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#6366F1] bg-clip-text text-transparent">
              Industries
            </span>
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-[34px] font-extrabold leading-tight tracking-tight text-[#111827] sm:text-[48px] lg:text-[64px]"
          >
            Deliver Unified Customer{" "}
            <br className="hidden sm:block" />
            Experiences with{" "}
            <span className="bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">
              AI
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-base leading-relaxed text-gray-600 md:text-lg"
          >
            Transform customer engagement with AI-powered communication, cloud
            telephony, automation, and intelligent routing designed for every
            industry.
          </motion.p>
        </div>

        {/* Desktop Grid - 4 columns showing first 4, then remaining as scroll */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.slice(0, 8).map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none md:hidden">
          {INDUSTRIES.map((industry, index) => (
            <div key={industry.id} className="w-[280px] flex-shrink-0">
              <IndustryCard industry={industry} index={index} />
            </div>
          ))}
        </div>

        {/* Show more industries row on desktop */}
        <div className="mt-6 hidden gap-6 lg:grid lg:grid-cols-4">
          {INDUSTRIES.slice(8).map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index + 8} />
          ))}
        </div>
      </div>
    </section>
  );
}
