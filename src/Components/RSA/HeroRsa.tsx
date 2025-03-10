import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const HeroRSASection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/src/Components/images/Hero.png')",
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
        borderRadius: "0px",
        margin: "1px",
        width: "calc(100% - 2px)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "0px",
        }}
      ></div>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6} sm={12}>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Innovate Your Future
            </h1>
            <p
              style={{ fontSize: "1.1rem", maxWidth: "600px", color: "white" }}
            >
              Discover cutting-edge solutions and stunning UI/UX designs that
              enhance your digital experience.
            </p>
            <Button
              variant="dark"
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                padding: "8px 16px",
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

export default HeroRSASection;
