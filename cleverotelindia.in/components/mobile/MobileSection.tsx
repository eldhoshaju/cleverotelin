"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Bell,
  BarChart3,
  MessageSquare,
  Database,
  Mic,
  Voicemail,
  RefreshCcw,
  ArrowRight,
  Download,
} from "lucide-react";
import FeatureChip from "./FeatureChip";
import PhoneMockup from "./PhoneMockup";

const features = [
  { icon: PhoneCall, label: "HD Voice Calls" },
  { icon: Bell, label: "Live Notifications" },
  { icon: BarChart3, label: "Real-time Analytics" },
  { icon: MessageSquare, label: "Team Chat" },
  { icon: Database, label: "CRM Access" },
  { icon: Mic, label: "Call Recording" },
  { icon: Voicemail, label: "Voicemail" },
  { icon: RefreshCcw, label: "Contact Sync" },
];

export default function MobileSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFF9F7] px-5 py-20 sm:px-6 lg:py-32"
      style={{ borderRadius: "64px 64px 0 0" }}
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-pink-200/20 blur-[100px]" />
        <div className="absolute right-[5%] top-[30%] h-[350px] w-[350px] rounded-full bg-purple-200/15 blur-[80px]" />
        <div className="absolute bottom-[10%] left-[40%] h-[300px] w-[300px] rounded-full bg-blue-200/15 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-16">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex rounded-full border border-pink-200/60 bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7C3AED]"
            >
              Mobile App
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-[56px]"
            >
              Your Office,{" "}
              <span className="bg-gradient-to-r from-[#EC4899] to-[#7C3AED] bg-clip-text text-transparent">
                Now Mobile
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-md text-base leading-relaxed text-gray-600 lg:text-lg"
            >
              Stay connected anywhere with enterprise cloud telephony, CRM
              integration, AI call management and business messaging directly
              from your smartphone.
            </motion.p>

            {/* Feature Chips */}
            <div className="mb-10 flex flex-wrap gap-2.5">
              {features.map((feature, index) => (
                <FeatureChip
                  key={feature.label}
                  icon={feature.icon}
                  label={feature.label}
                  index={index}
                />
              ))}
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              {/* Primary */}
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#EC4899] to-[#7C3AED] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-300/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-300/40"
              >
                <Download className="h-4 w-4" />
                Download App
              </a>
              {/* Secondary */}
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#374151] transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-lg"
              >
                Watch Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center py-8 lg:py-0"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
