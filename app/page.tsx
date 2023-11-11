import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { WhatIKnow } from "@/components/WhatIKnow";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <WhatIKnow />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
