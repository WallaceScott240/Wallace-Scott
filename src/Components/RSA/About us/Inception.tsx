import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Inception = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "80vh",
        backgroundImage: `url("/assets/HeroE.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left", // Left-align all text
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={9} md={10} sm={12}>
              {/* Title */}
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)", // Responsive size
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                  textAlign: "left", // Left-aligned
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
                  The
                </span>{" "}
                <span
                  style={{
                    fontWeight: "800",
                    fontFamily: "'Inter', sans-serif",
                    color: "white",
                  }}
                >
                  Inception
                </span>
              </h1>

              {/* Separator */}
              <hr
                style={{
                  border: "1px solid white",
                  width: "90%", // Left-aligned width
                  margin: "20px 0",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontSize: "clamp(1rem, 2.2vw, 1.3rem)", // Auto-adjust font size
                  maxWidth: "800px",
                  color: "white",
                  lineHeight: "1.7",
                  textAlign: "justify", // Clean justified text
                }}
              >
                RSA Labs Private Limited is a Bangalore, India-based provider of
                research publication services and patent assistance to Indian
                and Global Corporate Organisations and Educational Institutions.
                Established in 2023, the company specializes in supporting
                researchers and inventors across various sectors, including
                academia, management, engineering, and information technology.
                Our mission is to enhance global innovation and knowledge
                dissemination by providing expert guidance and support in
                securing intellectual property rights and achieving publication
                in leading academic journals.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Inception;
