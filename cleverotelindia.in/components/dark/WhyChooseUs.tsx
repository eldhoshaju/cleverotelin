"use client";

import { motion } from "framer-motion";
import { Cloud, Brain, MapPin, ShieldCheck, Blocks, HeadphonesIcon } from "lucide-react";
import BenefitCard from "./BenefitCard";
import type { BenefitCardProps } from "./BenefitCard";

const benefits: Omit<BenefitCardProps, "index">[] = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Enterprise-grade cloud servers with 99.999% uptime SLA and global edge network.",
    accent: "purple",
  },
  {
    icon: Brain,
    title: "AI Powered",
    description: "Smart call routing, AI transcription, sentiment analysis and predictive analytics.",
    accent: "blue",
  },
  {
    icon: MapPin,
    title: "Regional Presence",
    description: "Local presence in 50+ countries with regional support and compliance.",
    accent: "pink",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "SOC2, ISO 27001, GDPR compliant with end-to-end encryption.",
    accent: "cyan",
  },
  {
    icon: Blocks,
    title: "100+ Integrations",
    description: "Connect with Salesforce, HubSpot, Zoho, Slack, Teams and more.",
    accent: "amber",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "Dedicated account managers with expert support available around the clock.",
    accent: "green",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="mb-24 md:mb-32">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mb-5 flex justify-center"
      >
        <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300">
          Why Us
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
      >
        Why Businesses Choose Us
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mb-12 max-w-lg text-center text-base text-gray-400"
      >
        Built for scalability, reliability and enterprise-grade communication.
      </motion.p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <BenefitCard key={benefit.title} {...benefit} index={index} />
        ))}
      </div>
    </div>
  );
}
