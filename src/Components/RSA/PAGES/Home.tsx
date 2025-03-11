import React from "react";
import ContentSection from "../contentsection";
import HeroRSASection from "../HeroRsa";
import CardSection from "../Cards";
import CTA1Section from "../Cta";
import AccordionSection from "../accordion";
import DNASection from "../accordion2";
import StatisticsSection from "../Stats";
import StatsSection2 from "../Stats2";
import ContactSectionRSA from "../Contact";
import FAQSection from "../FAQ";
import FooterRSA from "../Foot";
import ScrollingText from "../Scrolltxt";
import Marquee from "../Scrolltxt";
import MarqueeSection from "../Scrolltxt";
import ResearchServices from "../About us/AboutusCards";
import FooterSection from "../About us/FootSec";
import Mission from "../About us/Mission";

const Home2: React.FC = () => {
  return (
    <>
        <div style={{height: '88px'}}></div>
  
      <div>
        <HeroRSASection></HeroRSASection>
      </div>
      <div>
        <CardSection></CardSection>
        <CTA1Section></CTA1Section>
      </div>
      <div>
        <AccordionSection></AccordionSection>
      </div>
      <div>
        <DNASection></DNASection>
      </div>
     
      <div>
        <StatsSection2></StatsSection2>
      </div>
      <MarqueeSection></MarqueeSection>
      <div>
      <ResearchServices></ResearchServices>
      </div>
      <div>
        <FAQSection></FAQSection>
      </div>
      <div>
      <FooterSection></FooterSection>
      </div>
      <div>
        <ContactSectionRSA></ContactSectionRSA>
      </div>
      <div>
        <FooterRSA></FooterRSA>
      </div>
    </>
  );
};

export default Home2;
