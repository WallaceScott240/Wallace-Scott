import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide a range of services including software development, consulting, and digital solutions tailored to your needs.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach out via our contact form or email us directly at support@example.com.",
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we specialize in crafting custom solutions that align with your business goals.",
  },
  {
    question: "What are your pricing plans?",
    answer: "Our pricing is flexible based on project complexity. Contact us for a tailored quote.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={{ background: "#F9F9F9", padding: "80px 0", textAlign: "center" }}>
      <Container>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px", color: "#222" }}
        >
          Frequently Asked Questions
        </motion.h2>
        <p style={{ fontSize: "1.2rem", opacity: 0.8, marginBottom: "40px", color: "#555" }}>
          Find answers to common questions below.
        </p>

        {/* FAQ List */}
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: "#FFFFFF",
                marginBottom: "15px",
                borderRadius: "8px",
                cursor: "pointer",
                padding: "15px 20px",
                border: "2px solid #E4BA4D",
                textAlign: "left",
              }}
              onClick={() => toggleFAQ(index)}
            >
              <motion.h4
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#222",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: 0,
                }}
              >
                {faq.question}
                <span style={{ fontSize: "1.5rem", color: "#E4BA4D" }}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </motion.h4>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  style={{ fontSize: "1rem", color: "#555", marginTop: "10px" }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
