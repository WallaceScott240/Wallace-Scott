import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const HeroSectionRSAabout = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/src/Components/images/v.jpg')", // Replace with actual network image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} sm={12}>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Welcome Researchers and Inventors
            </h1>
            <p style={{ fontSize: "1.1rem", color: "white" }}>
              Discover cutting-edge solutions and stunning UI/UX designs that
              enhance your digital experience.
            </p>
            <Button
              variant="outline-light"
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                padding: "10px 20px",
                borderRadius: "50px",
              }}
            >
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSectionRSAabout;
