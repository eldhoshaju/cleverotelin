"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FOOTER_COLUMNS, BOTTOM_LINKS } from "@/constants/footer";
import FooterTopBar from "./FooterTopBar";
import SocialLinks from "./SocialLinks";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F8FAFC] px-5 pt-16 sm:px-6 lg:pt-20">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[30%] top-0 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-[120px]" />
        <div className="absolute bottom-0 right-[20%] h-[400px] w-[400px] rounded-full bg-purple-100/20 blur-[100px]" />
      </div>

      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Top contact bar */}
        <FooterTopBar />

        {/* Divider */}
        <div className="mb-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Main footer grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-12">
          {/* Column 1 - Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            {/* Logo */}
            <a href="/" className="mb-4 inline-block">
              <Image
                src="/CleveroTel%20Logo%20(2).png"
                alt="CleveroTel Logo"
                width={140}
                height={35}
                className="h-7 w-auto"
              />
            </a>
            <p className="mb-5 max-w-xs text-xs leading-relaxed text-[#64748B]">
              Enterprise-grade cloud communication platform. AI-powered call
              centers, virtual numbers, CRM integration, and omnichannel
              engagement for modern businesses.
            </p>
            <SocialLinks />
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-semibold text-[#0F172A]">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[#64748B] transition-colors duration-200 hover:text-[#0F172A]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter + App */}
          <Newsletter />
        </div>

        {/* Bottom divider */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 lg:flex-row">
          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
            <span>&copy; {new Date().getFullYear()} CleveroTel India.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
            <span className="hidden items-center gap-1 sm:inline-flex">
              Made with <Heart className="h-3 w-3 fill-red-500 text-red-500" /> in India
            </span>
          </div>

          {/* Bottom links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {BOTTOM_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] text-[#64748B] transition-colors duration-200 hover:text-[#0F172A]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
