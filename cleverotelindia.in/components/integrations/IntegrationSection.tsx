"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { FEATURE_LIST } from "@/constants/integrations";
import IntegrationOrbit from "./IntegrationOrbit";

export default function IntegrationSection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-20 sm:px-6 lg:py-32"
      style={{
        borderRadius: "80px 80px 0 0",
        background: "linear-gradient(135deg, #071B63 0%, #0A1E4A 50%, #0D1137 100%)",
      }}
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
        <motion.div
          className="absolute left-[50%] top-[50%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/3 blur-[80px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-8">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300"
            >
              100+ Integrations
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Designed to{" "}
              <span className="bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">
                Integrate Seamlessly
              </span>{" "}
              with Any Business System
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-lg text-base leading-relaxed text-blue-100/60 lg:text-lg"
            >
              Connect CleveroTel with your CRM, Helpdesk, ERP, Collaboration
              tools, Marketing platforms, AI services and custom APIs in minutes.
            </motion.p>

            {/* Feature list */}
            <div className="mb-10 grid grid-cols-2 gap-2.5">
              {FEATURE_LIST.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.04 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80" />
                  <span className="text-sm text-blue-100/70">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#integrations"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#EC4899] to-[#7C3AED] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore Integrations
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#api-docs"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <BookOpen className="h-4 w-4" />
                View API Docs
              </a>
            </motion.div>
          </div>

          {/* Right - Orbit */}
          <div className="relative flex items-center justify-center py-8">
            <IntegrationOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
