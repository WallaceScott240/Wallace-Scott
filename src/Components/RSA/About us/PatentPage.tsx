import React from "react";
import Patenting from "./Patent";
import ContentSection from "../contentsection";
import FooterRSA from "../Foot";

const Patent: React.FC = () => {
  return (
    <>
        <div style={{height: '88px'}}></div>
        <div>
            <Patenting></Patenting>
        </div>
        <div>
          <FooterRSA></FooterRSA>
        </div>
    </>
  );
};

export default Patent;
