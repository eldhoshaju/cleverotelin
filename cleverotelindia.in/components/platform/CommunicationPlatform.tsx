"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Video,
  MessageCircle,
  MessageSquare,
  Mail,
  Database,
  Bot,
  BarChart3,
  Mic,
  Brain,
  GraduationCap,
  AudioWaveform,
  UserCircle,
  Code,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import PlatformNode from "./PlatformNode";
import AnimatedConnection from "./AnimatedConnection";

const nodes = [
  { icon: Phone, label: "Voice Calls", x: 12, y: 22, accent: "#3B82F6" },
  { icon: Video, label: "Video Meetings", x: 8, y: 48, accent: "#8B5CF6" },
  { icon: MessageCircle, label: "WhatsApp", x: 12, y: 74, accent: "#25D366" },
  { icon: MessageSquare, label: "SMS", x: 30, y: 10, accent: "#F59E0B" },
  { icon: Mail, label: "Email", x: 30, y: 88, accent: "#EF4444" },
  { icon: Database, label: "CRM", x: 70, y: 10, accent: "#06B6D4" },
  { icon: Bot, label: "AI Voice Bot", x: 88, y: 22, accent: "#EC4899" },
  { icon: BarChart3, label: "Analytics", x: 92, y: 48, accent: "#10B981" },
  { icon: Mic, label: "Call Recording", x: 88, y: 74, accent: "#7C3AED" },
  { icon: Brain, label: "Sentiment", x: 70, y: 88, accent: "#F97316" },
  { icon: GraduationCap, label: "Deep Learning", x: 25, y: 50, accent: "#14B8A6" },
  { icon: AudioWaveform, label: "Speech Analytics", x: 75, y: 50, accent: "#6366F1" },
  { icon: UserCircle, label: "Customer Profile", x: 35, y: 70, accent: "#D946EF" },
  { icon: Code, label: "API", x: 65, y: 70, accent: "#0EA5E9" },
  { icon: BookOpen, label: "Knowledge Base", x: 35, y: 30, accent: "#84CC16" },
];

const hubX = 50;
const hubY = 50;

export default function CommunicationPlatform() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F7] px-5 py-20 sm:px-6 lg:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[10%] h-[400px] w-[400px] rounded-full bg-pink-100/30 blur-[100px]" />
        <div className="absolute bottom-[15%] right-[15%] h-[350px] w-[350px] rounded-full bg-purple-100/25 blur-[80px]" />
        <div className="absolute left-[60%] top-[50%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/20 blur-[70px]" />
        {/* Subtle grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="platform-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.6" fill="#6B7280" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#platform-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-[42%_58%] lg:gap-8">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-pink-200/60 bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#EC4899]"
            >
              <Sparkles className="h-3 w-3" />
              AI Platform
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-5xl"
            >
              Building the Future{" "}
              <span className="bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">
                of Business Communication
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-lg text-base leading-relaxed text-gray-600 lg:text-lg"
            >
              Bring together cloud telephony, AI voice agents, CRM integrations,
              messaging, analytics and automation into one intelligent
              communication platform.
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
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#EC4899] to-[#7C3AED] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-300/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-300/40"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#374151] transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200 hover:shadow-lg"
              >
                Book Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right - Ecosystem Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-[580px]"
          >
            {/* SVG connections */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
            >
              {nodes.map((node, i) => (
                <AnimatedConnection
                  key={`conn-${i}`}
                  x1={hubX}
                  y1={hubY}
                  x2={node.x}
                  y2={node.y}
                  index={i}
                />
              ))}
            </svg>

            {/* Central AI Hub */}
            <motion.div
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 180 }}
            >
              {/* Pulsing outer rings */}
              <motion.div
                className="absolute h-24 w-24 rounded-full border border-pink-300/20 sm:h-28 sm:w-28"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.08, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute h-18 w-18 rounded-full border border-purple-400/30 sm:h-22 sm:w-22"
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />

              {/* Core */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#EC4899] via-[#7C3AED] to-[#6366F1] shadow-xl shadow-purple-400/30 sm:h-20 sm:w-20">
                <div className="flex flex-col items-center">
                  <Brain className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  <span className="mt-0.5 text-[7px] font-bold text-white/90 sm:text-[8px]">
                    AI Platform
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Nodes */}
            {nodes.map((node, i) => (
              <PlatformNode
                key={node.label}
                icon={node.icon}
                label={node.label}
                x={node.x}
                y={node.y}
                delay={0.5 + i * 0.06}
                accent={node.accent}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
