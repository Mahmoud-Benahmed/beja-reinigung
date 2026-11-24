/** WHAT: Home page section order. USED IN: App Router. TOOLS: React Server Components. */
import Area from '@/components/sections/Area';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Steps from '@/components/sections/Steps';
import TrustStrip from '@/components/sections/TrustStrip';
import WhyUs from '@/components/sections/WhyUs';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyUs />
        <BeforeAfter />
        <Area />
        <Steps />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
