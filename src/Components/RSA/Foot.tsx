import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const FooterRSA: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <Container>
        <Row className="justify-content-center text-center">
          {/* Logo Section */}
          <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
            <div style={styles.logoBox}>
              <img src="/assets/RSA.png" alt="RSA Logo" style={styles.logoImage} />
            </div>
          </Col>

          {/* Links Section */}
          <Col xs={12} md={4} className="d-flex flex-column align-items-center text-center mb-3 mb-md-0">
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

          {/* Contact Section (Centered) */}
          <Col xs={12} md={4} className="d-flex flex-column align-items-center text-center">
            <h5 style={styles.contactTitle}>Contact Us</h5>
            <p style={styles.contactText}>Phone: +91- 77085 77771</p>
            <p style={styles.contactText}>Email: info@website.co</p>
            <p style={styles.contactText}>Location: Bangalore, India</p>
          </Col>
        </Row>

        {/* Copyright & Social Icons */}
        <Row className="mt-4 justify-content-center align-items-center text-center">
          <Col xs={12} md={6}>
            <p style={styles.copyright}>© {new Date().getFullYear()} RSA. All Rights Reserved.</p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
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
    boxShadow: "0px -3px 10px rgba(0, 0, 0, 0.08)", // Soft shadow for subtle depth
  },
  logoBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "220px", // Adjusted for better responsiveness
    maxWidth: "100%",
    height: "auto",
  },
  link: {
    color: "#333",
    textDecoration: "none",
    marginBottom: "6px",
    fontSize: "14px",
    transition: "color 0.3s ease-in-out",
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
    transition: "color 0.3s ease-in-out",
  },
  copyright: {
    fontSize: "14px",
    color: "#666",
  },
};

export default FooterRSA;
