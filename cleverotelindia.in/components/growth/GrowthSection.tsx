"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Bot,
  Database,
  BarChart3,
  MessageCircle,
  Globe,
  ShieldCheck,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import StatisticCard from "./StatisticCard";

const features = [
  { icon: Cloud, label: "Cloud PBX" },
  { icon: Bot, label: "AI Voice Agents" },
  { icon: Database, label: "CRM Integration" },
  { icon: BarChart3, label: "Call Analytics" },
  { icon: MessageCircle, label: "WhatsApp Business" },
  { icon: Globe, label: "International Calling" },
  { icon: ShieldCheck, label: "Enterprise Security" },
  { icon: Headphones, label: "24×7 Support" },
];

const stats = [
  { value: "5000+", label: "Customers", position: "left-[5%] top-[15%]", delay: 0.5 },
  { value: "99.999%", label: "Uptime", position: "right-[5%] top-[10%]", delay: 0.6 },
  { value: "100+", label: "Integrations", position: "left-[0%] bottom-[20%]", delay: 0.7 },
  { value: "24×7", label: "Support", position: "right-[8%] bottom-[15%]", delay: 0.8 },
];

export default function GrowthSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#FAF9FF] px-5 py-20 sm:px-6 lg:py-32"
      style={{ borderRadius: "80px 80px 0 0" }}
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[30%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-100/30 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[20%] h-[350px] w-[350px] rounded-full bg-pink-100/20 blur-[80px]" />
        <motion.div
          className="absolute left-[60%] top-[40%] h-24 w-24 rounded-full bg-blue-100/30 blur-[40px]"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex rounded-full border border-purple-200/60 bg-purple-50/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7C3AED]"
            >
              Trusted Worldwide
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-5xl"
            >
              Powering{" "}
              <span className="bg-gradient-to-r from-[#EC4899] to-[#7C3AED] bg-clip-text text-transparent">
                Growth
              </span>
              <br />
              Across Industries
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-lg text-base leading-relaxed text-gray-600"
            >
              From startups to enterprise organizations, CleveroTel powers
              communication across multiple industries with reliable cloud
              telephony, AI automation, CRM integration, and omnichannel
              engagement.
            </motion.p>

            {/* Feature list */}
            <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.05,
                    }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50">
                      <Icon className="h-3.5 w-3.5 text-[#6366F1]" />
                    </div>
                    <span className="text-sm font-medium text-[#374151]">
                      {feature.label}
                    </span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  </motion.div>
                );
              })}
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
                href="#industries"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#6366F1] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-300/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-300/40"
              >
                Explore Industries
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#case-studies"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#374151] transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-lg"
              >
                View Case Studies
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right - Large Animated Number */}
          <div className="relative flex items-center justify-center py-8">
            {/* Floating stat cards */}
            {stats.map((stat) => (
              <StatisticCard key={stat.label} {...stat} />
            ))}

            {/* Animated counter */}
            <AnimatedCounter target={20} suffix="+" duration={2.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
