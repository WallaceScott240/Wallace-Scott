import { Container, Row, Col, Card } from "react-bootstrap";
import CTA1Section from "./Cta";

function CardSection() {
  const cardData = [
    {
      image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Tech Innovations",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      link: "#",
    },
    {
      image:
        "https://images.pexels.com/photos/1139319/pexels-photo-1139319.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Business Growth",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      link: "#",
    },
    {
      image:
        "https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Creative Design",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      link: "#",
    },
    {
      image:
        "https://images.pexels.com/photos/6147148/pexels-photo-6147148.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coding Mastery",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "#",
    },
  ];

  return (
    <Container className="py-5">

      <div className="mb-4">
        <h2 style={{ fontWeight: "bold", color: "#333" , textAlign:"center"}}>
          Explore Our Insights
        </h2>
        <p style={{ color: "#666", maxWidth: "", margin: "", textAlign: "center" }}>
          Discover the latest trends, insights, and innovations in various
          domains.
        </p>
      </div>
      <div style={{ height: 20 }}></div>

      <Row>
        {cardData.map((card, index) => (
          <Col md={6} lg={3} className="mb-4" key={index}>
            <Card
              className="border-0 shadow-sm"
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
              <Card.Body className="text">
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
