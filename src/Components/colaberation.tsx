import React from "react";
import { Container, Button } from "react-bootstrap";

const CTASection = () => {
  const gradientStyle = {
    background: "linear-gradient(45deg, #355E93, #355E93)",
    color: "white",
    padding: "60px 20px",
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const titleStyle = {
    letterSpacing: "-2px",
    // fontFamily: "'', cursive",
    fontWeight: "700", // Adjust the font weight as needed
  };

  const handleContactClick = () => {
    // Replace the phone number with your WhatsApp number
    window.open("https://wa.me/919359119325");
  };

  return (
    <section style={gradientStyle} className="">
      <Container>
        <h2 className="display-1 mb-4" style={titleStyle}>
          Ready to start your next project? Contact me for a consultation.
        </h2>
        <p className="lead mb-4">Join me now and enjoy an additional 5% off.</p>
        <Button
          variant="outline-warning"
          size="lg"
          style={{ color: "white" }}
          onClick={handleContactClick}
        >
          Contact Me
        </Button>
      </Container>
    </section>
  );
};

export default CTASection;
