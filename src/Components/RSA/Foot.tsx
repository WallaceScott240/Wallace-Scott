import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const FooterRSA: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <Container>
        <Row className="justify-content-center text-center">
          {/* Logo Section */}
          <Col xs={12} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
            <div style={styles.logoBox}>RSA</div>
          </Col>

          {/* Links Section */}
          <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-3 mb-md-0">
            {[
              "About Us",
              "Research Publication Services",
              "IPRs and Patents Service",
              "RAPTOR",
              "Blogs and Resources",
            ].map((text, index) => (
              <a key={index} href="#" style={styles.link}>
                {text}
              </a>
            ))}
          </Col>

          {/* Contact Section */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <h5 style={styles.contactTitle}>Contact Us</h5>
            <p style={styles.contactText}>Phone: +91- 77085 77771</p>
            <p style={styles.contactText}>Email: info@website.co</p>
            <p style={styles.contactText}>Location: Bangalore, India</p>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-4 justify-content-between align-items-center text-center text-md-start">
          <Col xs={12} md={6}>
            <p style={styles.copyright}>© {new Date().getFullYear()} RSA. All Rights Reserved.</p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
            <div style={styles.iconContainer}>
              {[FaInstagram, FaTwitter, FaLinkedin, FaYoutube].map(
                (Icon, index) => (
                  <Icon key={index} style={styles.icon} />
                )
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Inline Styles
const styles = {
  footer: {
    backgroundColor: "#f8f9fa",
    padding: "40px 0",
    borderTop: "1px solid #ddd",
  },
  logoBox: {
    fontSize: "70px",
    fontWeight: "bold",
    color: "#333",
  },
  link: {
    color: "#333",
    textDecoration: "none",
    marginBottom: "6px",
    fontSize: "14px",
  },
  contactTitle: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  contactText: {
    marginBottom: "4px",
    fontSize: "14px",
  },
  iconContainer: {
    display: "flex",
    gap: "12px",
  },
  icon: {
    fontSize: "20px",
    cursor: "pointer",
    color: "#333",
  },
  copyright: {
    fontSize: "14px",
    color: "#666",
  },
};

export default FooterRSA;