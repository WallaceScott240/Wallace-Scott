import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <BrowserRouter>
      <>
        <Navbar bg="white" data-bs-theme="light">
          <Container>
            <Navbar.Brand as={Link} to="" className="display-1">
              WS
            </Navbar.Brand>
            <Nav className="">
              <Nav.Link as={Link} to="">
                .
              </Nav.Link>
              <Nav.Link as={Link} to="">
                .
              </Nav.Link>
              <Nav.Link as={Link} to="">
                .
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </BrowserRouter>
  );
}

export default Navigation;
