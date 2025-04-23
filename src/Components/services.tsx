import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLaptop,
  FaMobileAlt,
  FaEllipsisH,
  FaCog,
  FaBullhorn,
} from "react-icons/fa";

const ServicesSection = () => {
  const sectionStyle = {
    background: "linear-gradient(45deg, #000000, #004225)",
    padding: "60px 20px",
    margin: 0,
    color: "white",
  };

  const serviceStyle = {
    marginBottom: "30px",
  };

  const iconStyle = {
    fontSize: "3rem",
    marginBottom: "20px",
    color: "#FFFFFF",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "15px",
    letterSpacing: "-2px",
  };

  const descriptionStyle = {
    fontSize: "1rem",
  };

  return (
    <section style={sectionStyle}>
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <div style={serviceStyle}>
              <FaLaptop style={iconStyle} />
              <FaMobileAlt style={iconStyle} />
              <h3 style={titleStyle}>Web/Mobile App Development</h3>
              <p style={descriptionStyle}>
                Building responsive and user-friendly web/mobile applications.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div style={serviceStyle}>
              <FaBullhorn style={iconStyle} />
              <h3 style={titleStyle}>Digital Marketing</h3>
              <p style={descriptionStyle}>
                Promote your brand with effective digital marketing strategies.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div style={serviceStyle}>
              <FaCog style={iconStyle} />
              <h3 style={titleStyle}>More</h3>
              <p style={descriptionStyle}>
                Contact me for additional services and more options.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
