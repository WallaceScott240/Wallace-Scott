import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FooterRSA from "../Foot";

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@rsalabs.co?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <>
      <div className="contact-hero">
        <Container className="h-100 d-flex align-items-center">
          <Row className="w-100">
            {/* Left Column - Text & CTA */}
            <Col md={6} className="d-flex flex-column justify-content-center">
              <h1 className="hero-title">Let's Connect</h1>
              <p className="hero-subtitle">
                Have a project in mind? Get in touch and let’s create something
                amazing together.
              </p>
            </Col>

            {/* Right Column - Email Form with Glassmorphism */}
            <Col md={6} className="d-flex flex-column justify-content-center">
              <div className="glassmorphism-box">
                <h2 className="form-title">Send us a message</h2>
                <Form onSubmit={handleSubmit} className="contact-form">
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </Form.Group>

                  <Form.Group controlId="email" className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </Form.Group>

                  <Form.Group controlId="message" className="mt-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="dark"
                    className="mt-3 send-btn"
                  >
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>

        <style>{`
        .contact-hero {
          height: 100vh;
          background: white;
          color: black;
          display: flex;
          align-items: center;
        }
        .hero-title {
          font-size: 3rem;
          font-weight: bold;
        }
        .hero-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 500px;
        }
        .form-title {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }
        .glassmorphism-box {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(15px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .input-field {
          background: rgba(255, 255, 255, 0.4);
          border: 2px solid rgba(0, 0, 0, 0.3);
          color: black;
          padding: 10px;
          border-radius: 8px;
        }
        .input-field:focus {
          border-color: black;
          outline: none;
        }
        .send-btn {
          font-size: 1rem;
          padding: 14px;
          width: 100%;
          border-radius: 0px;
          font-weight: bold;
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>
      </div>
      <div>
        <FooterRSA></FooterRSA>
      </div>
    </>
  );
};

export default ContactHero;
