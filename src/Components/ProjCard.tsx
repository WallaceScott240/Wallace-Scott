import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = () => {
  return (
    <Card>
      {/* You can customize the image path based on your project structure */}
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>Description</Card.Text>
        <Card.Text>
          <strong>Technologies:</strong> <p>React</p>
        </Card.Text>
        <Button variant="primary" href='' target="_blank">
          View on GitHub
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
