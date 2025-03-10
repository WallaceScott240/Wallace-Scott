import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const IndustryFocus = () => {
  const services = [
    {
      title: "Academic Research",
      image:
        "https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Management",
      image:
        "https://images.pexels.com/photos/3285203/pexels-photo-3285203.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Engineering",
      image:
        "https://images.pexels.com/photos/3862138/pexels-photo-3862138.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Information Technology",
      image:
        "https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "BioTechnology",
      image:
        "https://images.pexels.com/photos/5595616/pexels-photo-5595616.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Pharmaceutical",
      image:
        "https://images.pexels.com/photos/5998492/pexels-photo-5998492.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <Container className="py-5 px-lg-5 px-3">
      {/* Section Header */}
      <Row className="mb-3">
        <Col className="">
          <h2 className="fw-bold">Industry Focus</h2>
        </Col>
      </Row>

      {/* Service Cards */}
      <Row className="gx-4 gy-4">
        {services.map((service, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="d-flex">
            <Card className="border-0 shadow-sm w-100 h-100">
              <Card.Img
                variant="top"
                src={service.image}
                alt={service.title}
                className="rounded-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <h5 className="fw-bold">{service.title}</h5>
                <div className="mt-auto"></div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default IndustryFocus;
