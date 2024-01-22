import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaEnvelope, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const InformativeFooter = () => {
  const handleOpenURL = () => {
    window.open(
      "https://img1.wsimg.com/blobby/go/c2d42004-8296-4a70-9aaa-ea7e3f01228f/Wallace%20Dsouza.pdf",
      "_blank"
    );
  };

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Me</h5>
            <p>
              Feel free to reach out to me for any inquiries or just to say hi!
            </p>
            <Row className="contact-details">
              <Col>
                <p>
                  <FaEnvelope /> Email: wallacebusiness42@gmail.com
                </p>
                <p>
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
                <p>
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
                <p>
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
              </Col>
            </Row>
          </Col>
          <Col md={6} className="text-center mt-3 mt-md-0">
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
    </footer>
  );
};

export default InformativeFooter;
