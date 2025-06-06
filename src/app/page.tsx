import { HeroSection } from "../components/HeroSection";
import { DynamicDemo } from "../components/DynamicDemo";
import { ProductHighlights } from "../components/ProductHighlights";
import { DetailedSystemArchitecture } from "../components/DetailedSystemArchitecture";
import { TechAdvantages } from "../components/TechAdvantages";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DynamicDemo />
      {/* <VideoDemo /> 影片已 blend 進 HeroSection */}
      <TechAdvantages />
      <ProductHighlights />
      <DetailedSystemArchitecture />
      <ContactSection />
      <Footer />
    </div>
  );
}
