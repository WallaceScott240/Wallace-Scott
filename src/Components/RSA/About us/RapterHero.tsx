import React from "react";
import { Container, Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const RapterHeroSection: React.FC = () => {
  return (
    <Container fluid className="hero-section p-0 position-relative">
      {/* Background Image */}
      <img
        src="/assets/Rapter.png"
        alt="Rapter Background"
        className="img-fluid w-100"
      />

      {/* Text and Button Overlay */}
      <div className="overlay-content">
        <p className="copyright-text">
          © {new Date().getFullYear()} Rapter. All rights reserved.
        </p>
        
      </div>
    </Container>
  );
};

export default RapterHeroSection;

/* Styles */
const styles = `
  .hero-section {
    position: relative;
  }

  .overlay-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
  }

  .copyright-text {
    margin: 0;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .overlay-content {
      flex-direction: column;
      align-items: flex-start;
      right: 10px;
      bottom: 10px;
    }

    .copyright-text {
      margin-bottom: 10px;
    }
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
