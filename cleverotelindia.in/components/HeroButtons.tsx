"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FreeTrialModal from "./modal/FreeTrialModal";

export default function HeroButtons() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col items-center gap-4 sm:flex-row"
      >
        {/* Primary CTA */}
        <button
          onClick={() => setModalOpen(true)}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#5B5CF6] to-[#D946EF] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#5B5CF6]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5B5CF6]/30"
        >
          <span className="relative z-10 flex items-center gap-2">
            Get Started Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
          {/* Hover glow overlay */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#4A4BE5] to-[#C835DE] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </button>

        {/* Secondary CTA */}
        <a
          href="#pricing"
          className="group flex items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-[#374151] transition-all duration-300 hover:-translate-y-1 hover:border-[#5B5CF6]/30 hover:bg-[#5B5CF6]/5 hover:text-[#5B5CF6] hover:shadow-lg"
        >
          View Pricing
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>

      {/* Free Trial Modal */}
      <FreeTrialModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
