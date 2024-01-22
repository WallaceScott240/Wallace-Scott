import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LineDataset from "./graph";

const TradingSection = () => {
  return (
    <section className="trading-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-5 mb-md-0">
            <h2 className="mb-4">Empowering Your Investments</h2>
            <p className="lead">
              Navigate the world of investments with confidence. Whether you're
              a seasoned investor or just starting, our platform equips you with
              the insights needed for successful financial decisions.
            </p>
          </Col>
          <Col md={6}>
            <LineDataset />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TradingSection;
