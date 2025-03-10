import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const cards = [
  {
    number: "1",
    title: "Expert Team",
    description: "Comprising of PhDs, patent attorneys, and specialists with extensive experience in academia and industry",
    color: "#E4BA4D",
  },
  {
    number: "2",
    title: "Global Reach",
    description: "Ability to serve clients around the world with multilingual support and understanding of international publication and patent laws.",
    color: "#E4BA4D",
  },
  {
    number: "3",
    title: "Technology Driven",
    description: "Utilizing cutting-edge technology to streamline the publication and patent application processes, ensuring efficiency and cost-effectiveness.",
    color: "#E4BA4D",
  },
  {
    number: "4",
    title: "Client-centric Approach",
    description: "Customized services tailored to the specific needs and goals of each client, with a focus on building long-term relationships.",
    color: "#E4BA4D",
  },
];

const DNASection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{ background: "#F5F5F5", padding: "60px 0", textAlign: "center" }}
    >
      <Container>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "black",
          }}
        >
          Our DNA For Success
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.9,
            maxWidth: "800px",
            margin: "0 auto 40px",
            color: "black",
          }}
        >
          We believe everyone can evolve and grow continuously to discover and
          manifest their unlimited potential with Thrive Skills.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
            height: isMobile ? "auto" : "200px",
            cursor: "pointer",
            borderRadius: "12px",
            overflow: "hidden",
            justifyContent: "center",
          }}
        >
          {cards.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{
                flex: isMobile ? "none" : activeIndex === index ? 3 : 1,
                backgroundColor: activeIndex === index ? item.color : "#F5F5F5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "20px",
                borderRadius: "12px",
                boxShadow:
                  activeIndex === index
                    ? "0px 4px 10px rgba(0,0,0,0.1)"
                    : "none",
                position: "relative",
                minWidth: "50px",
                marginBottom: isMobile ? "10px" : "0",
              }}
            >
              <span
                style={{
                  fontSize: "6rem",
                  fontWeight: "bold",
                  color: "rgba(0,0,0,0.1)",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  transition: "opacity 0.3s linear",
                }}
              >
                {item.number}
              </span>

              {activeIndex === index || isMobile ? (
                <div style={{ textAlign: "center", zIndex: 2 }}>
                  <h3
                    style={{ margin: "0", fontSize: "1.8rem", color: "#333" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      marginTop: "10px",
                      opacity: 1,
                      transition: "opacity 0.3s linear",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ) : (
                <h3 style={{ transform: "rotate(0deg)", color: "#777" }}>
                  {item.title}
                </h3>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DNASection;
