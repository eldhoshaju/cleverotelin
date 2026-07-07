"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, CalendarCheck } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import ScheduleMeetingModal from "./modal/ScheduleMeetingModal";

export default function Navbar() {
  const scrolled = useScrolled(10);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 h-20 transition-all duration-300",
          scrolled
            ? "bg-white/95 shadow-sm shadow-gray-200/50 backdrop-blur-xl border-b border-[#E5E7EB]"
            : "bg-white/80 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1.5">
            <Image
              src="/CleveroTel%20Logo%20(2).png"
              alt="CleveroTel Logo"
              width={160}
              height={40}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" role="navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-[#0F172A] transition-all duration-200 hover:bg-[#EEF4FF] hover:text-[#1F4E8C]"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 text-[#94A3B8] transition-all duration-200 group-hover:rotate-180 group-hover:text-[#1F4E8C]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right side - Schedule a Meeting button */}
          <div className="hidden lg:flex">
            <button
              onClick={() => setScheduleOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1F4E8C] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#1F4E8C]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#163D70] hover:shadow-lg hover:shadow-[#1F4E8C]/20"
            >
              <CalendarCheck className="h-4 w-4" />
              Schedule a Meeting
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0F172A] transition-colors hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-[#E5E7EB] bg-white/98 backdrop-blur-xl lg:hidden"
            >
              <nav className="flex flex-col gap-1 px-6 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#0F172A] transition-colors hover:bg-[#EEF4FF] hover:text-[#1F4E8C]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="h-4 w-4 text-[#94A3B8]" />
                    )}
                  </a>
                ))}
                <div className="mt-4 border-t border-[#E5E7EB] pt-4">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setScheduleOpen(true);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1F4E8C] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#1F4E8C]/15"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    Schedule a Meeting
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Schedule Meeting Modal */}
      <ScheduleMeetingModal
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
      />
    </>
  );
}
