import { HeroSection } from "../components/HeroSection";
import { DynamicDemo } from "../components/DynamicDemo";
import { VideoDemo } from "../components/VideoDemo";
import { ProductHighlights } from "../components/ProductHighlights";
import { DetailedSystemArchitecture } from "../components/DetailedSystemArchitecture";
import { FeaturesSection } from "../components/FeaturesSection";
import { SystemArchitecture } from "../components/SystemArchitecture";
import { TechAdvantages } from "../components/TechAdvantages";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DynamicDemo />
      <VideoDemo />
      <TechAdvantages />
      <ProductHighlights />
      <DetailedSystemArchitecture />
      <ContactSection />
      <Footer />
    </div>
  );
}
