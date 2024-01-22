import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactMeSection = () => {
  const handleOpenURL = () => {
    window.open(
      "https://img1.wsimg.com/blobby/go/c2d42004-8296-4a70-9aaa-ea7e3f01228f/Wallace%20Dsouza.pdf",
      "_blank"
    );
  };

  return (
    <section
      className="contact-me-section"
      style={{
        backgroundColor: "black",
        color: "#FFFFFF",
        padding: "50px 0",
        margin: 0,
      }}
    >
      <Container>
        <h1 className="mb-4">Contact Me.</h1>
        <hr className="my-4" style={{ borderColor: "#FFCA2C" }} />
        <p className="mb-4">
          Feel free to reach out to me for any inquiries or just to say hi!
        </p>
        <Row className="contact-details">
          <Col md={6} lg={6}>
            <div className="mb-3">
              <p style={{ color: "#FFFFFF" }}>
                <FaEnvelope /> Email: wallacebusiness42@gmail.com
              </p>
            </div>
            <div className="mb-3">
              <p style={{ color: "#FFFFFF" }}>
                <FaTwitter /> Twitter:{" "}
                <a
                  href="https://twitter.com/calmque"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFFFFF" }}
                >
                  @calmque
                </a>
              </p>
            </div>
            <div className="mb-3">
              <p style={{ color: "#FFFFFF" }}>
                <FaLinkedin /> LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/wallace-dsouza-8b52121ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFFFFF" }}
                >
                  Wallace Scott
                </a>
              </p>
            </div>
            <div>
              <p style={{ color: "#FFFFFF" }}>
                <FaInstagram /> Instagram:{" "}
                <a
                  href="https://www.instagram.com/sc.walace?igsh=MWtyZHNrMnNwdXNzeg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFFFFF" }}
                >
                  sc.walace
                </a>
              </p>
            </div>
          </Col>
          <Col md={6} lg={6} className="text-center mt-3 mt-md-0">
            <Button
              variant="outline-warning"
              style={{
                borderRadius: 0,
                fontSize: "1rem",
                fontWeight: "lighter",
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
