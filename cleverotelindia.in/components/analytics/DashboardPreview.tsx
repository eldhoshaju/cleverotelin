"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Clock,
  TrendingUp,
  Users,
  Star,
  MoreHorizontal,
} from "lucide-react";

const agents = [
  { name: "Sarah Johnson", calls: 45, rating: 4.9, status: "online" },
  { name: "Michael Chen", calls: 38, rating: 4.8, status: "busy" },
  { name: "Emily Davis", calls: 52, rating: 4.7, status: "online" },
  { name: "James Wilson", calls: 31, rating: 4.6, status: "online" },
  { name: "Lisa Park", calls: 41, rating: 4.9, status: "busy" },
];

const kpis = [
  { label: "Total Calls", value: "2,847", change: "+12.5%", icon: PhoneCall, color: "from-purple-500 to-indigo-500" },
  { label: "Avg Duration", value: "4:32", change: "+8.2%", icon: Clock, color: "from-pink-500 to-rose-500" },
  { label: "Resolution Rate", value: "94.2%", change: "+3.1%", icon: TrendingUp, color: "from-emerald-500 to-teal-500" },
  { label: "Active Agents", value: "24", change: "+2", icon: Users, color: "from-amber-500 to-orange-500" },
];

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl shadow-orange-900/10"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <span className="text-[10px] font-medium text-gray-400">Performance Reports</span>
        <MoreHorizontal className="h-4 w-4 text-gray-400" />
      </div>

      <div className="p-5">
        {/* KPI Cards */}
        <div className="mb-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div key={kpi.label} className="rounded-2xl border border-gray-100 bg-gray-50/50 p-3">
                <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${kpi.color}`}>
                  <Icon className="h-3.5 w-3.5 text-white" />
                </div>
                <p className="text-lg font-bold text-gray-900">{kpi.value}</p>
                <div className="flex items-center justify-between">
                  <p className="text-[9px] text-gray-500">{kpi.label}</p>
                  <span className="text-[9px] font-semibold text-emerald-500">{kpi.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts row */}
        <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Bar chart */}
          <div className="rounded-2xl border border-gray-100 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-700">Weekly Calls</p>
              <span className="text-[9px] text-gray-400">This week</span>
            </div>
            <div className="flex h-24 items-end gap-2">
              {[55, 72, 48, 85, 63, 90, 77].map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-amber-400 to-orange-400 transition-all"
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[7px] text-gray-400">
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut chart */}
          <div className="rounded-2xl border border-gray-100 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-700">Call Distribution</p>
              <span className="text-[9px] text-gray-400">Today</span>
            </div>
            <div className="flex items-center gap-4">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="28" fill="none" stroke="#F3F4F6" strokeWidth="10" />
                <circle cx="40" cy="40" r="28" fill="none" stroke="#F59E0B" strokeWidth="10" strokeDasharray="110 176" strokeLinecap="round" transform="rotate(-90 40 40)" />
                <circle cx="40" cy="40" r="28" fill="none" stroke="#7C3AED" strokeWidth="10" strokeDasharray="44 176" strokeDashoffset="-110" strokeLinecap="round" transform="rotate(-90 40 40)" />
                <circle cx="40" cy="40" r="28" fill="none" stroke="#EC4899" strokeWidth="10" strokeDasharray="22 176" strokeDashoffset="-154" strokeLinecap="round" transform="rotate(-90 40 40)" />
              </svg>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="text-[9px] text-gray-600">Inbound 62%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <span className="text-[9px] text-gray-600">Outbound 25%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-pink-500" />
                  <span className="text-[9px] text-gray-600">Internal 13%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent table */}
        <div className="rounded-2xl border border-gray-100 p-4">
          <p className="mb-3 text-xs font-semibold text-gray-700">Top Agents</p>
          <div className="space-y-2">
            {agents.map((agent, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition-colors hover:bg-gray-50">
                <div className="relative">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-pink-100">
                    <span className="text-[8px] font-bold text-purple-600">{agent.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <div className={`absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-white ${agent.status === "online" ? "bg-emerald-400" : "bg-amber-400"}`} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold text-gray-800">{agent.name}</p>
                </div>
                <div className="flex items-center gap-1">
                  <PhoneCall className="h-2.5 w-2.5 text-gray-400" />
                  <span className="text-[9px] text-gray-500">{agent.calls}</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                  <span className="text-[9px] font-medium text-gray-600">{agent.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
