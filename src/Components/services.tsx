import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLaptop, FaMobileAlt, FaDatabase } from "react-icons/fa";

const ServicesSection = () => {
  const sectionStyle = {
    background: "linear-gradient(45deg, #000000, #14213d, #fca311)",
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
              <h3 style={titleStyle}>Web Development</h3>
              <p style={descriptionStyle}>
                Building responsive and user-friendly web applications.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div style={serviceStyle}>
              <FaMobileAlt style={iconStyle} />
              <h3 style={titleStyle}>Mobile App Development</h3>
              <p style={descriptionStyle}>
                Creating native and cross-platform mobile applications.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div style={serviceStyle}>
              <FaDatabase style={iconStyle} />
              <h3 style={titleStyle}>Database Management</h3>
              <p style={descriptionStyle}>
                Designing and optimizing databases for efficient performance.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
