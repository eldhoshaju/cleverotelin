"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center gap-5 py-12 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50"
      >
        <CheckCircle2 className="h-10 w-10 text-emerald-500" />
      </motion.div>

      <div>
        <h3 className="mb-2 text-xl font-bold text-[#111827]">
          Thank You!
        </h3>
        <p className="mx-auto max-w-sm text-sm leading-relaxed text-gray-500">
          Your free trial request has been received. Our team will contact you
          shortly to activate your 7-day trial.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        <span className="text-xs font-medium text-emerald-600">
          Response within 2 hours
        </span>
      </div>
    </motion.div>
  );
}
