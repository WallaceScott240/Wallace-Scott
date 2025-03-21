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
import HeroSectionRSAabout from "./heroRsaAbout";
import ExpertGuide from "./ExpertGuide";
import Origin from "./Origin";
import CTA2Section from "./Cta2";
import Inception from "./Inception";
import Mission from "./Mission";
import { height } from "@mui/system";
import AboutCardSection from "./AboutusCards";
import InsightCards from "./AboutusCards";
import TestimonialCards from "./AboutusCards";
import InsightsCards from "./AboutusCards";
import InsightsSection from "./AboutusCards";
import ResearchServices from "./AboutusCards";
import Innovation from "./ShapingInnovation";
import CollaborationSection from "./Collaberation";

const ContentSectionRsaLabs: React.FC = () => {
  return (
    <>
      <div>
        <HeroSectionRSAabout></HeroSectionRSAabout>
      </div>
      <div style={{ height: "50px" }}></div>

      <div>
        <Origin></Origin>
      </div>
      <div>
        <Inception></Inception>
      </div>

      <div style={{ height: "50px" }}></div>

      <div>
        <Mission></Mission>
      </div>

      <div>
        <ContentSection></ContentSection>
      </div>
      <div>
        <ResearchServices></ResearchServices>
      </div>
      <div>
        <ExpertGuide></ExpertGuide>
      </div>
      <div>
        <CollaborationSection></CollaborationSection>
      </div>
      <div>
        <Innovation></Innovation>
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

export default ContentSectionRsaLabs;
