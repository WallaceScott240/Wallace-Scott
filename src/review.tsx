import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ReviewSection = () => {
  const textStyle = {
    color: "white",
  };
  const reviews = [
    {
      name: "Pritham",
      course: "React Quickstart",
      review:
        "Wallace Scott's React course is exceptional. Clear instruction, practical projects, and strong support create an optimal learning environment. Highly recommend!",
    },
    {
      name: "Anish Kholkar",
      course: "Flutter Bootcamp",
      review:
        "The Flutter course is outstanding. Engaging lessons, hands-on projects, and excellent mentorship make learning Flutter enjoyable and effective. Highly recommended!",
    },
    {
      name: "Glsten",
      course: "Web Design Fundamentals",
      review:
        "The web design course is transformative. Clear instructions, real-world projects, and a supportive environment. Elevate your design skills with this excellent learning experience!",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <Row xs={1} md={2} lg={3}>
          {reviews.map((review, index) => (
            <Col key={index} className="mb-4">
              <Card
                style={{
                  backgroundColor: "#355E93",
                  boxShadow: "0px 0px 1.5px 0px #355E93",
                  borderRadius: "10px",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Title>{review.name}</Card.Title>
                  <Card.Subtitle className="mb-2 " style={{ color: "#FFC107" }}>
                    {review.course}
                  </Card.Subtitle>
                  <Card.Text>{review.review}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ReviewSection;
