import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const accordionItems = [
  {
    title: "Strategy",
    color: "#004225",
    content: "I approach problems with a future-focused mindset—aligning technology, business goals, and innovation to create effective long-term solutions.",
  },
  {
    title: "Leadership",
    color: "#40481C",
    content: "I lead by example, fostering collaboration and motivating teams to deliver with excellence, whether it's a startup project or a cybersecurity initiative.",
  },
  {
    title: "Communication",
    color: "#804D13",
    content: "From writing technical documentation to presenting complex ideas clearly, I bridge gaps between developers, stakeholders, and end users.",
  },
  {
    title: "Problem-Solving",
    color: "#BF5309",
    content: "I thrive in high-pressure environments—analyzing situations quickly and delivering practical, tech-driven solutions that make an impact.",
  },
  {
    title: "Adaptability",
    color: "#FF5800",
    content: "In a fast-evolving tech landscape, I stay agile—learning, pivoting, and innovating across domains like AI, cybersecurity, and software development.",
  },
];

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{ background: "white", padding: "60px 0", textAlign: "center" }}
    >
      <Container>
        

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
            height: isMobile ? "auto" : "250px",
            cursor: "pointer",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {accordionItems.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{
                flex: activeIndex === index ? 4 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "200",
                fontSize: "1.5rem",
                backgroundColor: item.color,
                padding: activeIndex === index ? "20px" : "0",
                writingMode: isMobile
                  ? "initial"
                  : activeIndex === index
                  ? "initial"
                  : "vertical-rl",
                textOrientation: "mixed",
                textAlign: activeIndex === index ? "left" : "center",
                minWidth: "50px",
                minHeight: isMobile ? "60px" : "auto",
                position: "relative",
              }}
            >
              {activeIndex === index ? (
                <div>
                  <h2 style={{ margin: "0", fontSize: "2rem", fontWeight: "200" }}>
                    {item.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "1rem",
                      marginTop: "10px",
                      opacity: activeIndex === index ? 1 : 0,
                      transition: "opacity 0.2s linear",
                    }}
                  >
                    {item.content}
                  </p>
                </div>
              ) : (
                <div
                  style={{ transform: isMobile ? "none" : "rotate(180deg)" }}
                >
                  {item.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AccordionSection;
