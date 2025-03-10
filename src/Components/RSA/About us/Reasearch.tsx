import { Col, Container, Row, Card, Button } from "react-bootstrap";

function ResearchAndPub() {
  const sectionStyle = {
    backgroundColor: "#F9F9F9",
    padding: "80px 20px",
    color: "#000",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Playfair Display, serif",
    marginBottom: "40px",
    textAlign: "center" as "center",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  };

  const buttonStyle = {
    marginTop: "30px",
    padding: "12px 28px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "#000",
    border: "none",
    borderRadius: "8px",
    color: "white",
    transition: "all 0.3s ease",
    cursor: "pointer",
    display: "block",
    margin: "0 auto",
  };

  const services = [
    {
      title: "Guidance on Ideation & Structuring",
      description:
        "Helping researchers generate innovative ideas for high-impact research.",
    },
    {
      title: "Collaborative Research",
      description:
        "Facilitating partnerships between universities, labs, and companies.",
    },
    {
      title: "Training & Support",
      description:
        "Providing guidance on methodologies, data collection, and research representation.",
    },
    {
      title: "Manuscript Editing",
      description:
        "Ensuring clarity, grammar correction, and polished writing.",
    },
    {
      title: "Formatting & Layout",
      description: "Aligning manuscripts with journal-specific guidelines.",
    },
    {
      title: "Journal Selection",
      description:
        "Recommending suitable journals to maximize research impact.",
    },
    {
      title: "Cover Letter Assistance",
      description: "Crafting compelling cover letters for journal submissions.",
    },
    {
      title: "Submission Management",
      description: "Handling submission processes and administrative tasks.",
    },
    {
      title: "Peer Review Guidance",
      description:
        "Assisting with review responses and manuscript improvements.",
    },
    {
      title: "Plagiarism Check",
      description:
        "Ensuring originality using advanced plagiarism detection tools.",
    },
    {
      title: "Translation Services",
      description: "Supporting research publication in multiple languages.",
    },
    {
      title: "Illustration & Artwork",
      description:
        "Designing high-quality figures and visuals for publication.",
    },
    {
      title: "Post-acceptance Support",
      description:
        "Proofreading final drafts and implementing last-minute changes.",
    },
    {
      title: "Research Promotion",
      description:
        "Enhancing visibility and engagement through strategic promotion.",
    },
    {
      title: "Ethics & Compliance",
      description:
        "Ensuring adherence to ethical research standards and policies.",
    },
  ];

  return (
    <div style={sectionStyle}>
      <Container>
        <h2 style={headingStyle}>Research Publication Services @ RSA Labs</h2>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <Card style={cardStyle} className="h-100">
                <Card.Body>
                  <Card.Title
                    style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                  >
                    {service.title}
                  </Card.Title>
                  <Card.Text style={{ opacity: 0.9 }}>
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <Button 
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#333")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#000")}
        >
          Learn More
        </Button> */}
        <br />
        <Row>
          <p>
            These services aim to streamline the publication process for
            researchers and increase the likelihood of successful publication,
            particularly in high-impact journals within the researcher's field.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default ResearchAndPub;
