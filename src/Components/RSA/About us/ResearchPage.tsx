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
import ResearchAndPub from "./Reasearch";

const Research: React.FC = () => {
  return (
    <>
        <div style={{height: '88px'}}></div>
        <div>
            <ResearchAndPub></ResearchAndPub>
        </div>
        <div>
          <FooterRSA></FooterRSA>
        </div>
    </>
  );
};

export default Research;
