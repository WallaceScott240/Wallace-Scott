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
      {/* Testimonials Section */}
      <Row className="mt-5 text-center">
        <Col>
          {/* <h3 className="fw-bold">What Our Clients Say</h3> */}
          <p className="fs-5 text-muted">
            Hear from professionals who have benefited from our expertise in
            securing intellectual property rights and academic publishing.
          </p>
        </Col>
      </Row>
      {/* Testimonial Cards */}
      <Row className="mt-4 gx-5">
        {[
          {
            name: "Emily Johnson",
            feedback:
              "Thanks to the expert guidance provided by the team, I was able to secure my intellectual property rights effortlessly. Highly recommend their services!",
          },
          {
            name: "Michael Patel",
            feedback:
              "The support I received in achieving publication in top academic journals was exceptional. Their expertise truly made a difference in my research journey.",
          },
          {
            name: "Sophia Lee",
            feedback:
              "I am grateful for the guidance in navigating the complex process of securing intellectual property rights. Their professionalism is unmatched.",
          },
        ].map((testimonial, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="d-flex">
            <Card className="border-0 shadow-sm p-4 w-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="rounded-circle bg-dark d-flex justify-content-center align-items-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <span className="text-white fw-bold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <h6 className="ms-3 mb-0">{testimonial.name}</h6>
                </div>
                <p className="text-muted fs-6">{testimonial.feedback}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExpertGuide;
