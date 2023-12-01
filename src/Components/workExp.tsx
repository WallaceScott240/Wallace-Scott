import { Button, Col, Container, Row } from "react-bootstrap";

function WorkExperience() {
  const handleCardHover = (e: {
    currentTarget: { style: { transform: string } };
  }) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleCardHoverOut = (e: {
    currentTarget: { style: { transform: string } };
  }) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  const partnerCardStyle = {
    backgroundColor: "white",
    boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.2)",
    borderRadius: "10px",
    padding: "25px",
    transition: "transform 0.1s ease-in-out",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const textStyle = {
    color: "white",
  };

  const generateContent = () => {
    const content = [
      {
        title: "Content Writer",
        company: "DESS",
        description:
          "My first month at DESS as a content writer has been a rewarding journey. The supportive environment, diverse projects, and collaborative culture have enhanced my skills and passion for content creation. Grateful for the opportunities and excited about contributing to DESS's continued success. Looking forward to what the future holds.",
        tags: ["Content Writing", "Advertising Ideas"],
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
      <Col md={6} className="mb-4" key={index}>
        <div
          style={{
            backgroundColor: "#1e293b",
            boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            padding: "30px",
            transition: "transform 0.1s ease-in-out",
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
                  variant="outline-info"
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

export default WorkExperience;
