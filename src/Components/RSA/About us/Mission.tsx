import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Mission = () => {
  return (
    <Container className="py-5 px-lg-5 px-3">
      {" "}
      {/* Added better left-right spacing */}
      {/* First Row - Image Left, Text Right */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <div className="rounded-4 overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/19862212/pexels-photo-19862212/free-photo-of-a-building-with-glass-windows-and-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="RSA Labs Work"
              className="w-100"
              style={{
                objectFit: "cover",
                maxHeight: "400px",
                borderRadius: "20px",
              }}
            />
          </div>
        </Col>
        <Col md={6} className="ps-lg-5">
          {" "}
          {/* Added left padding for spacing */}
          <h2 className="fw-bold mb-3">Mission</h2>
          <p className="text-muted fs-5">
            To promote world-class, cutting-edge research, facilitate
            interdisciplinary collaboration, and nurture the next generation of
            researchers and innovators
          </p>
          {/* <Button
            variant="dark"
            className="fw-bold rounded-pill px-4 py-2 mt-2"
          >
            Learn More →
          </Button> */}
        </Col>
      </Row>
      {/* Second Row - Text Left, Image Right */}
      <Row className="align-items-center flex-row-reverse">
        <Col md={6}>
          <div className="rounded-4 overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/14663734/pexels-photo-14663734.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Innovation at RSA Labs"
              className="w-100"
              style={{
                objectFit: "cover",
                maxHeight: "400px",
                borderRadius: "20px",
              }}
            />
          </div>
        </Col>
        <Col md={6} className="pe-lg-5">
          {" "}
          {/* Added right padding for spacing */}
          <h2 className="fw-bold mb-3">Vision</h2>
          <p className="text-muted fs-5">
            To be an exemplar of innovation by advancing research potential and
            contributing to societal impact through tangible outcomes
          </p>
          {/* <Button
            variant="dark"
            className="fw-bold rounded-pill px-4 py-2 mt-2"
          >
            Explore More →
          </Button> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Mission;
