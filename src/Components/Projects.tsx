import { Button, Col, Container, Row } from "react-bootstrap";

function PastProjects() {
  const handleCardHover = (e: {
    currentTarget: { style: { transform: string } };
  }) => {
    e.currentTarget.style.transform = "scale(1.01)";
  };

  const handleCardHoverOut = (e: {
    currentTarget: { style: { transform: string } };
  }) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  const textStyle = {
    color: "#122932",
  };

  const generateContent = () => {
    const content = [
      {
        title: "I R I S",
        company: "____________",
        description: "A personalized assistant designed to meet common questions",
        tags: ["Flutter", "Dart", "Bot", "UI"],
      },
      {
        title: "Block Chain R&D",
        company: "Conect LLC, USA",
        description:
          "At Conect LLC, I spearheaded groundbreaking R&D efforts in blockchain technology, driving innovation and enhancing our services. My work focused on Researching blockchain solutions, ensuring secure and transparent transactions. I had an amazing time learning and i am gratefull for this opportunity.",
        tags: ["Research", "Data Entry", "Time Management"],
      },
      {
        title: "Front-End Dev",
        company: "SS Technologies",
        description:
          "In my SS Tech front-end journey, I've thrived in a dynamic environment, enhancing my UI development skills. Proficient in Figma design and React, I seamlessly translate creative concepts into practical solutions. Collaborating within a forward-thinking team has deepened my appreciation for the synergy between design and development.",
        tags: ["React", "Figma", "Front-end", "UI/UX Design"],
      },
    ];

    return content.map((experience, index) => (
      <Col md={12} className="mb-4" key={index}>
        <div
          style={{
            backgroundColor: "white",
            boxShadow: "0px 0px 1.5px 0px #ffb5c3",
            borderRadius: "10px",
            padding: "30px",
            transition: "transform 0.1s ease-out",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          onMouseOver={handleCardHover}
          onMouseOut={handleCardHoverOut}
        >
          <h2 style={textStyle}>{experience.title}</h2>
          <h5 style={textStyle}>{experience.company}</h5>
          <p style={textStyle}>{experience.description}</p>
          <div style={{ marginTop: "auto" }}>
            <Row>
              {experience.tags.map((tag, tagIndex) => (
                <Button
                  key={tagIndex}
                  variant="outline-danger"
                  style={{
                    borderRadius: 50,
                    width: "auto",
                    fontSize: 10,
                    margin: 10,
                  }}
                >
                  {tag}
                </Button>
              ))}
            </Row>
          </div>
        </div>
      </Col>
    ));
  };

  return (
    <Container>
      <Row>{generateContent()}</Row>
    </Container>
  );
}

export default PastProjects;
