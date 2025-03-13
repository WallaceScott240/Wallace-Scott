import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaBookOpen, FaLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const services = [
  {
    title: "Research Publication Services",
    description:
      "Comprehensive support for research paper ideation, structuring, manuscript editing, and journal submission.",
    icon: <FaBookOpen />,
    link: "/research-publication",
  },
  {
    title: "IPR and Patent Services",
    description:
      "Patent searches, application drafting, and legal support for securing intellectual property rights globally.",
    icon: <FaLightbulb />,
    link: "/ipr-patent",
  },
];

const KeyServices = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <section className="key-services py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-start">
            <h2 className="fw-bold mb-4">Key Services</h2>
            <p className="text-muted lead">
              We offer a comprehensive suite of services designed to meet the
              diverse needs of its clientele, which includes universities,
              research institutions, independent researchers, start-ups, SMEs,
              and large corporations. These services are divided into two main
              categories: research publication services and IPR and patent
              services.
            </p>
          </Col>

          <Col md={7}>
            <Row className="g-4">
              {services.map((service, index) => (
                <Col md={6} key={index}>
                  <Card className="service-card text-center border-0">
                    <Card.Body>
                      <div className="icon-wrapper">{service.icon}</div>
                      <h5 className="fw-bold service-title">{service.title}</h5>
                      <p className="text-muted service-description">
                        {service.description}
                      </p>
                      <Button
                        variant="outline-primary"
                        className="rounded-pill px-4"
                        onClick={() => navigate(service.link)} // Navigate on click
                      >
                        Read More +
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <style>{`
        .key-services {
          background: linear-gradient(to bottom right, #f8f9fa, #e3eaf0);
          padding: 80px 0;
        }
        .service-card {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 65px;
          height: 65px;
          margin: 0 auto 15px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          font-size: 32px;
          color: #007bff;
        }
        .service-title {
          font-size: 18px;
          font-weight: 600;
          min-height: 50px;
        }
        .service-description {
          font-size: 14px;
          line-height: 1.5;
          min-height: 60px;
        }
        @media (max-width: 768px) {
          .key-services {
            padding: 60px 15px;
          }
          .service-card {
            padding: 20px;
          }
          .service-title {
            font-size: 16px;
            min-height: 40px;
          }
          .service-description {
            font-size: 13px;
            min-height: 50px;
          }
          .text-start {
            text-align: center !important;
          }
          .icon-wrapper {
            width: 55px;
            height: 55px;
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default KeyServices;
