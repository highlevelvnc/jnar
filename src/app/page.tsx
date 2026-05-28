import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Process from "@/components/Process";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RevealProvider from "@/components/RevealProvider";

export default function Home() {
  return (
    <>
      <RevealProvider />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Certifications />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
