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
} from "lucide-react";
import type { FlowNodeData } from "@/constants/flowBuilder";

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

interface FlowNodeProps {
  node: FlowNodeData;
  index: number;
}

export default function FlowNode({ node, index }: FlowNodeProps) {
  const Icon = iconMap[node.icon];

  return (
    <motion.div
      className="group absolute flex cursor-grab flex-col items-center"
      style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ backgroundColor: `${node.color}15` }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
      />

      {/* Node body */}
      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl"
        style={{ boxShadow: `0 4px 20px ${node.color}20` }}
      >
        {/* Selection glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: `0 0 0 2px ${node.color}40, 0 0 20px ${node.color}20` }}
        />
        {Icon && <Icon className="relative h-5 w-5" style={{ color: node.color }} />}
      </div>

      {/* Label */}
      <span className="mt-1.5 whitespace-nowrap text-[9px] font-medium text-gray-500">
        {node.label}
      </span>
    </motion.div>
  );
}
