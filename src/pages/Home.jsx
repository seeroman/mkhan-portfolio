import Hero from "../components/Hero";
import WelcomeIntro from "../components/WelcomeIntro";
import WorkEthicSection from "../components/WorkEthicSection";
import TestimonialBrandsSection from "../components/TestimonialBrandsSection";
import WorkProcessSection from "../components/WorkProcessSection";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeIntro />
      <WorkEthicSection />
      <TestimonialBrandsSection />
      <WorkProcessSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
