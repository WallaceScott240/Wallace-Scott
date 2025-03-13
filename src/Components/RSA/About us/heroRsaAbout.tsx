import React from "react";
import { Container, Button } from "react-bootstrap";
import { BsChevronDown } from "react-icons/bs";

const HeroSectionRSAabout = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // Scrolls down by one full viewport height
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        color: "white",
        textAlign: "center",
        position: "relative",
        padding: "0 5vw",
      }}
    >
      <Container>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "bold",
          }}
        >
          Welcome Researchers <br /> and Inventors
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            opacity: 0.8,
          }}
        >
          Empowering global innovation and knowledge dissemination
        </p>
        <Button
          variant="light"
          onClick={handleScroll}
          style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Get Started
        </Button>
      </Container>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <BsChevronDown
          size={30}
          style={{
            animation: "bounce 1.5s infinite",
            opacity: 0.8,
          }}
        />
      </div>

      {/* CSS for bounce animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSectionRSAabout;
