import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const CareerHero = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "left center", // Set image position to center-left
        backgroundRepeat: "no-repeat",
        backgroundColor:'#355E3B'
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.0)", // Dark overlay for better contrast
          zIndex: 1,
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="">
          <Col md={8} sm={12}>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Join Our RSA Team
            </h1>
            <p style={{ fontSize: "1.1rem", color: "white" }}>
              Rich blended journeys that your people will love for making them more
              productive, effective, and happier.
            </p>
            <Button
              variant="light"
              style={{
                marginTop: "10px",
                fontSize: "1rem",
                padding: "10px 20px",
                borderRadius: "50px",
              }}
            >
              View Job Openings +
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CareerHero;
