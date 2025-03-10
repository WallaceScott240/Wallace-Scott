import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const accordionItems = [
  {
    title: "LEARNING",
    color: "#E0AD2D",
    content: "To get familiar with key concepts and frameworks",
  },
  {
    title: "APPLICATION",
    color: "#E2B33D",
    content:
      "To consistently practice and track growth with rituals and actions",
  },
  {
    title: "EXPERIENCE",
    color: "#E4BA4D",
    content: "Applying learned concepts in real-world scenarios",
  },
  {
    title: "COACHING",
    color: "#E7C05D",
    content: "Guidance from experts to refine skills",
  },
  {
    title: "NUDGING",
    color: "#E9C66E",
    content: "Subtle reminders to encourage consistency",
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
      style={{ background: "#F8F9FA", padding: "60px 0", textAlign: "center" }}
    >
      <Container>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Our Theory of Change
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.9,
            maxWidth: "800px",
            margin: "0 auto 40px",
          }}
        >
          A creative pedagogical approach with benchmark consumption, unmatched
          learner love, and real-world impact for today’s constantly shifting
          workplaces.
        </p>

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
                fontWeight: "bold",
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
                  <h2 style={{ margin: "0", fontSize: "2rem" }}>
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
