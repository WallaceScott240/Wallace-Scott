import { Container, Row, Col, Card } from "react-bootstrap";
import CTA1Section from "./Cta";

function CardSection() {
  const cardData = [
    {
      image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Publications",
      text: "Assistance with research papers, essays, theses, and dissertations",
      link: "#",
    },
    {
      image:
        "https://images.pexels.com/photos/1139319/pexels-photo-1139319.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Patents",
      text: "Enable Patent application preparation, filing, publication and granting.",
      link: "#",
    },
    {
      image:
        "https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Collaborations",
      text: "Promote, and review progress on research collaborations",
      link: "#",
    },
    {
      image:
        "https://images.pexels.com/photos/6147148/pexels-photo-6147148.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Research Grants",
      text: "Assistance in applying for research grants, mentorship programmes",
      link: "#",
    },
  ];

  return (
    <Container className="py-5">
      <div className="mb-4 text-center">
        <h2 style={{ fontWeight: "bold", color: "#333" }}>
          Accelerate Your Research & Innovation
        </h2>
        <p style={{ color: "#666", maxWidth: "1000px", margin: "0 auto" }}>
          Unlock new possibilities in research and innovation with our
          comprehensive support services. From assisting with publications and
          patent filings to fostering collaborations and securing research
          grants, we provide the guidance and resources you need to succeed.
          Let’s turn your ideas into impactful contributions.
        </p>
      </div>

      <Row className="justify-content-center">
        {cardData.map((card, index) => (
          <Col xs={12} sm={6} md={6} lg={3} className="mb-4" key={index}>
            <Card
              className="border-0 shadow-sm h-100"
              style={{
                borderRadius: "12px",
                transition:
                  "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0px 10px 20px rgba(0, 0, 0, 0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0px 4px 10px rgba(0, 0, 0, 0.05)";
              }}
            >
              <Card.Img
                variant="top"
                src={card.image}
                style={{ borderRadius: "12px 12px 0 0" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#444",
                  }}
                >
                  {card.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "0.95rem", color: "#777" }}>
                  {card.text}
                </Card.Text>
                <a
                  href={card.link}
                  style={{
                    color: "#888",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    marginTop: "auto",
                  }}
                >
                  Learn More →
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardSection;
