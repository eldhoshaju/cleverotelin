"use client";

import { motion } from "framer-motion";
import {
  Mic,
  FileText,
  MessageSquare,
  Search,
  Cloud,
  Download,
  RefreshCcw,
  ShieldCheck,
  Headphones,
  AudioWaveform,
  BarChart3,
  Star,
  Clock,
  Brain,
  ArrowRight,
  Play,
} from "lucide-react";
import RecordingFeatureChip from "./RecordingFeatureChip";
import FloatingUICard from "./FloatingUICard";

const features = [
  { icon: Mic, label: "AI Call Recording" },
  { icon: FileText, label: "Speech-to-Text" },
  { icon: MessageSquare, label: "Call Summaries" },
  { icon: Search, label: "Keyword Search" },
  { icon: Cloud, label: "Secure Cloud Storage" },
  { icon: Download, label: "One-click Download" },
  { icon: RefreshCcw, label: "CRM Sync" },
  { icon: ShieldCheck, label: "Compliance Recording" },
];

const floatingCards = [
  { icon: Mic, title: "Call Recording", value: "HD Quality", accent: "#7C3AED", x: "55%", y: "5%", delay: 0.4, rotation: -2 },
  { icon: FileText, title: "Live Transcript", value: "Real-time", accent: "#3B82F6", x: "75%", y: "20%", delay: 0.6, rotation: 3 },
  { icon: Star, title: "Sentiment Score", value: "92% Positive", accent: "#10B981", x: "80%", y: "45%", delay: 0.7, rotation: -1 },
  { icon: Clock, title: "Call Duration", value: "04:32", accent: "#F59E0B", x: "70%", y: "68%", delay: 0.8, rotation: 2 },
  { icon: BarChart3, title: "Analytics", value: "+18% this week", accent: "#EC4899", x: "50%", y: "80%", delay: 0.9, rotation: -3 },
  { icon: Brain, title: "AI Summary", value: "Auto-generated", accent: "#6366F1", x: "45%", y: "35%", delay: 0.5, rotation: 1 },
];

export default function AIRecordingSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F7FF] px-5 py-20 sm:px-6 lg:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[10%] h-[500px] w-[500px] rounded-full bg-purple-200/25 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-200/20 blur-[80px]" />
        <div className="absolute left-[50%] top-[50%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/15 blur-[70px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-8">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex rounded-full border border-indigo-200/60 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#6366F1]"
            >
              AI Call Recording
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-5xl"
            >
              Record, Track &{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">
                Analyze Every Business Call
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-lg text-base leading-relaxed text-gray-600 lg:text-lg"
            >
              Automatically record, transcribe, summarize and organize every
              business conversation using enterprise-grade AI. Searchable
              transcripts, smart tags, speaker identification, and instant
              download capabilities.
            </motion.p>

            {/* Feature Chips */}
            <div className="mb-10 flex flex-wrap gap-2.5">
              {features.map((feature, index) => (
                <RecordingFeatureChip
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
              <a
                href="#trial"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-300/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-300/40"
              >
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#374151] transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg"
              >
                <Play className="h-4 w-4 text-[#6366F1]" />
                Watch Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center py-8 lg:py-0"
          >
            {/* Central professional illustration */}
            <div className="relative h-[420px] w-full max-w-[500px] sm:h-[480px]">
              {/* Central element - Person with headset representation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {/* Purple gradient frame */}
                <div className="relative flex h-48 w-48 items-center justify-center rounded-3xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-2xl shadow-purple-200/30 sm:h-56 sm:w-56">
                  {/* Headset icon as person representation */}
                  <div className="flex flex-col items-center gap-2">
                    <Headphones className="h-16 w-16 text-[#6366F1]/70 sm:h-20 sm:w-20" />
                    <span className="text-xs font-semibold text-[#6366F1]/80">Recording Active</span>
                  </div>

                  {/* Waveform below */}
                  <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-0.5">
                    {[20, 35, 50, 70, 45, 60, 30, 55, 40, 65, 25, 50, 35].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-1 rounded-full bg-gradient-to-t from-[#7C3AED] to-[#3B82F6]"
                        animate={{ height: [h * 0.3, h * 0.7, h * 0.3] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.08,
                        }}
                        style={{ height: `${h * 0.5}px` }}
                      />
                    ))}
                  </div>

                  {/* Pulsing rings */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border border-purple-300/30"
                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.1, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>

              {/* Audio waveform card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                animate={{ y: [0, -4, 0] }}
                className="absolute bottom-[10%] left-[5%] z-20 flex items-center gap-2 rounded-xl border border-white/60 bg-white/85 px-3 py-2 shadow-lg backdrop-blur-md"
              >
                <AudioWaveform className="h-4 w-4 text-[#7C3AED]" />
                <div className="flex items-center gap-0.5">
                  {[4, 8, 12, 6, 14, 9, 5, 11, 7, 13, 4, 10].map((h, i) => (
                    <div
                      key={i}
                      className="w-0.5 rounded-full bg-gradient-to-t from-[#7C3AED] to-[#3B82F6]"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
                <span className="text-[9px] font-medium text-gray-500">04:32</span>
              </motion.div>

              {/* Floating UI Cards */}
              {floatingCards.map((card) => (
                <FloatingUICard key={card.title} {...card} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
