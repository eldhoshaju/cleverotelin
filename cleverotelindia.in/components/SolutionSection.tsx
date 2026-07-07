"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Headphones,
  MessageCircle,
  Globe,
  Bot,
  Shield,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import SolutionCard from "./SolutionCard";
import type { SolutionCardProps } from "./SolutionCard";

const solutions: Omit<SolutionCardProps, "index">[] = [
  {
    icon: PhoneCall,
    title: "Cloud Business Phone",
    description:
      "Enterprise-grade cloud telephony with IVR, extensions, voicemail, call forwarding, recording, analytics, and remote workforce support.",
    cta: "Explore Cloud PBX",
    accent: "blue",
  },
  {
    icon: Headphones,
    title: "AI Cloud Call Center",
    description:
      "Inbound, outbound, predictive dialing, agent monitoring, queue management, AI-powered routing, and real-time analytics.",
    cta: "Explore Call Center",
    accent: "blue",
  },
  {
    icon: MessageCircle,
    title: "Omnichannel Chat",
    description:
      "Manage WhatsApp, Live Chat, SMS, Facebook Messenger, and Instagram conversations from a unified inbox with AI chatbot integration.",
    cta: "Explore Messaging",
    accent: "green",
  },
  {
    icon: Globe,
    title: "Virtual Numbers",
    description:
      "Purchase local and international virtual numbers across multiple countries with instant activation and global coverage.",
    cta: "Explore Numbers",
    accent: "cyan",
  },
  {
    icon: Bot,
    title: "AI Voice Agent",
    description:
      "Automate customer conversations using AI voice assistants, speech recognition, intelligent routing, and natural language processing.",
    cta: "Explore AI",
    accent: "purple",
  },
  {
    icon: Shield,
    title: "Enterprise Integrations",
    description:
      "Connect seamlessly with Salesforce, HubSpot, Zoho CRM, Microsoft Teams, Slack, Google Workspace, and REST APIs.",
    cta: "Explore Integrations",
    accent: "blue",
  },
];

export default function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 px-5 sm:py-20 sm:px-6 lg:py-28 lg:px-6">
      {/* Background effects - subtle blue tones */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#EEF4FF]/60 blur-[80px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-blue-50/40 blur-[60px]" />
        {/* Subtle dot grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="solution-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#6B7280" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#solution-dots)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeader
          badge="Solutions"
          heading="Complete Communication Suite"
          gradientWord="Communication"
          subtitle="From startups to enterprise organizations, discover powerful cloud communication products that help your teams connect, collaborate, and grow."
        />

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} {...solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
