import { useSeo } from "./hooks/useSeo";
import { useAutoScrollReveal } from "./hooks/useScrollReveal";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { BeforeAfter } from "./sections/BeforeAfter";
import { About } from "./sections/About";
import { PackageCalculator } from "./sections/PackageCalculator";
import { Gallery } from "./sections/Gallery";
import { Differentials } from "./sections/Differentials";
import { Testimonials } from "./sections/Testimonials";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Location } from "./sections/Location";

function App() {
  useSeo();
  useAutoScrollReveal();

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col overflow-x-hidden">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-wine focus:px-5 focus:py-2.5 focus:text-paper shadow-lg"
      >
        Pular para o conteúdo principal
      </a>

      <Header />

      <main className="flex-grow">
        <Hero />
        <Services />
        <BeforeAfter />
        <About />
        <PackageCalculator />
        <Gallery />
        <Differentials />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Location />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
