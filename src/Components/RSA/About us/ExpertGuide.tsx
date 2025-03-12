import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import DNASection from "../accordion2";
import DNASection2 from "../accordion3";

const ExpertGuide = () => {
  return (
    <Container className="py-5 px-lg-5 px-3">
      {" "}
      {/* Applied same margins */}
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
          {" "}
          {/* Added left padding for balance */}
          <h2 className="fw-bold display-5">
            Expert Guidance in Research Publications, IPR and Patents
          </h2>
          <p className="fs-5">
            Enhance global innovation and knowledge dissemination by providing
            expert guidance and support in intellectual property rights and
            achieving publication goals
          </p>
          <br />
          <Button
            variant="light"
            className="fw-bold rounded-pill px-4 py-2 fs-5 shadow-sm"
          >
            Get Started
          </Button>
        </Col>
      </Row>
      <Row>
      <DNASection2></DNASection2>
      </Row>
      
    </Container>
  );
};

export default ExpertGuide;
