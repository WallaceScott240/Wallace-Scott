import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactMeSection = () => {
  const handleOpenURL = () => {
    window.open(
      "https://img1.wsimg.com/blobby/go/c2d42004-8296-4a70-9aaa-ea7e3f01228f/Cv.pdf",
      "_blank"
    );
  };

  return (
    <section
      className="contact-me-section"
      style={{
        backgroundColor: "#355E93",
        color: "#FFFFFF",
        padding: "30px",
        margin: 0,
      }}
    >
      <Container>
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me for any inquiries or just to say hi!
        </p>
        <Row className="contact-details">
          <Col md={6} lg={6}>
            <p style={{ color: "#FFFFFF" }}>
              <FaEnvelope /> Email: your.email@example.com
            </p>
            <p style={{ color: "#FFFFFF" }}>
              <FaTwitter /> Twitter:{" "}
              <a
                href="https://twitter.com/yourtwitterhandle"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#FFFFFF" }}
              >
                @yourtwitterhandle
              </a>
            </p>
            <p style={{ color: "#FFFFFF" }}>
              <FaLinkedin /> LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/yourlinkedinprofile"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#FFFFFF" }}
              >
                linkedin.com/in/yourlinkedinprofile
              </a>
            </p>
          </Col>
          <Col md={6} lg={6} className="text-center mt-3 mt-md-0">
            <Button
              variant="outline-warning"
              style={{
                borderRadius: 0,
                fontSize: "1rem",
                color: "white",
                width: "100%",
              }}
              onClick={handleOpenURL}
            >
              Download Complete Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactMeSection;
