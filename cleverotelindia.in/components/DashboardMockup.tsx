"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  PhoneCall,
  Headphones,
  BarChart3,
  Settings,
  Search,
  Bell,
  TrendingUp,
  PhoneIncoming,
  PhoneMissed,
  PhoneOutgoing,
} from "lucide-react";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Management", active: false },
  { icon: PhoneCall, label: "Telephony", active: false },
  { icon: Headphones, label: "Call Center", active: false },
  { icon: BarChart3, label: "Reports", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const callStats = [
  { label: "Live Calls", value: "10", color: "bg-emerald-500", icon: PhoneCall },
  { label: "Connected Calls", value: "45", color: "bg-blue-500", icon: PhoneOutgoing },
  { label: "Missed Calls", value: "25", color: "bg-amber-500", icon: PhoneMissed },
  { label: "Total Today", value: "80", color: "bg-purple-500", icon: PhoneIncoming },
];

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative z-10 overflow-hidden rounded-3xl border border-gray-200/60 bg-white shadow-2xl shadow-gray-900/10"
    >
      <div className="flex h-[480px] md:h-[520px]">
        {/* Sidebar */}
        <aside className="hidden w-56 flex-shrink-0 border-r border-gray-100 bg-[#0F172A] p-4 md:block">
          {/* Logo in sidebar */}
          <div className="mb-6 flex items-center gap-2 px-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#5B5CF6] to-[#D946EF]">
              <span className="text-xs font-bold text-white">C</span>
            </div>
            <span className="text-sm font-semibold text-white">CleverOTel</span>
          </div>

          <nav className="flex flex-col gap-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <div
                  key={link.label}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    link.active
                      ? "bg-[#5B5CF6] text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{link.label}</span>
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Top bar */}
          <header className="flex h-14 items-center justify-between border-b border-gray-100 px-5">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-semibold text-[#111827]">Dashboard</h2>
              <span className="text-xs text-gray-400">Welcome back!</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 sm:flex">
                <Search className="h-3.5 w-3.5 text-gray-400" />
                <span className="text-xs text-gray-400">Search...</span>
              </div>
              <button className="relative rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600" aria-label="Notifications">
                <Bell className="h-4 w-4" />
                <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-red-500" />
              </button>
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#5B5CF6] to-[#D946EF]" />
            </div>
          </header>

          {/* Dashboard content */}
          <div className="flex-1 overflow-hidden p-5">
            {/* Call Status Cards */}
            <div className="mb-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Current Call Status
              </p>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {callStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 p-3"
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.color} text-white`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-[#111827]">
                          {stat.value}
                        </p>
                        <p className="text-[10px] text-gray-500">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Donut Chart */}
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <p className="mb-3 text-xs font-semibold text-gray-600">
                  Outgoing Call Stats
                </p>
                <div className="flex items-center justify-center">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    className="drop-shadow-sm"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="12"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      fill="none"
                      stroke="#5B5CF6"
                      strokeWidth="12"
                      strokeDasharray="154 220"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      fill="none"
                      stroke="#D946EF"
                      strokeWidth="12"
                      strokeDasharray="44 220"
                      strokeDashoffset="-154"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <text
                      x="50"
                      y="48"
                      textAnchor="middle"
                      className="fill-[#111827] text-lg font-bold"
                      fontSize="16"
                      fontWeight="700"
                    >
                      70
                    </text>
                    <text
                      x="50"
                      y="62"
                      textAnchor="middle"
                      className="fill-gray-400"
                      fontSize="8"
                    >
                      Total Calls
                    </text>
                  </svg>
                </div>
                <div className="mt-3 flex justify-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#5B5CF6]" />
                    <span className="text-[10px] text-gray-500">Connected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#D946EF]" />
                    <span className="text-[10px] text-gray-500">Busy</span>
                  </div>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold text-gray-600">
                    Weekly Performance
                  </p>
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                </div>
                <div className="flex h-[100px] items-end gap-2 pt-2">
                  {[65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex flex-1 flex-col items-center gap-1"
                    >
                      <div
                        className="w-full rounded-t-md bg-gradient-to-t from-[#5B5CF6] to-[#818CF8] transition-all"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[8px] text-gray-400">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Line Chart */}
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <p className="mb-3 text-xs font-semibold text-gray-600">
                  Call Trends
                </p>
                <svg
                  viewBox="0 0 200 80"
                  className="h-[100px] w-full"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  {[20, 40, 60].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="200"
                      y2={y}
                      stroke="#F3F4F6"
                      strokeWidth="0.5"
                    />
                  ))}
                  {/* Area fill */}
                  <path
                    d="M0,60 Q25,50 50,45 T100,35 T150,25 T200,30 L200,80 L0,80 Z"
                    fill="url(#areaGrad)"
                    opacity="0.3"
                  />
                  {/* Line */}
                  <path
                    d="M0,60 Q25,50 50,45 T100,35 T150,25 T200,30"
                    fill="none"
                    stroke="#5B5CF6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="areaGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#5B5CF6" />
                      <stop offset="100%" stopColor="#5B5CF6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Dots */}
                  <circle cx="50" cy="45" r="3" fill="#5B5CF6" />
                  <circle cx="100" cy="35" r="3" fill="#5B5CF6" />
                  <circle cx="150" cy="25" r="3" fill="#5B5CF6" />
                </svg>
              </div>
            </div>

            {/* Campaign Status Row */}
            <div className="mt-4 rounded-xl border border-gray-100 bg-white p-4">
              <p className="mb-3 text-xs font-semibold text-gray-600">
                Campaign Status
              </p>
              <div className="space-y-2.5">
                {[
                  { name: "Campaign 1", progress: 78, color: "bg-[#5B5CF6]" },
                  { name: "Campaign 2", progress: 56, color: "bg-[#D946EF]" },
                  { name: "Campaign 3", progress: 92, color: "bg-emerald-500" },
                ].map((campaign) => (
                  <div key={campaign.name} className="flex items-center gap-3">
                    <span className="w-20 text-[11px] font-medium text-gray-600">
                      {campaign.name}
                    </span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`h-full rounded-full ${campaign.color} transition-all`}
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-700">
                      {campaign.progress}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
