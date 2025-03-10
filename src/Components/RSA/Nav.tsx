import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const styles = {

  logoBox: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#333",
  },};

const MyNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className=" bg-white py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark">
        <Col xs={12} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
            <div style={styles.logoBox}>RSA</div>
          </Col>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link as={Link} to="/" className="text-dark fw-medium">Home</Nav.Link>

            {/* About Us Dropdown */}
            <NavDropdown title="About Us" id="about-dropdown">
              <NavDropdown.Item as={Link} to="/rsa-labs">RSA Labs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/careers">Careers</NavDropdown.Item>
            </NavDropdown>

            {/* Services Dropdown */}
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item as={Link} to="/key-services">Key Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/research-publication">Research & Publication</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ipr-patent">IPR & Patent</NavDropdown.Item>
            </NavDropdown>

            {/* Showcase Dropdown */}
            <NavDropdown title="Showcase" id="showcase-dropdown">
              <NavDropdown.Item as={Link} to="/rapter">Rapter</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/portfolio">Portfolio</NavDropdown.Item>
            </NavDropdown>

            {/* Allies Dropdown */}
            <NavDropdown title="Allies" id="allies-dropdown">
              <NavDropdown.Item as={Link} to="/partnerships">Partnerships</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/collaborations">Collaborations</NavDropdown.Item>
            </NavDropdown>

            {/* Insights Dropdown */}
            <NavDropdown title="Insights" id="insights-dropdown">
              <NavDropdown.Item as={Link} to="/resources">Resources</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogs">Blogs</NavDropdown.Item>
            </NavDropdown>

            {/* Contact Link */}
            <Nav.Link as={Link} to="/contact" className="text-primary fw-medium">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
