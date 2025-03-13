import React from "react";
import FooterRSA from "../Foot";
import HeroSectionPartners from "./PartnersSection";
import CollaborationSection from "./Collaberation";
import CollaborationSectionHero from "./CollaberationHero";

const Collabs: React.FC = () => {
  return (
    <>
      <div>
      <CollaborationSectionHero></CollaborationSectionHero>
      </div>
      <div>
        <FooterRSA></FooterRSA>
      </div>
    </>
  );
};

export default Collabs;
