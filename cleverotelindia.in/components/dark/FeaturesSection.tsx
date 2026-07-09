"use client";

import { motion } from "framer-motion";
import { Headphones, BellRing, Workflow } from "lucide-react";
import FeatureCard from "./FeatureCard";
import type { FeatureCardProps } from "./FeatureCard";

const features: Omit<FeatureCardProps, "index">[] = [
  {
    icon: Headphones,
    title: "Contact Center Solution",
    description:
      "Deliver seamless inbound and outbound customer interactions with intelligent routing, omnichannel support, analytics, and real-time reporting.",
    cta: "Explore Contact Center →",
    accent: "cyan",
  },
  {
    icon: BellRing,
    title: "Virtual Reception",
    description:
      "Provide a professional first impression with AI-powered call answering, smart call routing, IVR menus, voicemail, and business-hour automation.",
    cta: "Explore Virtual Reception →",
    accent: "amber",
  },
  {
    icon: Workflow,
    title: "CRM Integrations",
    description:
      "Connect Salesforce, HubSpot, Zoho CRM and hundreds of third-party platforms.",
    cta: "Explore Integrations →",
    accent: "blue",
  },
];

export default function FeaturesSection() {
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
        <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-300">
          Features
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
      >
        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Streamline Your Operations
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mb-14 max-w-xl text-center text-base text-gray-400 md:text-lg"
      >
        Powerful cloud communication tools designed for modern businesses.
      </motion.p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}
