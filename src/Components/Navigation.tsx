import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../About";
import Landing from "../LandingPage";
import HeroSection from "./heroSection";
import Home from "../LandingPage";

function Navigation() {
  return (
    <BrowserRouter>
      <>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand as={Link} to="/landing" className="display-1">
              WS
            </Navbar.Brand>
            <Nav className="">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/landing" element={<HeroSection />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default Navigation;
