"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { CONTACT_ITEMS } from "@/constants/footer";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone,
  Mail,
  Globe,
  MessageCircle,
};

export default function FooterTopBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
    >
      {CONTACT_ITEMS.map((item, i) => {
        const Icon = iconMap[item.icon];
        return (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="group flex items-center gap-2.5 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED]/20 to-[#6366F1]/20 transition-transform duration-300 group-hover:scale-110">
              {Icon && <Icon className="h-3.5 w-3.5 text-purple-400" />}
            </div>
            <div>
              <p className="text-[10px] text-gray-500">{item.label}</p>
              <p className="text-xs font-medium text-gray-300">{item.value}</p>
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
}
