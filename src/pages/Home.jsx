import Hero from "../components/Hero";
import WelcomeIntro from "../components/WelcomeIntro";

import TestimonialBrandsSection from "../components/TestimonialBrandsSection";
import WorkProcessSection from "../components/WorkProcessSection";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import WorkEthicScrollSection from "../components/WorkEthicScrollSection";
export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeIntro />

      <WorkEthicScrollSection />
      <TestimonialBrandsSection />
      <WorkProcessSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
