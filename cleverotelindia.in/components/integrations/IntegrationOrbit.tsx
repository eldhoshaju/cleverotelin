"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { INTEGRATION_PLATFORMS } from "@/constants/integrations";
import OrbitRing from "./OrbitRing";
import OrbitNode from "./OrbitNode";

export default function IntegrationOrbit() {
  const innerRadius = 120;
  const outerRadius = 200;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto aspect-square w-full max-w-[500px]"
    >
      {/* Orbit rings */}
      <OrbitRing radius={innerRadius} duration={40} delay={0.3} />
      <OrbitRing radius={outerRadius} duration={60} delay={0.5} />

      {/* Connection lines from center to nodes */}
      <svg className="absolute inset-0 h-full w-full" style={{ overflow: "visible" }}>
        {INTEGRATION_PLATFORMS.map((platform, i) => {
          const radius = platform.orbit === 1 ? innerRadius : outerRadius;
          const angle = (platform.angle * Math.PI) / 180;
          const x = 50 + (Math.cos(angle) * radius) / 2.5;
          const y = 50 + (Math.sin(angle) * radius) / 2.5;

          return (
            <line
              key={`line-${i}`}
              x1="50%"
              y1="50%"
              x2={`${x}%`}
              y2={`${y}%`}
              stroke="rgba(124, 58, 237, 0.08)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          );
        })}
      </svg>

      {/* Center hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 150 }}
      >
        {/* Pulsing rings */}
        <motion.div
          className="absolute h-24 w-24 rounded-full border border-pink-500/20"
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.05, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-18 w-18 rounded-full border border-purple-400/30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Core circle */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#EC4899] via-[#7C3AED] to-[#6366F1] shadow-xl shadow-purple-500/30 sm:h-20 sm:w-20">
          <div className="flex flex-col items-center">
            <Brain className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            <span className="mt-0.5 text-[7px] font-bold text-white/90 sm:text-[8px]">
              CleveroTel
            </span>
          </div>
        </div>
      </motion.div>

      {/* Inner orbit nodes */}
      {INTEGRATION_PLATFORMS.filter((p) => p.orbit === 1).map((platform, i) => (
        <OrbitNode
          key={platform.name}
          platform={platform}
          radius={innerRadius}
          index={i}
        />
      ))}

      {/* Outer orbit nodes */}
      {INTEGRATION_PLATFORMS.filter((p) => p.orbit === 2).map((platform, i) => (
        <OrbitNode
          key={platform.name}
          platform={platform}
          radius={outerRadius}
          index={i + 8}
        />
      ))}
    </motion.div>
  );
}
