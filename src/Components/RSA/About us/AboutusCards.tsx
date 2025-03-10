import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ResearchServices = () => {
  const services = [
    {
      title: "Research Publication Services",
      description:
        "We offer a range of services designed to support researchers in preparing and submitting their manuscripts for publication in academic journals.",
    },
    {
      title: "IPR and Patent Services",
      description:
        "Intellectual Property Rights (IPR) and Patent Services encompass a wide range of activities to protect inventions and intellectual property.",
    },
    {
      title: "RAPTER Research Platform",
      description:
        "Blockchain and AI-based application to significantly enhance the transparency, security, and efficiency of the research publication process.",
    },
  ];

  return (
    <Container className="py-5 px-lg-5 px-3">
      {/* Section Header */}
      <Row className="">
        <Col>
          <h2 className="fw-bold">
            One-Stop Shop <br /> for Research and Innovation
          </h2>
          <p className="fs-5 text-muted">
            We offer a comprehensive suite of services designed to meet the diverse needs of its clientele, 
            which includes universities, research institutions, independent researchers, start-ups, SMEs, and large corporations.
          </p>
        </Col>
      </Row>

      {/* Service Cards */}
      <Row className="mt-4 gx-5">
        {services.map((service, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="d-flex">
            <Card className="border-0  p-4 w-100">
              <Card.Body>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="fs-6">{service.description}</p>
                <a href="#" className="text-muted fw-bold text-decoration-none">
                  READ MORE
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResearchServices;
