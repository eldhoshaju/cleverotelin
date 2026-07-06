"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Globe, ChevronDown, Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const scrolled = useScrolled(10);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 h-20 transition-all duration-300",
        scrolled
          ? "bg-[#0B1120]/95 shadow-lg shadow-black/10 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-[#0B1120]/80 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5">
          <Image
            src="/cleverotel_logo_new.svg"
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
              className="group flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="h-3.5 w-3.5 text-white/50 transition-all duration-200 group-hover:rotate-180 group-hover:text-white/80" />
              )}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
            aria-label="Select language"
          >
            <Globe className="h-4.5 w-4.5" />
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
            aria-label="Call us"
          >
            <Phone className="h-4.5 w-4.5" />
          </button>
          <a
            href="#signin"
            className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#5B5CF6] to-[#D946EF] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#5B5CF6]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#5B5CF6]/40"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/[0.08] lg:hidden"
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
            className="overflow-hidden border-t border-white/[0.06] bg-[#0B1120]/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="h-4 w-4 text-white/40" />
                  )}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-white/[0.06] pt-4">
                <a
                  href="#signin"
                  className="rounded-lg px-4 py-3 text-center text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  Sign In
                </a>
                <a
                  href="#signup"
                  className="rounded-xl bg-gradient-to-r from-[#5B5CF6] to-[#D946EF] px-5 py-3 text-center text-sm font-semibold text-white shadow-md shadow-[#5B5CF6]/25"
                >
                  Sign Up
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
