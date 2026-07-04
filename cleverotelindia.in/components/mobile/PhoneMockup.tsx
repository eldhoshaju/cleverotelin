"use client";

import { motion } from "framer-motion";
import {
  Phone,
  User,
  Clock,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  Voicemail,
  MessageSquare,
  BarChart3,
  Users,
} from "lucide-react";

interface PhoneScreenProps {
  variant: "calls" | "contacts" | "analytics" | "chat";
  className?: string;
  rotation?: number;
  delay?: number;
  zIndex?: number;
}

function CallsScreen() {
  const calls = [
    { name: "Sarah Johnson", time: "2 min ago", type: "incoming", icon: PhoneIncoming, color: "text-emerald-500" },
    { name: "David Miller", time: "15 min ago", type: "outgoing", icon: PhoneOutgoing, color: "text-blue-500" },
    { name: "Emily Chen", time: "1 hr ago", type: "missed", icon: PhoneMissed, color: "text-red-500" },
    { name: "James Wilson", time: "2 hrs ago", type: "voicemail", icon: Voicemail, color: "text-purple-500" },
    { name: "Lisa Park", time: "3 hrs ago", type: "incoming", icon: PhoneIncoming, color: "text-emerald-500" },
  ];

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <span className="text-[9px] font-semibold text-gray-800">9:41</span>
        <div className="flex gap-1">
          <div className="h-1.5 w-3 rounded-sm bg-gray-800" />
          <div className="h-1.5 w-1.5 rounded-full bg-gray-800" />
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-gray-100 px-4 pb-3">
        <h3 className="text-sm font-bold text-gray-900">Recent Calls</h3>
        <p className="text-[9px] text-gray-500">Today</p>
      </div>

      {/* Call list */}
      <div className="flex-1 overflow-hidden px-3 py-2">
        {calls.map((call, i) => {
          const Icon = call.icon;
          return (
            <div key={i} className="flex items-center gap-2.5 rounded-xl px-2 py-2 transition-colors hover:bg-gray-50">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <User className="h-3.5 w-3.5 text-gray-500" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold text-gray-800">{call.name}</p>
                <div className="flex items-center gap-1">
                  <Icon className={`h-2.5 w-2.5 ${call.color}`} />
                  <span className="text-[8px] text-gray-400">{call.time}</span>
                </div>
              </div>
              <Phone className="h-3.5 w-3.5 text-emerald-500" />
            </div>
          );
        })}
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-around border-t border-gray-100 px-4 py-2">
        <Clock className="h-4 w-4 text-[#7C3AED]" />
        <Users className="h-4 w-4 text-gray-400" />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#EC4899] to-[#7C3AED]">
          <Phone className="h-3.5 w-3.5 text-white" />
        </div>
        <MessageSquare className="h-4 w-4 text-gray-400" />
        <BarChart3 className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
}

function ContactsScreen() {
  const contacts = [
    { name: "Alice Thompson", dept: "Sales", status: "online" },
    { name: "Bob Martinez", dept: "Support", status: "busy" },
    { name: "Carol White", dept: "Marketing", status: "online" },
    { name: "Dan Brown", dept: "Engineering", status: "offline" },
    { name: "Eva Green", dept: "Sales", status: "online" },
  ];

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <span className="text-[9px] font-semibold text-gray-800">9:41</span>
        <div className="flex gap-1">
          <div className="h-1.5 w-3 rounded-sm bg-gray-800" />
          <div className="h-1.5 w-1.5 rounded-full bg-gray-800" />
        </div>
      </div>

      <div className="border-b border-gray-100 px-4 pb-3">
        <h3 className="text-sm font-bold text-gray-900">Contacts</h3>
        <div className="mt-2 flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-1.5">
          <span className="text-[9px] text-gray-400">Search contacts...</span>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-2">
        {contacts.map((contact, i) => (
          <div key={i} className="flex items-center gap-2.5 rounded-xl px-2 py-2">
            <div className="relative">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-pink-100">
                <span className="text-[9px] font-bold text-purple-600">{contact.name[0]}</span>
              </div>
              <div className={`absolute bottom-0 right-0 h-2 w-2 rounded-full border border-white ${
                contact.status === "online" ? "bg-emerald-400" : contact.status === "busy" ? "bg-amber-400" : "bg-gray-300"
              }`} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold text-gray-800">{contact.name}</p>
              <p className="text-[8px] text-gray-400">{contact.dept}</p>
            </div>
            <Phone className="h-3 w-3 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <span className="text-[9px] font-semibold text-gray-800">9:41</span>
        <div className="flex gap-1">
          <div className="h-1.5 w-3 rounded-sm bg-gray-800" />
          <div className="h-1.5 w-1.5 rounded-full bg-gray-800" />
        </div>
      </div>

      <div className="border-b border-gray-100 px-4 pb-3">
        <h3 className="text-sm font-bold text-gray-900">Dashboard</h3>
        <p className="text-[9px] text-gray-500">Today&apos;s performance</p>
      </div>

      <div className="flex-1 overflow-hidden p-3">
        {/* KPI cards */}
        <div className="mb-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-2.5">
            <p className="text-[8px] text-gray-500">Total Calls</p>
            <p className="text-sm font-bold text-gray-900">248</p>
            <p className="text-[7px] font-medium text-emerald-500">+12%</p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-2.5">
            <p className="text-[8px] text-gray-500">Avg Duration</p>
            <p className="text-sm font-bold text-gray-900">4:32</p>
            <p className="text-[7px] font-medium text-emerald-500">+5%</p>
          </div>
        </div>

        {/* Mini chart */}
        <div className="rounded-xl border border-gray-100 p-2.5">
          <p className="mb-2 text-[8px] font-semibold text-gray-600">Call Volume</p>
          <div className="flex h-12 items-end gap-1">
            {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#7C3AED] to-[#EC4899]" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="mt-3 rounded-xl border border-gray-100 p-2.5">
          <p className="mb-1.5 text-[8px] font-semibold text-gray-600">Agent Status</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[7px] text-gray-500">Online 8</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="text-[7px] text-gray-500">Busy 3</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span className="text-[7px] text-gray-500">Off 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatScreen() {
  const messages = [
    { from: "them", text: "Hi! How can I help?", time: "10:30" },
    { from: "me", text: "Need info on the enterprise plan", time: "10:31" },
    { from: "them", text: "Sure! Our enterprise plan includes unlimited seats, priority support and custom integrations.", time: "10:32" },
    { from: "me", text: "Perfect, can we schedule a demo?", time: "10:33" },
  ];

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <span className="text-[9px] font-semibold text-gray-800">9:41</span>
        <div className="flex gap-1">
          <div className="h-1.5 w-3 rounded-sm bg-gray-800" />
          <div className="h-1.5 w-1.5 rounded-full bg-gray-800" />
        </div>
      </div>

      <div className="flex items-center gap-2 border-b border-gray-100 px-4 pb-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#EC4899] to-[#7C3AED]">
          <MessageSquare className="h-3 w-3 text-white" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-gray-900">Team Chat</p>
          <p className="text-[8px] text-emerald-500">Online</p>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-2">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[75%] rounded-2xl px-2.5 py-1.5 ${
              msg.from === "me"
                ? "bg-gradient-to-r from-[#7C3AED] to-[#6366F1] text-white"
                : "bg-gray-100 text-gray-800"
            }`}>
              <p className="text-[8px] leading-relaxed">{msg.text}</p>
              <p className={`mt-0.5 text-[6px] ${msg.from === "me" ? "text-white/60" : "text-gray-400"}`}>{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 px-3 py-2">
        <div className="flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1.5">
          <span className="text-[8px] text-gray-400">Type a message...</span>
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ children, className, rotation, delay, zIndex }: {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
  delay?: number;
  zIndex?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: rotation || 0 }}
      whileInView={{ opacity: 1, y: 0, rotateY: rotation || 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: delay || 0, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -10,
        rotateY: 0,
        scale: 1.03,
        transition: { duration: 0.4 },
      }}
      className={className}
      style={{
        zIndex: zIndex || 1,
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4 + (delay || 0), repeat: Infinity, ease: "easeInOut" }}
        className="relative h-[420px] w-[200px] overflow-hidden rounded-[32px] border-[6px] border-gray-900 bg-gray-900 shadow-2xl shadow-gray-900/30 sm:h-[480px] sm:w-[230px]"
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-1 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-gray-900" />
        {/* Screen content */}
        <div className="h-full w-full overflow-hidden rounded-[26px]">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center" style={{ perspective: "1200px" }}>
      {/* Back left phone - Contacts */}
      <PhoneFrame
        className="absolute -left-4 top-8 sm:left-0"
        rotation={8}
        delay={0.5}
        zIndex={1}
      >
        <ContactsScreen />
      </PhoneFrame>

      {/* Center phone - Calls (main) */}
      <PhoneFrame
        className="relative z-10"
        rotation={0}
        delay={0.3}
        zIndex={10}
      >
        <CallsScreen />
      </PhoneFrame>

      {/* Back right phone - Analytics */}
      <PhoneFrame
        className="absolute -right-4 top-12 sm:right-0"
        rotation={-8}
        delay={0.6}
        zIndex={2}
      >
        <AnalyticsScreen />
      </PhoneFrame>

      {/* Small floating chat card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        className="absolute -bottom-4 -right-8 z-20 hidden h-[160px] w-[140px] overflow-hidden rounded-2xl border border-white/50 bg-white/90 shadow-xl backdrop-blur-md sm:block"
        style={{ transform: "rotate(3deg)" }}
      >
        <ChatScreen />
      </motion.div>
    </div>
  );
}

export { CallsScreen, ContactsScreen, AnalyticsScreen, ChatScreen };
