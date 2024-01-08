import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

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
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const contentStyle = {
    // backgroundColor: "rgba(0, 0, 0, 0.0)",
    borderRadius: "10px",
    color:"black",
    
    padding: "50px",
    // boxShadow: "0px 0px 25px -5px rgba(255,255,255,0.20)",
  };

  const heroStyles = `
    .hero-section {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      color: black;
      position: relative;
      overflow: hidden;
    }

    .animated-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      opacity: 0.5;
      animation: backgroundAnimation 10s infinite linear;
    }

    @keyframes backgroundAnimation {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }

    .ball {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      position: absolute;
      top: ${ballPosition.y}px;
      left: ${ballPosition.x}px;
      transition: top 2s ease, left 2s ease;
      background: blue;
      box-shadow:
        0 5px 15px rgba(255, 255, 255, 0.1),
        0 -5px 15px rgba(255, 255, 255, 0.1),
        10px 0 15px rgba(255, 255, 255, 0.1),
        -10px 0 15px rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 768px) {
      .ball {
        width: 15px;
        height: 15px;
      }
    }

    @media (max-width: 576px) {
      .ball {
        width: 10px;
        height: 10px;
      }

      .animated-background {
        opacity: 0.8;
      }
    }
  `;

  return (
    <>
      <style>{heroStyles}</style>
      <section className="hero-section" >
        <div className="animated-background" />
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} style={contentStyle}>
              <h1 className="text-center display-1" style={{color:"#355E93",}}>Wallace Scott.</h1>
              <p
                className="text-center"
                style={{
                  fontSize: "1.0rem",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                Entrepreneur | Software Engineer | Author
              </p>
            </Col>
          </Row>
        </Container>
        <div className="ball" />
      </section>
    </>
  );
}

export default HeroSection;
