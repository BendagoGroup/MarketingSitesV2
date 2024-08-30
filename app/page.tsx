import { Hero } from "@/components/ui/hero";
import { IconSection } from "@/components/ui/iconsection";
import { Pricing } from "@/components/ui/pricing";
import { FAQ } from "@/components/ui/faq";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <IconSection />
      <Pricing />
      <FAQ />
    </section>
  );
}
