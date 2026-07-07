"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Bot,
  MessageCircle,
  Database,
  Phone,
  BarChart3,
  Headphones,
} from "lucide-react";

const floatingItems = [
  { icon: Cloud, label: "Cloud PBX", x: "8%", y: "12%", delay: 0, color: "#7C3AED" },
  { icon: Bot, label: "AI", x: "72%", y: "8%", delay: 0.2, color: "#3B82F6" },
  { icon: MessageCircle, label: "WhatsApp", x: "5%", y: "55%", delay: 0.4, color: "#25D366" },
  { icon: Database, label: "CRM", x: "75%", y: "45%", delay: 0.3, color: "#F59E0B" },
  { icon: Phone, label: "Voice", x: "70%", y: "75%", delay: 0.5, color: "#EC4899" },
  { icon: BarChart3, label: "Analytics", x: "10%", y: "80%", delay: 0.6, color: "#10B981" },
];

export default function ModalIllustration() {
  return (
    <div className="relative flex h-full min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#EC4899]/80 via-[#7C3AED]/80 to-[#3B82F6]/80 p-8 lg:min-h-full lg:rounded-l-3xl lg:rounded-r-none">
      {/* Blurred background circles */}
      <div className="absolute left-[20%] top-[20%] h-32 w-32 rounded-full bg-white/10 blur-[40px]" />
      <div className="absolute bottom-[20%] right-[20%] h-24 w-24 rounded-full bg-white/10 blur-[30px]" />

      {/* Central headset icon as person representation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md sm:h-32 sm:w-32">
          <Headphones className="h-14 w-14 text-white sm:h-16 sm:w-16" />
        </div>
        <p className="mt-3 text-sm font-semibold text-white/90">CleveroTel</p>
        <p className="text-xs text-white/60">Enterprise Communication</p>
      </motion.div>

      {/* Floating UI cards */}
      {floatingItems.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            className="absolute z-10"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + item.delay }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3 + item.delay, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/15 px-2.5 py-1.5 backdrop-blur-md"
            >
              <Icon className="h-3.5 w-3.5 text-white" />
              <span className="text-[10px] font-medium text-white/90">{item.label}</span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
