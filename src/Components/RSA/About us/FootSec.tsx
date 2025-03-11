import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaPinterestP, FaFacebookF, FaTwitter, FaEnvelope } from "react-icons/fa";

const FooterSection: React.FC = () => {
  return (
    <div style={styles.footerContainer}>
      <Container>
        <Row className="align-items-center">
          {/* Left Section */}
          <Col md={4} className="d-flex align-items-center">
            <FaEnvelope style={styles.icon} />
            <div>
              <p style={styles.label}>Connect with us</p>
              <p style={styles.email}><a href="mailto:info@rsalabs.co" style={styles.emailLink}>info@rsalabs.co</a></p>
            </div>
          </Col>
          
          {/* Center Section */}
          <Col md={4} className="text-center">
            <span style={styles.logo}><b>RSA</b></span>
          </Col>
          
          {/* Right Section */}
          <Col md={4} className="d-flex justify-content-end">
            <FaLinkedinIn style={styles.socialIcon} />
            <FaPinterestP style={styles.socialIcon} />
            <FaFacebookF style={styles.socialIcon} />
            <FaTwitter style={styles.socialIcon} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footerContainer: {
    backgroundColor: "#004D43", // Matching the previous background color
    padding: "20px 0",
    color: "white",
  },
  icon: {
    fontSize: "24px",
    marginRight: "10px",
  },
  label: {
    margin: 0,
    fontSize: "14px",
    opacity: 0.8,
  },
  email: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
  },
  emailLink: {
    color: "#1E90FF",
    textDecoration: "none",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
  },
  socialIcon: {
    fontSize: "20px",
    marginLeft: "15px",
    cursor: "pointer",
  },
};

export default FooterSection;
