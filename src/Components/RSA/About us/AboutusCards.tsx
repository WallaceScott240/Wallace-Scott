import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ResearchServices = () => {
  const services = [
    {
      title: "Research Publication Services",
      description:
        "We offer a range of services designed to support researchers in preparing and submitting their manuscripts for publication in academic journals.",
      link: "/research-publication",
    },
    {
      title: "IPR and Patent Services",
      description:
        "Intellectual Property Rights (IPR) and Patent Services encompass a wide range of activities to protect inventions and intellectual property.",
      link: "/ipr-patent",
    },
    {
      title: "RAPTER Research Platform",
      description:
        "Blockchain and AI-based application to significantly enhance the transparency, security, and efficiency of the research publication process.",
      link: "/rapter",
    },
  ];

  return (
    <Container className="py-5 px-lg-5 px-3">
      {/* Section Header */}
      <Row>
        <Col>
          <h2 className="fw-bold">Key Services @ RSA Labs</h2>
          <p className="fs-5 text-muted">
            RSA Labs specializes in supporting researchers and inventors across
            a variety of sectors including academia, management, engineering,
            and information technology.
          </p>
        </Col>
      </Row>

      {/* Service Cards */}
      <Row className="mt-4 gx-5">
        {services.map((service, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="d-flex">
            <Card className="border-0 p-4 w-100">
              <Card.Body>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="fs-6">{service.description}</p>
                <a
                  href={service.link}
                  className="text-muted fw-bold text-decoration-none"
                >
                  READ MORE →
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
