"use client";

import { motion } from "framer-motion";
import { FLOW_NODES, FLOW_EDGES } from "@/constants/flowBuilder";
import FlowNode from "./FlowNode";
import FlowToolbar from "./FlowToolbar";

function getNodeCenter(nodeId: string): { x: number; y: number } {
  const node = FLOW_NODES.find((n) => n.id === nodeId);
  return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
}

function createBezierPath(from: { x: number; y: number }, to: { x: number; y: number }): string {
  const dx = to.x - from.x;
  const midX = from.x + dx * 0.5;
  return `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;
}

export default function FlowCanvas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto w-full max-w-[940px] overflow-hidden rounded-3xl border border-gray-200/60 bg-white shadow-2xl shadow-purple-200/20"
    >
      {/* Canvas area */}
      <div className="relative h-[320px] overflow-x-auto sm:h-[380px] md:h-[420px]">
        {/* Dot grid background */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="flow-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#6B7280" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#flow-dots)" />
        </svg>

        {/* SVG Edges */}
        <svg className="absolute inset-0 h-full w-full" style={{ minWidth: "900px" }}>
          <defs>
            <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {FLOW_EDGES.map((edge, i) => {
            const from = getNodeCenter(edge.from);
            const to = getNodeCenter(edge.to);
            const path = createBezierPath(from, to);

            return (
              <g key={`${edge.from}-${edge.to}`}>
                {/* Base path */}
                <path
                  d={path}
                  fill="none"
                  stroke="url(#edge-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                {/* Animated dot */}
                <motion.circle
                  r="3"
                  fill="#7C3AED"
                  opacity="0.8"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{
                    duration: 2.5 + i * 0.3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.4,
                  }}
                  style={{ offsetPath: `path("${path}")` }}
                />
              </g>
            );
          })}
        </svg>

        {/* Nodes layer */}
        <div className="absolute inset-0" style={{ minWidth: "900px" }}>
          {FLOW_NODES.map((node, index) => (
            <FlowNode key={node.id} node={node} index={index} />
          ))}
        </div>

        {/* Toolbar */}
        <FlowToolbar />
      </div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/50 px-5 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-medium text-gray-500">Flow Active</span>
          </div>
          <span className="text-[10px] text-gray-400">9 nodes · 9 connections</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[9px] font-medium text-gray-500">
            Drag to edit
          </span>
        </div>
      </div>
    </motion.div>
  );
}
