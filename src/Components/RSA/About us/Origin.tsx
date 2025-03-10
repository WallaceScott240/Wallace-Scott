import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="py-5 px-lg-5 px-3">
      <Row className="align-items-center mb-5">
        {/* Image Section */}
        <Col md={6} className="text-center">
          <div className="rounded-4 overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/14747958/pexels-photo-14747958.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="RSA Labs Work"
              className="w-100"
              style={{
                objectFit: "cover",
                maxHeight: "350px", // Adjusted for better proportion
                width: "100%",
                borderRadius: "20px",
              }}
            />
          </div>
        </Col>

        {/* Text Section */}
        <Col md={6} className="ps-lg-5 mt-4 mt-md-0">
          <h2 className="fw-bold mb-3">Where It All Began</h2>
          <p className="text-muted fs-5">
            Our academic journey has always been about crafting customized solutions
            for inventors, artists, and researchers—ensuring their intellectual property
            remains secure while empowering their creativity.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
