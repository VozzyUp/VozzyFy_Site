import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TaxesSection from "@/components/TaxesSection";
import PWASection from "@/components/PWASection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import MembersAreaSection from "@/components/MembersAreaSection";
import SourceCodeSection from "@/components/SourceCodeSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TaxesSection />
        <PWASection />
        <FeaturesSection />
        <IntegrationsSection />
        <MembersAreaSection />
        <SourceCodeSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
