"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Users,
  Phone,
  Brain,
  BarChart3,
  Radio,
} from "lucide-react";
import { FLOATING_WIDGETS } from "@/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Mic,
  Users,
  Phone,
  Brain,
  BarChart3,
  Radio,
};

// Positions for floating widgets around the dashboard
const positions = [
  // Left side
  { top: "5%", left: "-80px", delay: 0.8 },
  { top: "45%", left: "-90px", delay: 1.0 },
  // Right side
  { top: "0%", right: "-80px", delay: 0.9 },
  { top: "40%", right: "-85px", delay: 1.1 },
  // Additional positions for wider screens
  { top: "75%", left: "-70px", delay: 1.2 },
  { top: "70%", right: "-75px", delay: 1.3 },
];

export default function FloatingWidgets() {
  return (
    <>
      {FLOATING_WIDGETS.map((widget, index) => {
        const Icon = iconMap[widget.icon];
        const pos = positions[index];
        if (!Icon || !pos) return null;

        return (
          <motion.div
            key={widget.title}
            className="absolute z-20 hidden lg:block"
            style={{
              top: pos.top,
              left: "left" in pos ? pos.left : undefined,
              right: "right" in pos ? pos.right : undefined,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: pos.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.2 },
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${widget.color}15` }}
              >
                <Icon className="h-4 w-4" style={{ color: widget.color }} />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#111827]">
                  {widget.title}
                </p>
                <p className="text-[10px] text-[#6B7280]">
                  {widget.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}
