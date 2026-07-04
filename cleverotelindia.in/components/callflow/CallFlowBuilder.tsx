"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import FlowCanvas from "./FlowCanvas";

export default function CallFlowBuilder() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8F7FF] to-white px-5 py-20 sm:px-6 lg:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[5%] h-[500px] w-[500px] rounded-full bg-purple-100/25 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-100/20 blur-[90px]" />
        <div className="absolute left-[50%] top-[40%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-pink-100/15 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex rounded-full border border-purple-200/60 bg-gradient-to-r from-purple-50 to-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7C3AED]"
          >
            No Code Flow Builder
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-[64px]"
          >
            Customize Your{" "}
            <span className="bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">
              Call Flow
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 max-w-xl text-base leading-relaxed text-gray-600 lg:text-lg"
          >
            Design intelligent IVR workflows using a simple drag-and-drop visual
            editor. Create routing rules, menus, business hours, AI voice agents
            and queue logic without writing code.
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
              href="#build-flow"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#6366F1] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-300/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Build Your Flow
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#demo"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#374151] transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-lg"
            >
              <Play className="h-4 w-4 text-[#7C3AED]" />
              Watch Demo
            </a>
          </motion.div>
        </div>

        {/* Flow Canvas */}
        <FlowCanvas />
      </div>
    </section>
  );
}
