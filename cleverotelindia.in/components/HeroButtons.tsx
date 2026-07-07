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
          className="group inline-flex items-center gap-2 rounded-xl bg-[#1F4E8C] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1F4E8C]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#163D70] hover:shadow-xl hover:shadow-[#1F4E8C]/20"
        >
          Get Started Free
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Secondary CTA */}
        <a
          href="#pricing"
          className="group inline-flex items-center gap-2 rounded-xl border-2 border-[#1F4E8C] bg-white px-8 py-4 text-base font-semibold text-[#1F4E8C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1F4E8C] hover:text-white hover:shadow-lg"
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
