import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const ContactSectionRSA = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
          Get in Touch
        </motion.h2>
        <p style={{ fontSize: "1.2rem", opacity: 0.8, marginBottom: "40px", color: "#555" }}>
          We’d love to hear from you! Fill out the form below and we’ll get back to you soon.
        </p>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: "#FFFFFF",
            padding: "40px",
            borderRadius: "12px",
            maxWidth: "600px",
            margin: "0 auto",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label style={{ fontWeight: "bold", color: "#444" }}>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    style={{
                      borderRadius: "8px",
                      border: "2px solid rgb(216, 216, 216)",
                      padding: "10px",
                      fontSize: "1rem",
                      transition: "0.3s",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label style={{ fontWeight: "bold", color: "#444" }}>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    style={{
                      borderRadius: "8px",
                      border: "2px solid rgb(216, 216, 216) ",
                      padding: "10px",
                      fontSize: "1rem",
                      transition: "0.3s",
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="message" className="mb-4">
              <Form.Label style={{ fontWeight: "bold", color: "#444" }}>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Write your message..."
                required
                style={{
                  borderRadius: "8px",
                  border: "2px solid rgb(216, 216, 216)",
                  padding: "10px",
                  fontSize: "1rem",
                  transition: "0.3s",
                }}
              />
            </Form.Group>
            <Button
              type="submit"
              style={{
                backgroundColor: "black",
                border: "none",
                padding: "12px 24px",
                fontSize: "1.2rem",
                borderRadius: "8px",
                fontWeight: "bold",
                width: "100%",
                color: "white",
              }}
            >
              Send Message
            </Button>
          </Form>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactSectionRSA;
