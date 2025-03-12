import { yellow } from "@mui/material/colors";
import React from "react";
import { Container, Button } from "react-bootstrap";

const CTA2Section = () => {
  return (
    <div
      style={{
        backgroundColor: '#355E3B',
        color: "white",
        padding: "80px 20px",
        textAlign: "center", // Center align text
        width: "100vw",
        margin: "0",
        borderRadius: "0",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0)",
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Ready to Take the Next Step?
        </h2>
        <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "700px", margin: "0 auto" }}>
          Join us and start building something extraordinary today.
        </p>
        <Button
          variant="light"
          style={{
            marginTop: "20px",
            fontSize: "1rem",
            padding: "10px 20px",
            borderRadius: "50px",
          }}
        >
          Get Started
        </Button>
      </Container>
    </div>
  );
};

export default CTA2Section;
