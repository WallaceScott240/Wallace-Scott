import { Col, Container, Row } from "react-bootstrap";
import wallace from "./Components/images/wallace.jpg";

function About(){
   const imageStyle = {
      maxWidth: "100%",
      borderRadius: "10px",
      boxShadow: "0px 0px 25px -5px rgba(255,255,255,0.20)",
    };
   const aboutStyle = {
      backgroundColor: "#F8F9FA",
      borderRadius: "10px",
      padding: "50px",
      margin: "20px 20px",
      boxShadow: "0px 0px 25px -5px rgba(255,255,255,0.20)",
      color: "black",
    };
   return(
      <div style={aboutStyle}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={8}>
            <h2 className="">About Me</h2>
            <p className="lead">
              Hello! I'm Wallace Scott, a 21-year-old entrepreneur, author,
              and software engineer based in Bangalore. Currently pursuing my
              education at Jain University, I am passionate about leveraging
              technology to solve real-world problems.
            </p>
            <p className="lead">
              Join me on this journey as I navigate the realms of
              entrepreneurship, literature, and software engineering,
              constantly seeking new challenges and opportunities.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
   );
}
export default About;