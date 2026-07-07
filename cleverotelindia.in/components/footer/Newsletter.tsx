"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-[#0F172A]">Newsletter</p>
      <p className="mb-3 text-xs text-[#64748B]">
        Get the latest updates on cloud communication and AI.
      </p>
      {subscribed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2"
        >
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          <span className="text-xs text-emerald-600">Subscribed!</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-xs text-[#0F172A] outline-none placeholder:text-[#94A3B8] transition-all duration-300 focus:border-[#6366F1] focus:shadow-sm"
          />
          <button
            type="submit"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6366F1] text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/50"
            aria-label="Subscribe"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}

      {/* App Store buttons */}
      <div className="mt-5">
        <p className="mb-2 text-sm font-semibold text-[#0F172A]">Download App</p>
        <div className="flex flex-col gap-2">
          <a
            href="#app-store"
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-900">
              <span className="text-[10px] font-bold text-white">A</span>
            </div>
            <div>
              <p className="text-[8px] text-[#94A3B8]">Download on the</p>
              <p className="text-[11px] font-semibold text-[#0F172A]">App Store</p>
            </div>
          </a>
          <a
            href="#google-play"
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-900">
              <span className="text-[10px] font-bold text-white">G</span>
            </div>
            <div>
              <p className="text-[8px] text-[#94A3B8]">Get it on</p>
              <p className="text-[11px] font-semibold text-[#0F172A]">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
