import React from "react";
import { Container, Button, Row, Col, Carousel } from "react-bootstrap";

const HeroRSASection = () => {
  const scrollToSection = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "80vh",
        overflow: "hidden",
      }}
    >
      {/* Text Content Layer (Centered) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
          color: "white",
          zIndex: 2,
          padding: "20px",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10} sm={12}>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: "1.2",
                }}
              >
                <span
                  style={{
                    fontWeight: "300",
                    fontStyle: "italic",
                    color: "black",
                    fontFamily: "'EB Garamond', serif",
                  }}
                >
                  For
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
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                  maxWidth: "750px",
                  margin: "0 auto",
                  color: "black",
                  lineHeight: "1.6",
                }}
              >
                We enhance global innovation and knowledge dissemination by
                providing expert guidance and support in securing intellectual
                property rights and achieving publication in leading academic
                journals.
              </p>

              <Button
                variant="light"
                style={{
                  marginTop: "10px",
                  fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                  padding: "10px 20px",
                  borderRadius: "50px",
                }}
                onClick={scrollToSection}
              >
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Background Image Carousel */}
      <Carousel
        controls={false}
        indicators={false}
        interval={10000}
        fade
        style={{ position: "relative", zIndex: 1 }}
      >
        {["/assets/Hero4.png", "/assets/Hero2.png", "/assets/Hero3.png"].map(
          (image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "80vh",
                  objectFit: "cover",
                }}
              />
            </Carousel.Item>
          )
        )}
      </Carousel>

      {/* Target Section for Scrolling */}
      <div
        id="target-section"
        style={{
          height: "100vh",
          backgroundColor: "#f8f9fa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Welcome to the next section!</h2>
      </div>
    </div>
  );
};

export default HeroRSASection;
