import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const projects = [
  {
    title: "Cybersecurity Dashboard",
    description: "A real-time monitoring dashboard for network security.",
  },
  {
    title: "Secure Chat App",
    description: "End-to-end encrypted chat application.",
  },
  {
    title: "Bug Bounty Reports",
    description: "Collection of vulnerabilities found and reported.",
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Portfolio</h2>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="border-0 shadow-sm p-3" style={{ cursor: "pointer" }}>
              <Card.Body>
                <Card.Title className="text-center">{project.title}</Card.Title>
                <Card.Text className="text-muted text-center">{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PortfolioSection;
