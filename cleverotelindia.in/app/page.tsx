import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionSection from "@/components/SolutionSection";
import DarkSection from "@/components/dark/DarkSection";
import OmnichannelPlatform from "@/components/dark/OmnichannelPlatform";
import MobileSection from "@/components/mobile/MobileSection";
import AnalyticsSection from "@/components/analytics/AnalyticsSection";
import AIRecordingSection from "@/components/recording/AIRecordingSection";
import CommunicationPlatform from "@/components/platform/CommunicationPlatform";
import IndustrySection from "@/components/industries/IndustrySection";
import GrowthSection from "@/components/growth/GrowthSection";
import CallFlowBuilder from "@/components/callflow/CallFlowBuilder";
import IntegrationSection from "@/components/integrations/IntegrationSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SolutionSection />
        <DarkSection />
        <OmnichannelPlatform />
        <MobileSection />
        <AnalyticsSection />
        <AIRecordingSection />
        <CommunicationPlatform />
        <IndustrySection />
        <GrowthSection />
        <CallFlowBuilder />
        <IntegrationSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
