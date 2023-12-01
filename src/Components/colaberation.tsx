
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import mountains from "./images/Mountains.jpg";
import cool from "./images/coolwalk.png";
import mushroom from "./images/musroom.jpg";

const CollaborationSection = () => {
  const sectionStyle = {
    backgroundColor: "#031521",
    padding: "50px 0",
  };

  const partnerCardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0px 0px 25px -5px rgba(255,255,255,0.20)",
    borderRadius: "10px",
    padding: "20px",
    transition: "transform 0.3s ease-in-out",
    marginBottom: "20px",
  };

  const partnerImageStyle = {
    maxWidth: "100%",
    height: "250px",
    borderRadius: "8px",
    marginBottom: "20px",
  };

  const textStyle = {
    color: "#ffffff",
  };

  const handleCardHover = (e: {
    currentTarget: { style: { transform: string } };
  }) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleCardHoverOut = (e: {
    currentTarget: { style: { transform: string } };
  }) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div style={sectionStyle}>
      <Container style={{ marginTop: 0, marginBottom: 0 }}>
        <h2 className="text-center display-4" style={{color: "white"}}>Collaborate with Us</h2>
        <br />
        <Row>
          <Col md={4} className="text-center mb-4">
            <div
              style={partnerCardStyle}
              onMouseOver={handleCardHover}
              onMouseOut={handleCardHoverOut}
            >
              <img src={mountains} alt="Partner 1" style={partnerImageStyle} />
              <h4 style={textStyle}>Partner 1</h4>
              <p style={textStyle}>
                Description of collaboration and benefits.
              </p>
              <Button variant="outline-light">Learn More</Button>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div
              style={partnerCardStyle}
              onMouseOver={handleCardHover}
              onMouseOut={handleCardHoverOut}
            >
              <img src={mushroom} alt="Partner 2" style={partnerImageStyle} />
              <h4 style={textStyle}>Partner 2</h4>
              <p style={textStyle}>
                Description of collaboration and benefits.
              </p>
              <Button variant="outline-light">Learn More</Button>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div
              style={partnerCardStyle}
              onMouseOver={handleCardHover}
              onMouseOut={handleCardHoverOut}
            >
              <img src={cool} alt="Partner 3" style={partnerImageStyle} />
              <h4 style={textStyle}>Partner 3</h4>
              <p style={textStyle}>
                Description of collaboration and benefits.
              </p>
              <Button variant="outline-light">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CollaborationSection;
