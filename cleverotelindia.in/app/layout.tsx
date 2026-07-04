import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CleverOTel India - Transform Your Business Communication",
  description:
    "Enterprise-grade cloud telephony, AI-powered call centers, and seamless CRM integrations. Trusted by 4,000+ businesses across India.",
  keywords: [
    "cloud telephony",
    "call center",
    "CRM integration",
    "business communication",
    "virtual numbers",
    "India",
  ],
  openGraph: {
    title: "CleverOTel India - Transform Your Business Communication",
    description:
      "Enterprise-grade cloud telephony, AI-powered call centers, and seamless CRM integrations.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#111827]">
        {children}
      </body>
    </html>
  );
}
