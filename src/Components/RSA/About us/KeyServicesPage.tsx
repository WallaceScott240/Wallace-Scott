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
import Careers from "./Careers";
import CareerHero from "./Careers";
import CareerSection from "./CareersSection";
import Workingwithus from "./WorkingWithUs";
import KeyServices from "./KeyServices";
import IndustryFocus from "./IndustryFocus";

const KeyServicesPage: React.FC = () => {
  return (
    <>
      <div style={{ height: "88px" }}></div>
 

      <div>
        <KeyServices></KeyServices>
      </div>
      <div>
        <ContentSection></ContentSection>
      </div>
      <div>
        <IndustryFocus></IndustryFocus>
      </div>
      <div>
        <Innovation></Innovation>
      </div>
      <div>
        <FooterRSA></FooterRSA>
      </div>
    </>
  );
};

export default KeyServicesPage;
