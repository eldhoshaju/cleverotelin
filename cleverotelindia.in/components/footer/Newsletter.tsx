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
      <p className="mb-3 text-sm font-semibold text-white">Newsletter</p>
      <p className="mb-3 text-xs text-gray-500">
        Get the latest updates on cloud communication and AI.
      </p>
      {subscribed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3 py-2"
        >
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span className="text-xs text-emerald-400">Subscribed!</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2.5 text-xs text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-purple-500/40 focus:bg-white/[0.06]"
          />
          <button
            type="submit"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6366F1] text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            aria-label="Subscribe"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}

      {/* App Store buttons */}
      <div className="mt-5">
        <p className="mb-2 text-sm font-semibold text-white">Download App</p>
        <div className="flex flex-col gap-2">
          <a
            href="#app-store"
            className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06]"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10">
              <span className="text-[10px] font-bold text-white">A</span>
            </div>
            <div>
              <p className="text-[8px] text-gray-500">Download on the</p>
              <p className="text-[11px] font-semibold text-white">App Store</p>
            </div>
          </a>
          <a
            href="#google-play"
            className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06]"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10">
              <span className="text-[10px] font-bold text-white">G</span>
            </div>
            <div>
              <p className="text-[8px] text-gray-500">Get it on</p>
              <p className="text-[11px] font-semibold text-white">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
