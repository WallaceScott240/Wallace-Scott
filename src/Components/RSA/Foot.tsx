import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";

const FooterRSA: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <Container>
        {/* Main Footer Content */}
        <Row className="text-center text-md-left">
          {/* Brand */}
          <Col md={4} className="mb-4 mb-md-0 d-flex flex-column align-items-center">
            <h1 style={styles.brandName}>Wallace Scott.</h1>
            <p style={styles.tagline}>Building tomorrow’s tech, today.</p>
          </Col>

          {/* Contact */}
          <Col md={4} className="mb-4 mb-md-0 d-flex flex-column align-items-center">
            <h5 style={styles.contactTitle}>Contact Us</h5>
            <p style={styles.contactText}>
              <a href="tel:+919359116310" style={styles.contactLink}>
                +91-93591 16310
              </a>
            </p>
            <p style={styles.contactText}>
              <a href="mailto:wallacework42@gmail.com" style={styles.contactLink}>
                wallacework42@gmail.com
              </a>
            </p>
            <p style={styles.contactText}>Bangalore, India</p>
          </Col>

          {/* Social Icons */}
          <Col md={4} className="d-flex flex-column align-items-center">
            <h5 style={styles.contactTitle}>Follow Us</h5>
            <div style={styles.iconContainer}>
              <a href="https://github.com/WallaceScott240" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/wallace-dsouza" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Strip */}
        <Row className="mt-4">
          <Col className="text-center">
            <div style={styles.footerBottom}>
              <p style={styles.copyright}>
                © {new Date().getFullYear()} Wallace Scott. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Inline Styles
const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "white",
    padding: "50px 0 30px",
    borderTop: "1px solid #ddd",
    boxShadow: "0px -3px 10px rgba(0, 0, 0, 0.08)",
  },
  brandName: {
    color: "black",
    fontSize: "32px",
    fontWeight: "bold",
  },
  tagline: {
    color: "#666",
    fontSize: "14px",
    marginTop: "6px",
  },
  contactTitle: {
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "10px",
  },
  contactText: {
    marginBottom: "6px",
    fontSize: "14px",
    color: "#333",
  },
  contactLink: {
    color: "#007bff",
    textDecoration: "none",
  },
  iconContainer: {
    display: "flex",
    gap: "14px",
    justifyContent: "center",
    marginTop: "10px",
  },
  icon: {
    fontSize: "20px",
    color: "#333",
    transition: "color 0.3s ease",
  },
  footerBottom: {
    borderTop: "1px solid #ddd",
    paddingTop: "15px",
  },
  copyright: {
    fontSize: "13px",
    color: "#777",
  },
};

export default FooterRSA;
