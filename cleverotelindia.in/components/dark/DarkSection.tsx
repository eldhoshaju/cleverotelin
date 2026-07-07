"use client";

import AnimatedBackground from "./AnimatedBackground";
import FeaturesSection from "./FeaturesSection";
import WhyChooseUs from "./WhyChooseUs";

export default function DarkSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#050505] py-20 px-5 sm:px-6 md:py-24 lg:py-32"
      style={{ borderRadius: "80px 80px 0 0" }}
    >
      {/* Animated background effects */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <FeaturesSection />
        <WhyChooseUs />
      </div>
    </section>
  );
}
