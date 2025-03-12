import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const styles = {
  logoBox: {
    display: "flex",
    alignItems: "center",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#333",
    gap: "10px",
  },
  logoImage: {
    width: "161px",
    height: "61px",
  },
};

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false); // Track navbar state

  // Function to close the navbar
  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar expand="lg" fixed="top" className="bg-white py-3" expanded={expanded}>
      <Container>
        {/* Logo and Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark" onClick={closeNavbar}>
          <div style={styles.logoBox}>
            <img src="/assets/RSA.png" alt="RSA Logo" style={styles.logoImage} />
          </div>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link as={Link} to="/" className="text-dark fw-medium" onClick={closeNavbar}>
              Home
            </Nav.Link>

            {/* About Us Dropdown */}
            <NavDropdown title="About Us" id="about-dropdown">
              <NavDropdown.Item as={Link} to="/rsa-labs" onClick={closeNavbar}>
                RSA Labs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/careers" onClick={closeNavbar}>
                Careers
              </NavDropdown.Item>
            </NavDropdown>

            {/* Services Dropdown */}
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item as={Link} to="/key-services" onClick={closeNavbar}>
                Key Services
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/research-publication" onClick={closeNavbar}>
                Research & Publication
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ipr-patent" onClick={closeNavbar}>
                IPR & Patent
              </NavDropdown.Item>
            </NavDropdown>

            {/* Showcase Dropdown */}
            <NavDropdown title="Showcase" id="showcase-dropdown">
              <NavDropdown.Item as={Link} to="/rapter" onClick={closeNavbar}>
                Rapter
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/portfolio" onClick={closeNavbar}>
                Portfolio
              </NavDropdown.Item>
            </NavDropdown>

            {/* Allies Dropdown */}
            <NavDropdown title="Allies" id="allies-dropdown">
              <NavDropdown.Item as={Link} to="/partnerships" onClick={closeNavbar}>
                Partnerships
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/collaborations" onClick={closeNavbar}>
                Collaborations
              </NavDropdown.Item>
            </NavDropdown>

            {/* Insights Dropdown */}
            <NavDropdown title="Insights" id="insights-dropdown">
              <NavDropdown.Item as={Link} to="/resources" onClick={closeNavbar}>
                Resources
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogs" onClick={closeNavbar}>
                Blogs
              </NavDropdown.Item>
            </NavDropdown>

            {/* Contact Link */}
            <Nav.Link as={Link} to="/contact" className="text-primary fw-medium" onClick={closeNavbar}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
