"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  CalendarCheck,
  Cloud,
  Headphones,
  BellRing,
  Phone,
  Globe,
  Network,
  MessageCircle,
  Bot,
  BookOpen,
  HelpCircle,
  Building2,
  Mail,
} from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { NAVIGATION } from "@/constants/navigation";
import type { NavDropdownItem } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import ScheduleMeetingModal from "./modal/ScheduleMeetingModal";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Cloud,
  Headphones,
  BellRing,
  Phone,
  Globe,
  Network,
  MessageCircle,
  Bot,
  BookOpen,
  HelpCircle,
  Building2,
  Mail,
};

export default function Navbar() {
  const scrolled = useScrolled(10);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDropdown(null);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleMouseEnter = useCallback((label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  return (
    <>
      <motion.header
        ref={navRef}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/[0.06] bg-[#0B1220]/95 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "border-b border-white/[0.04] bg-[#0B1220]/80 backdrop-blur-md"
        )}
      >
        {/* Main nav bar */}
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
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
          <nav className="hidden items-center gap-0.5 lg:flex" role="navigation">
            {NAVIGATION.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                      setActiveDropdown(activeDropdown === item.label ? null : item.label);
                    }
                  }}
                  className={cn(
                    "group flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                    activeDropdown === item.label
                      ? "bg-gradient-to-r from-[#5B5CF6] to-[#D946EF] bg-clip-text text-transparent"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-all duration-200",
                        activeDropdown === item.label
                          ? "rotate-180 bg-gradient-to-r from-[#5B5CF6] to-[#D946EF] bg-clip-text text-transparent"
                          : "text-gray-500 group-hover:text-gray-300"
                      )}
                    />
                  )}
                </a>
                {activeDropdown === item.label && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-[#5B5CF6] to-[#D946EF]"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex">
            <button
              onClick={() => setScheduleOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B5CF6] to-[#D946EF] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#5B5CF6]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#5B5CF6]/30"
            >
              <CalendarCheck className="h-4 w-4" />
              Schedule a Meeting
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 hidden lg:block"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mx-auto max-w-7xl px-6 pb-4">
                <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827]/95 shadow-2xl shadow-black/30 backdrop-blur-xl">
                  <DropdownContent
                    items={
                      NAVIGATION.find((n) => n.label === activeDropdown)
                        ?.dropdown || []
                    }
                    title={activeDropdown}
                    onItemClick={() => setActiveDropdown(null)}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="max-h-[80vh] overflow-y-auto border-t border-white/[0.06] bg-[#0B1220] backdrop-blur-xl lg:hidden"
            >
              <nav className="flex flex-col px-6 py-4">
                {NAVIGATION.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileExpanded(
                              mobileExpanded === item.label ? null : item.label
                            )
                          }
                          className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-gray-500 transition-transform duration-200",
                              mobileExpanded === item.label && "rotate-180 text-white"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-1 pb-2 pl-4">
                                {item.dropdown.map((sub) => {
                                  const Icon = iconMap[sub.icon];
                                  return (
                                    <a
                                      key={sub.title}
                                      href={sub.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex items-center gap-3 rounded-lg px-4 py-2.5 transition-colors hover:bg-white/5"
                                    >
                                      <div
                                        className="flex h-8 w-8 items-center justify-center rounded-lg"
                                        style={{ backgroundColor: `${sub.iconColor}15` }}
                                      >
                                        {Icon && (
                                          <Icon
                                            className="h-4 w-4"
                                            style={{ color: sub.iconColor }}
                                          />
                                        )}
                                      </div>
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                          <span className="text-sm font-medium text-gray-200">
                                            {sub.title}
                                          </span>
                                          {sub.badge && (
                                            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold text-white/80">
                                              {sub.badge}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    </a>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
                <div className="mt-4 border-t border-white/[0.06] pt-4">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setScheduleOpen(true);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5B5CF6] to-[#D946EF] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#5B5CF6]/20"
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

      <ScheduleMeetingModal
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
      />
    </>
  );
}

/* Mega-menu dropdown content panel */
function DropdownContent({
  items,
  title,
  onItemClick,
}: {
  items: NavDropdownItem[];
  title: string;
  onItemClick: () => void;
}) {
  const gridCols = items.length > 2 ? "sm:grid-cols-2" : "sm:grid-cols-2";

  return (
    <div className="p-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
        {title}
      </p>

      <div className={cn("grid grid-cols-1 gap-2", gridCols)}>
        {items.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <a
              key={item.title}
              href={item.href}
              onClick={onItemClick}
              className="group flex items-start gap-3.5 rounded-xl p-3 transition-all duration-200 hover:bg-white/[0.05]"
            >
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                style={{ backgroundColor: `${item.iconColor}15` }}
              >
                {Icon && (
                  <Icon
                    className="h-5 w-5"
                    style={{ color: item.iconColor }}
                  />
                )}
              </div>

              <div className="flex-1 pt-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-100 transition-colors group-hover:text-white">
                    {item.title}
                  </span>
                  {item.badge && (
                    <span className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[9px] font-semibold text-white/80">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
