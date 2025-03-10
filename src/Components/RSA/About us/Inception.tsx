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

function Inception() {
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
              <h2 className="">The Inception</h2>
              <p className="lead">
                RSA Labs Private Limited is a Bangalore, India based provider of
                research publication services and patent assistance to Indian
                and Global Corporate Organisations and Educational Institutions.
                Established in 2023, the company specializes in supporting
                researchers and inventors across a variety of sectors including
                academia, management, engineering, and information technology.
                RSA Labs' mission is to enhance global innovation and knowledge
                dissemination by providing expert guidance and support in
                securing intellectual property rights and achieving publication
                in leading academic journals. RSA Labs is distinguished by its
                expert team, which includes PhD holders, patent attorneys, and
                specialists with deep roots in both academia and industry. This
                wealth of expertise allows us to offer customized,
                client-centric services tailored to the unique goals and needs
                of each client. We pride ourselves on building long-term
                relationships with clients, providing them with reliable support
                that extends beyond a single project. We remain committed to our
                mission of empowering researchers and inventors, ensuring that
                their innovations and discoveries gain the recognition and
                protection they deserve.
              </p>
        
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Inception;
