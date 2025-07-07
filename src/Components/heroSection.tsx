import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface BallPosition {
  x: number;
  y: number;
}

function HeroSection() {
  const [ballPosition, setBallPosition] = useState<BallPosition>({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setBallPosition({
      x: e.clientX - 5,
      y: e.clientY - 5,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const contentStyle = {
    borderRadius: "10px",
    color: "black",
    padding: "30px 20px",
  };

  const heroStyles = `
    .hero-section {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #004225;
      color: black;
      position: relative;
      overflow: hidden;
      padding: 20px;
    }

    .ball {
      pointer-events: none;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      position: absolute;
      top: ${ballPosition.y}px;
      left: ${ballPosition.x}px;
      transition: top 2s ease, left 2s ease;
      background: #FF5800;
      box-shadow:
        0 5px 15px rgba(255, 255, 255, 0.1),
        0 -5px 15px rgba(255, 255, 255, 0.1),
        10px 0 15px rgba(255, 255, 255, 0.1),
        -10px 0 15px rgba(255, 255, 255, 0.1);
    }

    .badge-wrapper {
      width: 100%;
      max-width: 330px;
      height: 89px;
      background-color: #3E475A;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      margin: 0 auto;
    }

    iframe {
      border: none;
      width: 100%;
      height: 100%;
    }

    @media (max-width: 768px) {
      .ball { width: 15px; height: 15px; }

      .display-1 {
        font-size: 2.5rem !important;
      }

      p {
        font-size: 0.95rem;
      }
    }

    @media (max-width: 576px) {
      .ball { width: 10px; height: 10px; }

      .display-1 {
        font-size: 2rem !important;
      }

      p {
        font-size: 0.9rem;
      }

      .hero-section {
        padding: 10px;
      }
    }
  `;

  return (
    <>
      <style>{heroStyles}</style>
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs={12} md={8} style={contentStyle}>
              <h1 className="display-1" style={{ color: "white" }}>
                Wallace Dsouza.
              </h1>
              <hr className="my-4" style={{ borderColor: "white" }} />
              <p className="mb-4 mt-3" style={{ color: "white" }}>
                Entrepreneur | Software Engineer | Cybersecurity Enthusiast
              </p>
              {/* <div className="badge-wrapper">
                <iframe
                  src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3833961"
                  title="TryHackMe Badge"
                ></iframe>
              </div> */}
            </Col>
          </Row>
        </Container>
        <div className="ball" />
      </section>
    </>
  );
}

export default HeroSection;
