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
            className="group flex items-center gap-2.5 rounded-2xl border border-gray-200 bg-white px-4 py-2.5 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED]/10 to-[#6366F1]/10 transition-transform duration-300 group-hover:scale-110">
              {Icon && <Icon className="h-3.5 w-3.5 text-[#6366F1]" />}
            </div>
            <div>
              <p className="text-[10px] text-[#94A3B8]">{item.label}</p>
              <p className="text-xs font-medium text-[#334155]">{item.value}</p>
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
}
