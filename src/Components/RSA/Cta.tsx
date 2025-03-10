import { yellow } from "@mui/material/colors";
import React from "react";
import { Container, Button } from "react-bootstrap";

const CTA1Section = () => {
  return (
    <div
      style={{
        backgroundColor: "#DAA520",
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
          You Can Count On Us
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.9,
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Our mission is to promote world-class, cutting-edge research,
          facilitate interdisciplinary collaboration, and nurture the next
          generation of researchers and innovators
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
          Schedule A Meeting
        </Button>
      </Container>
    </div>
  );
};

export default CTA1Section;
