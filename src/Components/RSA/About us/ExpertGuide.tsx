import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DNASection2 from "../accordion3";

const ExpertGuide = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5 px-lg-5 px-3">
      {/* Hero Section with Network Background */}
      <Row
        className="align-items-center text-white rounded-4 p-5 position-relative"
        style={{
          backgroundColor: "black",
          minHeight: "350px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "soft-light",
        }}
      >
        <Col md={6} className="ps-lg-5">
          <h2 className="fw-bold display-5">
            Expert Guidance in Research Publications, IPR, and Patents
          </h2>
          <p className="fs-5">
            Enhance global innovation and knowledge dissemination by providing
            expert guidance and support in intellectual property rights and
            achieving publication goals.
          </p>
          <br />
          <Button
            variant="light"
            className="fw-bold rounded-pill px-4 py-2 fs-5 shadow-sm"
            onClick={() => navigate("/key-services")}
          >
            Get Started
          </Button>
        </Col>
      </Row>

      {/* Additional Section */}
      <Row>
        <DNASection2 />
      </Row>
    </Container>
  );
};

export default ExpertGuide;
