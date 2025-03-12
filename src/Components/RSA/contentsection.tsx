import React from "react";
import { Container, Button } from "react-bootstrap";

const ContentSection = () => {
  return (
    <Container
      fluid
      className="mt-5 px-3 px-md-5 d-flex align-items-center"
      style={{ height: "100px" }}
    >
      <div
        className="w-100 position-relative overflow-hidden rounded-4 d-flex align-items-center"
        style={{
          height: "100px",
          backgroundColor:'#355E3B'
          }}
      >
        <div className="text-white ps-4" style={{ flex: 1, fontSize: "14px" }}>
          Driving innovation through research, collaboration, and technology.
        </div>
        <div className="pe-4">
          <Button
            variant="light"
            className="fw-bold rounded-pill px-4 py-2 d-flex align-items-center"
          >
            Lorem Ipsum <span className="ms-2">→</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ContentSection;
