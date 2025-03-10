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

function Innovation() {
  const imageStyle = {
    maxWidth: "100%",
    borderRadius: "10px",
    boxShadow: "0px 0px 25px -5px rgba(255,255,255,0.20)",
  };
  const aboutStyle = {
    backgroundColor: "black",
    // borderRadius: "5px",
    padding: "50px",
    margin: "0px",
    // boxShadow: "0px 0px 15px -1px #EF2D56",
    color: "white",
  };

  return (
    <>
      <div style={aboutStyle}>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={12}>
              <h1>Shaping Innovation</h1>
              <br />
              <h2 className="">Technology @RSA Labs</h2>
              <p className="lead">
                Technology plays a pivotal role at RSA Labs. We leverage
                cutting-edge technologies, including artificial intelligence and
                machine learning, to streamline publication and patent
                application processes. This not only enhances efficiency and
                reduces costs but also ensures that clients receive the fastest
                and most accurate service possible. In 2024, we launched a
                proprietary AI application that we use internally to match
                manuscripts with potential journals, significantly simplifying
                the publication process for researchers.
              </p>
              <br />
              <h2>Global Reach</h2>
              <p className="lead">
                Our global reach and multilingual capabilities enable us to
                serve an international clientele effectively. Our understanding
                of international publication and patent standards makes us a
                trusted partner for clients around the world. Over the past
                decade, our Founders and Advisers, Associates, and other Support
                Staff have achieved significant milestones in the areas of
                Research and Patents. We have global collaborators such as
                Futurenetics Limited, UK, and other associate organizations
                across the globe to help, guide, and support our global
                clientele. Looking forward, we aim to expand our service
                offerings into scientific communication and data visualization
                and to develop more tools to automate patent landscape analysis.
                We are also focusing on expanding our presence in emerging
                markets in Asia and Africa, recognizing the growing importance
                of these regions in global research and development.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Innovation;
