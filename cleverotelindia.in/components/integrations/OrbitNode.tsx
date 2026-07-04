"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Target,
  Hash,
  Monitor,
  Globe,
  Video,
  MessageCircle,
  Zap,
  FileText,
  ShoppingBag,
  LifeBuoy,
  Headphones,
  Layers,
  CreditCard,
  GitBranch,
  Database,
  MessagesSquare,
} from "lucide-react";
import type { IntegrationPlatform } from "@/constants/integrations";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Cloud,
  Target,
  Hash,
  Monitor,
  Globe,
  Video,
  MessageCircle,
  Zap,
  FileText,
  ShoppingBag,
  LifeBuoy,
  Headphones,
  Layers,
  CreditCard,
  GitBranch,
  Database,
  MessagesSquare,
};

interface OrbitNodeProps {
  platform: IntegrationPlatform;
  radius: number;
  index: number;
}

export default function OrbitNode({ platform, radius, index }: OrbitNodeProps) {
  const Icon = iconMap[platform.icon];
  const angle = (platform.angle * Math.PI) / 180;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-10"
      style={{
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: 0.5 + index * 0.05,
        type: "spring",
        stiffness: 200,
      }}
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 3 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
        className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-white/25 hover:bg-white/[0.1] hover:shadow-xl sm:h-12 sm:w-12"
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50"
          style={{ backgroundColor: `${platform.color}30` }}
        />
        {Icon && (
          <Icon
            className="relative h-4 w-4 sm:h-5 sm:w-5"
            style={{ color: platform.color }}
          />
        )}
        {/* Tooltip */}
        <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-2 py-0.5 text-[8px] font-medium text-white/70 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
          {platform.name}
        </span>
      </motion.div>
    </motion.div>
  );
}
