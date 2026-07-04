"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="relative">
      {/* Split background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-white" />
        <div className="h-1/2 bg-[#050505]" />
      </div>

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-100/20 blur-[100px]" />
        <div className="absolute bottom-[30%] right-[10%] h-[300px] w-[300px] rounded-full bg-blue-100/15 blur-[80px]" />
      </div>

      {/* Floating glass card */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="overflow-hidden rounded-[40px] border border-white/60 bg-white/95 p-8 shadow-2xl shadow-gray-900/10 backdrop-blur-xl sm:p-12 lg:p-16"
        >
          <div className="grid items-start gap-10 lg:grid-cols-[45%_55%] lg:gap-16">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-5 inline-flex rounded-full border border-purple-200/60 bg-gradient-to-r from-purple-50 to-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7C3AED]"
              >
                Contact Us
              </motion.span>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-[64px]"
              >
                Let&apos;s{" "}
                <span className="bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">
                  Connect
                </span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="max-w-md text-base leading-relaxed text-gray-600"
              >
                Have questions about Cloud PBX, AI Voice Agents, Virtual Numbers,
                CRM Integration, Pricing, or Enterprise Solutions? Our communication
                experts are here to help you.
              </motion.p>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-8 flex flex-col gap-3"
              >
                {[
                  "Response within 2 hours",
                  "Free consultation call",
                  "No commitment required",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-sm text-gray-500">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
