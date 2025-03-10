import { Col, Container, Row, Card } from "react-bootstrap";

function Patenting() {
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

  const services = [
    {
      title: "IPR Consulting",
      description:
        "Advising clients on various intellectual property protections such as patents, trademarks, copyrights, and trade secrets.",
    },
    {
      title: "Patent Searches",
      description:
        "Conducting thorough searches to determine the novelty of an invention and avoid infringement.",
    },
    {
      title: "Patentability Analysis",
      description:
        "Evaluating the potential of an invention to meet patent criteria including novelty, non-obviousness, and usefulness.",
    },
    {
      title: "Drafting Patent Applications",
      description:
        "Writing detailed descriptions and claims defining the scope of an invention’s protection.",
    },
    {
      title: "Patent Filing",
      description:
        "Submitting patent applications to the relevant offices and managing correspondence.",
    },
    {
      title: "Patent Prosecution",
      description:
        "Representing applicants in patent office communications and negotiating to secure rights.",
    },
    {
      title: "International Patent Filing",
      description:
        "Assisting with filing patents internationally through PCT or direct filings in specific countries.",
    },
    {
      title: "Patent Maintenance & Licensing",
      description:
        "Managing maintenance fees and drafting agreements for commercial patent exploitation.",
    },
    {
      title: "Patent Litigation Support",
      description:
        "Providing legal support in infringement analysis and litigation proceedings.",
    },
    {
      title: "Freedom-to-Operate Analysis",
      description:
        "Assessing risks of patent infringement before launching new products or services.",
    },
    {
      title: "Trade Secret Protection & Trademark Services",
      description:
        "Guiding on trade secret management and assisting with trademark registration and enforcement.",
    },
    {
      title: "Copyright Registration",
      description:
        "Helping protect original works through copyright registration and enforcement.",
    },
  ];

  return (
    <div style={sectionStyle}>
      <Container>
        <h2 style={headingStyle}>
          Intellectual Property Rights (IPR) and Patent Services @ RSA Labs
        </h2>
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
        <br />
        <Row>
          <p>
            These services are designed to help Academic Institutions,
            Individuals and Organisations secure and enforce their intellectual
            property rights, capitalize on their inventions, and navigate the
            complex landscape of IPR law.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default Patenting;
