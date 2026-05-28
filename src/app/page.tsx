import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Applications from "@/components/Applications";
import Certifications from "@/components/Certifications";
import Process from "@/components/Process";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RevealProvider from "@/components/RevealProvider";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import SpotlightTracker from "@/components/SpotlightTracker";

export default function Home() {
  return (
    <>
      <Loader />
      <RevealProvider />
      <SpotlightTracker />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Applications />
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
