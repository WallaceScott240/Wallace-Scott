import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

// Stats Data
const stats = [
  { label: "Success Rate in Research Publication Output", value: 100, suffix: "%" },
  { label: "Faculty Assisted under the RSA Quality Publication Scheme", value: 1000, suffix: "+" },
  { label: "University Partnerships", value: 25, suffix: "+" },
];

const StatItem = ({ label, value, suffix }: { label: string; value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // Animation duration in ms
    const increment = end / (duration / 20); // Increment based on duration
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-100 d-flex flex-column justify-content-center align-items-center p-4 rounded shadow-sm"
      style={{ background: "#F9F9F9" }}
    >
      <h3 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#E4BA4D", marginBottom: "10px" }}>
        {count}{suffix}
      </h3>
      <p style={{ fontSize: "1.2rem", opacity: 0.8, color: "#666", textAlign: "center" }}>{label}</p>
    </motion.div>
  );
};

const StatsSection2 = () => {
  return (
    <section style={{ background: "#FFFFFF", color: "#333", padding: "80px 0", textAlign: "center" }}>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "40px", letterSpacing: "1px", color: "#222" }}
        >
          Our Growth in Numbers
        </motion.h2>

        <Row className="justify-content-center">
          {stats.map((stat, index) => (
            <Col key={index} md={4} sm={6} xs={12} className="mb-4 d-flex">
              <div className="w-100 d-flex flex-column h-100">
                <StatItem {...stat} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection2;
