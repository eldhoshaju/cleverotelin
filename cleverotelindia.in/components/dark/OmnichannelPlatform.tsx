"use client";

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
} from "lucide-react";
import NetworkNode from "./NetworkNode";
import ConnectionLine from "./ConnectionLine";

const nodes = [
  { icon: MessageCircle, label: "WhatsApp", x: 15, y: 20, accent: "#25D366" },
  { icon: Phone, label: "Voice Calls", x: 8, y: 50, accent: "#60A5FA" },
  { icon: MessageSquare, label: "SMS", x: 15, y: 80, accent: "#FBBF24" },
  { icon: Mail, label: "Email", x: 35, y: 10, accent: "#F87171" },
  { icon: BarChart3, label: "Analytics", x: 35, y: 90, accent: "#34D399" },
  { icon: PhoneForwarded, label: "IVR", x: 65, y: 10, accent: "#A78BFA" },
  { icon: Bot, label: "AI Bot", x: 85, y: 20, accent: "#FB923C" },
  { icon: Video, label: "Video", x: 92, y: 50, accent: "#EC4899" },
  { icon: Code, label: "API", x: 85, y: 80, accent: "#22D3EE" },
  { icon: HelpCircle, label: "Helpdesk", x: 65, y: 90, accent: "#E879F9" },
  { icon: LayoutDashboard, label: "Dashboard", x: 30, y: 55, accent: "#6366F1" },
  { icon: Smartphone, label: "Mobile App", x: 70, y: 55, accent: "#14B8A6" },
];

// Center hub position
const hubX = 50;
const hubY = 50;

export default function OmnichannelPlatform() {
  return (
    <div>
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mb-5 flex justify-center"
      >
        <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-pink-300">
          Platform
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 text-center text-3xl font-extrabold tracking-tight sm:text-4xl"
      >
        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Omnichannel Communication Platform
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mb-16 max-w-xl text-center text-base text-gray-400"
      >
        Connect every customer conversation through one intelligent cloud platform.
      </motion.p>

      {/* Network Diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mx-auto aspect-square w-full max-w-[700px]"
      >
        {/* SVG connection lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {nodes.map((node, i) => (
            <ConnectionLine
              key={`line-${i}`}
              x1={hubX}
              y1={hubY}
              x2={node.x}
              y2={node.y}
              delay={i * 0.3}
            />
          ))}
        </svg>

        {/* Central Hub */}
        <motion.div
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
        >
          {/* Pulsing rings */}
          <motion.div
            className="absolute h-28 w-28 rounded-full border border-purple-500/20 sm:h-32 sm:w-32"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-20 w-20 rounded-full border border-pink-500/30 sm:h-24 sm:w-24"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.15, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Core circle */}
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-purple-500/30 sm:h-20 sm:w-20">
            <span className="text-[10px] font-bold text-white sm:text-xs">
              CleveroTel
            </span>
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
            delay={0.4 + i * 0.08}
            accent={node.accent}
          />
        ))}
      </motion.div>
    </div>
  );
}
