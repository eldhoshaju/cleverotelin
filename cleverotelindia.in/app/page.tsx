import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionSection from "@/components/SolutionSection";
import DarkSection from "@/components/dark/DarkSection";
import MobileSection from "@/components/mobile/MobileSection";
import AnalyticsSection from "@/components/analytics/AnalyticsSection";
import AIRecordingSection from "@/components/recording/AIRecordingSection";
import CommunicationPlatform from "@/components/platform/CommunicationPlatform";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SolutionSection />
        <DarkSection />
        <MobileSection />
        <AnalyticsSection />
        <AIRecordingSection />
        <CommunicationPlatform />
      </main>
    </>
  );
}
