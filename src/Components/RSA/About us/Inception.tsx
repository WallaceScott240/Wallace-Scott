import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const Inception = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "80vh",
        backgroundImage: `url("/assets/HeroE.png")`, // Using image from public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          // background: "rgba(255, 255, 255, 0.6)", // Light overlay for readability
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Container>
          <Row className="align-items-center text-center text-md-start">
            <Col md={12} sm={12}>
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <span
                  style={{
                    fontWeight: "300",
                    fontStyle: "italic",
                    color: "black",
                    fontFamily: "'EB Garamond', serif",
                  }}
                >
                  The
                </span>{" "}
                <span
                  style={{
                    fontWeight: "800",
                    fontFamily: "'Inter', sans-serif",
                    color: "white",
                  }}
                >
                  Inception
                </span>
              </h1>
              <hr
                style={{
                  border: "1px solid white",
                  width: "100%",
                  margin: "15px 0",
                }}
              />

              <p
                style={{
                  fontSize: "1.1rem",
                  maxWidth: "900px",
                  color: "white",
                }}
              >
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
    </div>
  );
};

export default Inception;
