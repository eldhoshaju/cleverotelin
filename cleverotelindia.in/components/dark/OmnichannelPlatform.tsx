"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  MessageSquare,
  BarChart3,
  PhoneForwarded,
  Bot,
  Video,
  Code,
  HelpCircle,
  LayoutDashboard,
  Smartphone,
  Radio,
  Cpu,
  LineChart,
  Blocks,
} from "lucide-react";
import NetworkNode from "./NetworkNode";
import ConnectionLine from "./ConnectionLine";

// Timeline features
const timelineFeatures = [
  {
    icon: Radio,
    title: "Unified Communication",
    description:
      "Connect Voice Calls, WhatsApp, SMS, Email, IVR, Video, and Mobile App into one centralized communication platform.",
  },
  {
    icon: Cpu,
    title: "Intelligent Automation",
    description:
      "Automate customer interactions with AI Bots, IVR routing, APIs, and workflow automation to improve response time.",
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    description:
      "Track conversations, monitor performance, analyze customer behavior, and generate actionable reports using real-time analytics.",
  },
  {
    icon: Blocks,
    title: "Scalable Integrations",
    description:
      "Integrate seamlessly with CRMs, Helpdesk platforms, APIs, dashboards, and third-party business applications.",
  },
];

// 12 nodes placed in a perfect circle (30° apart)
const nodeData = [
  { icon: Mail, label: "Email", accent: "#2563EB" },
  { icon: PhoneForwarded, label: "IVR", accent: "#2563EB" },
  { icon: Bot, label: "AI Bot", accent: "#2563EB" },
  { icon: Video, label: "Video", accent: "#2563EB" },
  { icon: Smartphone, label: "Mobile App", accent: "#2563EB" },
  { icon: Code, label: "API", accent: "#2563EB" },
  { icon: HelpCircle, label: "Helpdesk", accent: "#2563EB" },
  { icon: BarChart3, label: "Analytics", accent: "#2563EB" },
  { icon: MessageSquare, label: "SMS", accent: "#2563EB" },
  { icon: LayoutDashboard, label: "Dashboard", accent: "#2563EB" },
  { icon: Phone, label: "Voice Calls", accent: "#2563EB" },
  { icon: MessageCircle, label: "WhatsApp", accent: "#2563EB" },
];

const RADIUS = 40;
const CENTER = 50;

const nodes = nodeData.map((node, i) => {
  const angle = (i * 30 - 90) * (Math.PI / 180);
  return {
    ...node,
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  };
});

export default function OmnichannelPlatform() {
  return (
    <section
      className="relative overflow-hidden px-5 py-20 sm:px-6 lg:py-28"
      style={{
        background: "linear-gradient(180deg, #F4F8FC 0%, #EEF5FC 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-3xl font-extrabold leading-tight text-[#334155] sm:text-4xl lg:text-[42px]">
            How CleveroTel Powers{" "}
            <span className="text-[#0F172A]">
              Modern Business Communication
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[42%_58%] lg:gap-16">
          {/* Left - Vertical Timeline */}
          <div className="relative">
            {/* Vertical blue line */}
            <div className="absolute left-[11px] top-4 bottom-4 w-[2px] rounded-full bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-[#3B82F6]/30" />

            <div className="flex flex-col gap-10">
              {timelineFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="relative flex gap-5 pl-8"
                  >
                    {/* Timeline node */}
                    <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#3B82F6] bg-white shadow-sm">
                      <div className="h-2 w-2 rounded-full bg-[#3B82F6]" />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#2563EB]" />
                        <h3 className="text-base font-bold text-[#0F172A]">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#64748B]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right - Radial Communication Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-[560px]"
          >
            {/* Concentric circle rings */}
            <div className="absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3B82F6]/[0.07]" />
            <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3B82F6]/[0.1]" />
            <div className="absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3B82F6]/[0.12]" />
            <div className="absolute left-1/2 top-1/2 h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3B82F6]/[0.15]" />

            {/* Soft blue radial glow */}
            <div className="absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/[0.04] blur-[30px]" />

            {/* SVG connection lines */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
            >
              {nodes.map((node, i) => (
                <ConnectionLine
                  key={`line-${i}`}
                  x1={CENTER}
                  y1={CENTER}
                  x2={node.x}
                  y2={node.y}
                  delay={i}
                />
              ))}
            </svg>

            {/* Central Hub */}
            <motion.div
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 180 }}
            >
              {/* Pulse ring */}
              <motion.div
                className="absolute h-24 w-24 rounded-full border border-[#3B82F6]/20 sm:h-28 sm:w-28"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.08, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Core circle with logo */}
              <div className="relative flex h-18 w-18 items-center justify-center overflow-hidden rounded-full border border-blue-100 bg-white shadow-xl shadow-blue-200/40 sm:h-22 sm:w-22">
                <Image
                  src="/CleveroTel-Icon (2).webp"
                  alt="CleveroTel"
                  width={64}
                  height={64}
                  className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                />
              </div>
            </motion.div>

            {/* Network Nodes */}
            {nodes.map((node, i) => (
              <NetworkNode
                key={node.label}
                icon={node.icon}
                label={node.label}
                x={node.x}
                y={node.y}
                delay={0.4 + i * 0.05}
                accent={node.accent}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
