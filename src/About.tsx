import { Col, Container, Row } from "react-bootstrap";
import wallace from "./Components/images/wallace.jpg";
import html from "./Components/images/html.png";
import flutter from "./Components/images/flutter.png";
import react from "./Components/images/react.png";
import css from "./Components/images/css.png";
import javascript from "./Components/images/javascript.png";
import firebase from "./Components/images/firebase.png";
import UIUX from "./Components/images/UI/UX.png";
import figma from "./Components/images/figma.png";
import tredimg from "./Components/images/3Dart.png";
import WorkExperience from "./Components/workExp";

function About() {
  const imageStyle = {
    maxWidth: "100%",
    borderRadius: "10px",
    boxShadow: "0px 0px 25px -5px rgba(255,255,255,0.20)",
  };
  const aboutStyle = {
    backgroundColor: "#EF2D56",
    borderRadius: "5px",
    padding: "30px",
    margin: "15px",
    boxShadow: "0px 0px 15px -1px #EF2D56",
    color: "white",
  };

  const skillsData = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: react },
    { name: "Flutter", icon: flutter },
    { name: "FireBase", icon: firebase },
    { name: "Figma", icon: figma },
    { name: "3D Ilustrations", icon: tredimg },
    { name: "UI / UX", icon: UIUX },
    // Add more skills as needed
  ];

  const skillsStyle = {
    backgroundColor: "white",
    borderRadius: "0px",
    color: "black",
    padding: "50px",
    margin: "20px 0",
  };
  const iconStyle = {
    fontSize: "3rem",
    margin: "10px",
    width: "50px",
    height: "50px",
    color: "#007BFF",
  };
  return (
    <>
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
      <div style={skillsStyle}>
        <Container>
          <Row className="text-center ">
            {skillsData.map((skill, index) => (
              <Col xs={6} md={4} key={index}>
                <img src={skill.icon} alt={skill.name} style={iconStyle} />
                <p>{skill.name}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      
      <div>
        <WorkExperience></WorkExperience>
      </div>
    </>
  );
}
export default About;
