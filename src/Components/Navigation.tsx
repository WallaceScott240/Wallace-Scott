import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className="display-1">WS</Navbar.Brand>
          <Nav className="display-5">
            <Nav.Link href="#home">.</Nav.Link>
            <Nav.Link href="#features">.</Nav.Link>
            <Nav.Link href="#pricing">.</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
