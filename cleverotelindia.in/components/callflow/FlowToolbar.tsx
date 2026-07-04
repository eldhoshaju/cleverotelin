"use client";

import { motion } from "framer-motion";
import {
  PhoneIncoming,
  MessageSquare,
  LayoutGrid,
  Clock,
  Bot,
  Users,
  Headphones,
  Voicemail,
  PhoneOff,
  Database,
  Phone,
  Webhook,
  MessageCircle,
  Mail,
  Plus,
} from "lucide-react";
import { TOOLBAR_ITEMS } from "@/constants/flowBuilder";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  PhoneIncoming,
  MessageSquare,
  LayoutGrid,
  Clock,
  Bot,
  Users,
  Headphones,
  Voicemail,
  PhoneOff,
  Database,
  Phone,
  Webhook,
  MessageCircle,
  Mail,
};

export default function FlowToolbar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="absolute right-4 top-4 z-20 flex flex-col gap-1.5 rounded-2xl border border-white/60 bg-white/80 p-2 shadow-xl backdrop-blur-xl"
    >
      {/* Add button */}
      <div className="mb-1 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#EC4899] to-[#7C3AED] p-2">
        <Plus className="h-3.5 w-3.5 text-white" />
      </div>

      {TOOLBAR_ITEMS.slice(0, 8).map((item, i) => {
        const Icon = iconMap[item.icon];
        return (
          <motion.div
            key={item.type}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.7 + i * 0.04 }}
            whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
            className="group relative flex h-8 w-8 cursor-grab items-center justify-center rounded-xl transition-all duration-200 hover:bg-gray-50"
            title={item.label}
          >
            {Icon && (
              <Icon
                className="h-4 w-4 transition-colors"
                style={{ color: item.color }}
              />
            )}
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-2 hidden whitespace-nowrap rounded-lg bg-gray-900 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 lg:block">
              {item.label}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
