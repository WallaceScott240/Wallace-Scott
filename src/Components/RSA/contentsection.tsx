import React from "react";
import { Container, Button } from "react-bootstrap";

const ContentSection = () => {
  // Function to open the default mail app
  const handleMailClick = () => {
    window.location.href = "mailto:info@rsalabs.co?subject=Inquiry&body=Hello, I would like to learn more about your services.";
  };

  return (
    <Container
      fluid
      className="mt-5 px-3 px-md-5 d-flex align-items-center"
      style={{ height: "100px" }}
    >
      <div
        className="w-100 position-relative overflow-hidden rounded-4 d-flex align-items-center justify-content-between px-4"
        style={{
          height: "100px",
          backgroundColor: "#355E3B",
        }}
      >
        <div className="text-white" style={{ fontSize: "14px", flex: 1 }}>
          Driving innovation through research, collaboration, and technology.
        </div>
        <Button
          variant="light"
          className="fw-bold rounded-pill px-4 py-2 d-flex align-items-center justify-content-center shadow-sm"
          style={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={handleMailClick} // Click event to open mail app
        >
          Get Started <span>→</span>
        </Button>
      </div>
    </Container>
  );
};

export default ContentSection;
