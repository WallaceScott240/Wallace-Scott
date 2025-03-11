import React from "react";
import { Container, Button, Row, Col, Carousel } from "react-bootstrap";

const HeroRSASection = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "80vh",
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.02)",
          color: "white",
          zIndex: 2,
          padding: "20px",
        }}
      >
        <Container>
          <Row className="align-items-center text-center text-md-start">
            <Col md={12} sm={12}>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <span
                  style={{
                    fontWeight: "300",
                    fontStyle: "italic",
                    color: "Black",
                    fontFamily: "'EB Garamond', serif",
                  }}
                >
                  FOR
                </span>{" "}
                <span
                  style={{
                    fontWeight: "800",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Researchers and Inventors across academia, management,
                  engineering, and information technology
                </span>
              </h1>

              <p
                style={{
                  fontSize: "1.1rem",
                  maxWidth: "900px",
                  color: "black",
                }}
              >
                We enhance global innovation and knowledge dissemination by
                providing expert guidance and support in securing intellectual
                property rights and achieving publication in leading academic
                journals
              </p>
              <Button
                variant="light"
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

      <Carousel
        controls={false}
        indicators={false}
        interval={10000}
        fade
        style={{ position: "relative", zIndex: 1 }}
      >
        <Carousel.Item>
          <img
            src="/images/Hero1.jpg"
            alt="Slide 1"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/Hero2.png"
            alt="Slide 2"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/Hero3.png"
            alt="Slide 3"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroRSASection;
