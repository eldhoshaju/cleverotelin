"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import DashboardPreview from "./DashboardPreview";
import FloatingAvatar from "./FloatingAvatar";

const floatingAvatars = [
  { initials: "SJ", color: "#7C3AED", x: "-3%", y: "25%", delay: 0.5 },
  { initials: "MC", color: "#EC4899", x: "95%", y: "15%", delay: 0.7 },
  { initials: "ED", color: "#F59E0B", x: "90%", y: "75%", delay: 0.9 },
  { initials: "JW", color: "#10B981", x: "5%", y: "70%", delay: 0.6, size: "sm" as const },
];

export default function AnalyticsSection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-20 sm:px-6 lg:py-32"
      style={{
        borderRadius: "64px 64px 0 0",
        background: "linear-gradient(135deg, #FDE68A 0%, #FBBF24 25%, #F59E0B 50%, #FB923C 75%, #FDBA74 100%)",
      }}
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[10%] h-[300px] w-[300px] rounded-full bg-white/10 blur-[80px]" />
        <div className="absolute bottom-[20%] right-[10%] h-[250px] w-[250px] rounded-full bg-orange-300/20 blur-[60px]" />
        {/* Subtle grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="analytics-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#analytics-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-orange-800/20 bg-orange-900/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-900"
            >
              <Sparkles className="h-3 w-3" />
              Analytics
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl"
            >
              Advanced Performance Reports
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-md text-base leading-relaxed text-orange-900/70 lg:text-lg"
            >
              Monitor calls, agent productivity, customer satisfaction, revenue
              and business performance with powerful analytics dashboards.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-gray-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-2xl"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-orange-900/20 bg-white/30 px-7 py-3.5 text-sm font-semibold text-orange-900 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/50 hover:shadow-lg"
              >
                View Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right - Dashboard */}
          <div className="relative">
            {/* Floating avatars */}
            {floatingAvatars.map((avatar) => (
              <FloatingAvatar key={avatar.initials} {...avatar} />
            ))}

            {/* Notification card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              animate={{ y: [0, -4, 0] }}
              className="absolute -right-4 top-4 z-30 hidden rounded-xl border border-white/50 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md lg:block"
              style={{ transform: "rotate(2deg)" }}
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-[9px] font-medium text-gray-700">Live: 24 agents active</span>
              </div>
            </motion.div>

            {/* Performance badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.0 }}
              animate={{ y: [0, -3, 0] }}
              className="absolute -left-4 bottom-8 z-30 hidden rounded-xl border border-white/50 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md lg:block"
              style={{ transform: "rotate(-2deg)" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500">
                  <span className="text-[7px] font-bold text-white">★</span>
                </div>
                <span className="text-[9px] font-medium text-gray-700">94.2% resolution rate</span>
              </div>
            </motion.div>

            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
