import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import WhyChooseUs from "@/sections/WhyChooseUs";
import MenuPreview from "@/sections/MenuPreview";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <MenuPreview />
      <Testimonials />
      <CTA />
    </main>
  );
}