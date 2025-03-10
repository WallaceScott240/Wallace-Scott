import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCode, FaPalette, FaProductHunt, FaShieldAlt, FaBullhorn, FaUserTie } from "react-icons/fa";

const jobListings = [
  { title: "Software Engineer", department: "Engineering", location: "Bangalore, India", description: "Build scalable applications, collaborate with cross-functional teams, and optimize performance.", icon: <FaCode /> },
  { title: "UI/UX Designer", department: "Design", location: "Remote", description: "Create intuitive designs, conduct user research, and enhance user experience across platforms.", icon: <FaPalette /> },
  { title: "Product Manager", department: "Product", location: "Bangalore, India", description: "Define product strategy, prioritize features, and work closely with engineering and design teams.", icon: <FaProductHunt /> },
  { title: "Cybersecurity Analyst", department: "Security", location: "Bangalore, India", description: "Monitor security threats, implement risk mitigation strategies, and ensure data protection.", icon: <FaShieldAlt /> },
  { title: "Marketing Specialist", department: "Marketing", location: "Remote", description: "Develop campaigns, manage social media, and analyze market trends to drive brand growth.", icon: <FaBullhorn /> },
  { title: "HR & Talent Acquisition", department: "Human Resources", location: "Bangalore, India", description: "Lead recruitment efforts, improve company culture, and manage employee engagement strategies.", icon: <FaUserTie /> },
];

const CareerSection = () => {
  return (
    <section className="career-section py-5">
      <Container>
        <div className=" mb-5">
          <h2 className="fw-bold display-5 text-dark">Join Our Team</h2>
          <p className="text-muted fs-5">Discover opportunities to innovate, create, and grow with us.</p>
        </div>
        <Row className="g-4">
          {jobListings.map((job, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="job-card text-center border-0">
                <Card.Body>
                  <div className="icon-wrapper">{job.icon}</div>
                  <h5 className="fw-bold job-title">{job.title}</h5>
                  <p className="text-muted job-meta">{job.department} • {job.location}</p>
                  <p className="text-muted job-description">{job.description}</p>
                  <Button variant="dark" className="rounded-pill px-4">Apply Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Styling */}
      <style>{`
        .career-section {
          background: linear-gradient(to bottom right, #f8f9fa, #e3eaf0);
          padding: 80px 0;
        }
        .job-card {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .job-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 65px;
          height: 65px;
          margin: 0 auto 15px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          font-size: 32px;
          color: #000;
        }
        .job-title {
          font-size: 18px;
          font-weight: 600;
          min-height: 50px;
        }
        .job-meta {
          font-size: 14px;
          font-weight: 500;
        }
        .job-description {
          font-size: 14px;
          line-height: 1.5;
          min-height: 60px;
        }
        @media (max-width: 768px) {
          .career-section {
            padding: 60px 15px;
          }
          .job-card {
            padding: 20px;
          }
          .job-title {
            font-size: 16px;
            min-height: 40px;
          }
          .job-description {
            font-size: 13px;
            min-height: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default CareerSection;
