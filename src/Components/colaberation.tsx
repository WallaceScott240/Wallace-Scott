import React from "react";
import { Container, Button } from "react-bootstrap";

const CTASection = () => {
  const gradientStyle = {
    background: "linear-gradient(45deg, #013220, #004225)",
    color: "white",
    padding: "60px 20px",
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const titleStyle = {
    letterSpacing: "-2px",
    fontWeight: "700",
  };

  const handleContactClick = () => {
    // Replace with your email address
    const email = "wallacebusiness42@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <section style={gradientStyle} className="">
      <Container>
        <h2 className="display-1 mb-4" style={titleStyle}>
          Ready to start your next project? Contact me for a consultation.
        </h2>
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
