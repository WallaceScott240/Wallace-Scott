import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import wallace from "./images/wallace.jpg";
import SpotifyEmbed from "./SpotifyCard";

function Grid1() {
  const Row1Style = {
    margin: 50,
    padding: 20,
    borderRadius: 7,
    backgroundColor: "#f2f2f2",
  };
  return (
    <Container style={Row1Style}>
      <Row >
        <Col>
          <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Meet Wallace Scott, an adept software developer based in India
                  with a solid foundation in web and app development from
                  Chowgule College of Arts and Sciences. Boasting two years of
                  practical experience, I'm currently immersed in advanced
                  studies in Bangalore. Proficient in React, Flutter, and
                  Firebase, I specialize in transforming ideas into reality
                  through code, crafting responsive web applications, and
                  developing intuitive mobile solutions. Beyond coding, my
                  passion for design aesthetics ensures a seamless fusion o dswdwd.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <img src={wallace} width={"auto"} height={"auto"} alt="" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Grid1;
