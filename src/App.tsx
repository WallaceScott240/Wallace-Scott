import React from "react";
import About from "./About";
import CTASection from "./Components/colaberation";
import HeroSection from "./Components/heroSection";
import AccordionSection from "./Components/RSA/accordion";
import ServicesSection from "./Components/services";
import FloatingBotButton from "./FAB"; // ✅ This is correct
import RecentSongsSection from "./songscard";
import InformativeFooter from "./footer";
import FooterSection from "./Components/RSA/About us/FootSec";
import FooterRSA from "./Components/RSA/Foot";

const App: React.FC = () => {
  return (
    <>
      <HeroSection />
      <div></div>
      <About />
      <AccordionSection />
      <div></div>
      <CTASection />
      <ServicesSection />
      <div></div>
      <RecentSongsSection />
      <div></div>
      <FloatingBotButton />
      <div></div>
      <FooterRSA></FooterRSA>
    </>
  );
};

export default App;
