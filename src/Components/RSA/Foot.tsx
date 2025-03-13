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
          <Col xs={12} md={4} className="d-flex flex-column align-items-center text-center mb-3 mb-md-0" style={styles.navMenu}>
            <a href="/rsa-labs" style={styles.link}>About Us</a>
            <a href="/research-publication" style={styles.link}>Research Publication Services</a>
            <a href="/ipr-patent" style={styles.link}>IPRs and Patents Service</a>
            <a href="/rapter" style={styles.link}>RAPTER</a>
            <a href="/blogs" style={styles.link}>Blogs and Resources</a>
          </Col>

          {/* Contact Section (Centered) */}
          <Col xs={12} md={4} className="d-flex flex-column align-items-center text-center">
            <h5 style={styles.contactTitle}>Contact Us</h5>
            <p style={styles.contactText}>
              📞 <a href="tel:+917708577771" style={styles.contactLink}>+91-77085 77771</a>
            </p>
            <p style={styles.contactText}>
              ✉️ <a href="mailto:info@rsalabs.co" style={styles.contactLink}>info@rsalabs.co</a>
            </p>
            <p style={styles.contactText}>📍 Bangalore, India</p>
          </Col>
        </Row>
      </Container>

      {/* Copyright & Social Icons - Moved to Bottom */}
      <div style={styles.footerBottom}>
        <div style={styles.iconContainer}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram style={styles.icon} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter style={styles.icon} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin style={styles.icon} /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube style={styles.icon} /></a>
        </div>
        <br />
        <p style={styles.copyright}>© {new Date().getFullYear()} RSA. All Rights Reserved.</p>

      </div>
    </footer>
  );
};

// **Inline Styles (Fixed TypeScript Issue)**
const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "white",
    padding: "40px 0 20px",
    borderTop: "1px solid #ddd",
    boxShadow: "0px -3px 10px rgba(0, 0, 0, 0.08)",
    position: "relative", // Ensures it stays at the bottom dynamically
  },
  logoBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "220px",
    maxWidth: "100%",
    height: "auto",
  },
  navMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  link: {
    color: "#333",
    textDecoration: "none",
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
  contactLink: {
    color: "#007bff",
    textDecoration: "none",
  },
  footerBottom: {
    textAlign: "center",
    marginTop: "20px",
    paddingTop: "10px",
    borderTop: "1px solid #ddd",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "10px",
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
