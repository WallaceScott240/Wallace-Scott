import React from "react";
import { Container, Button } from "react-bootstrap";
import ReviewSection from "./review";

const InternshipCTASection = () => {
  const gradientStyle = {
    background: "linear-gradient(90deg, #ffffff, #ffffff)",
    color: "black",
    padding: "60px 20px",
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const titleStyle = {
    letterSpacing: "-2px",
    fontWeight: "700",
  };

  const flutterStyle = {
    color: "#0078D4", // Blue color for Flutter
    fontWeight: "bold",
  };

  const reactStyle = {
    color: "#61DAFB", // Green color for React
    fontWeight: "bold",
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
          Ready to take your skills to the next level? Join my internship
          program.
        </h2>
        <p className="lead mb-4">
          Explore the world of <span style={flutterStyle}>Flutter</span> and{" "}
          <span style={reactStyle}>React</span> with hands-on courses. Elevate
          your career with practical knowledge.
        </p>
        <Button
          variant="outline-success"
          size="lg"
          style={{ color: "" }}
          onClick={handleContactClick}
        >
          Apply Now
        </Button>
      </Container>
      <ReviewSection></ReviewSection>
    </section>
  );
};

export default InternshipCTASection;
