"use client";

import { motion } from "framer-motion";
import GradientBackground from "./GradientBackground";
import DotPattern from "./DotPattern";
import GlowEffect from "./GlowEffect";
import HeroButtons from "./HeroButtons";
import DashboardMockup from "./DashboardMockup";
import FloatingWidgets from "./FloatingWidgets";

export default function Hero() {
  return (
    <section className="relative min-h-[850px] w-full overflow-hidden bg-white pt-20">
      {/* Background layers */}
      <DotPattern />
      <GradientBackground />
      <GlowEffect />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 md:pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 rounded-full border border-[#5B5CF6]/20 bg-[#5B5CF6]/5 px-4 py-1.5 text-sm font-medium text-[#5B5CF6]"
        >
          Trusted by 4,000+ businesses across India
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-6 max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.1]"
        >
          Transform Your{" "}
          <span className="bg-gradient-to-r from-[#5B5CF6] via-[#7C3AED] to-[#D946EF] bg-clip-text text-transparent">
            Business Communication
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-10 max-w-[680px] text-center text-lg leading-relaxed text-[#6B7280] md:text-xl"
        >
          Empower your team with enterprise-grade cloud telephony, AI-powered
          call centers, and seamless CRM integrations.
        </motion.p>

        {/* CTA Buttons */}
        <HeroButtons />

        {/* Dashboard + Floating Widgets */}
        <div className="relative mt-16 w-full max-w-[960px] md:mt-20">
          <DashboardMockup />
          <FloatingWidgets />
        </div>
      </div>
    </section>
  );
}
