import React from 'react';
import { Container, Button } from 'react-bootstrap';

const ContentSection = () => {
  return (
    <Container fluid className="mt-5 px-3 px-md-5 d-flex align-items-center" style={{ height: '100px' }}>
      <div className="w-100 position-relative overflow-hidden rounded-4 d-flex align-items-center" style={{ height: '100px', background: 'url(https://images.pexels.com/photos/30374507/pexels-photo-30374507/free-photo-of-black-and-white-houses-by-the-norwegian-coast.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load) center/cover no-repeat' }}>
        <div className="text-white ps-4" style={{ flex: 1, fontSize: '14px' }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </div>
        <div className="pe-4">
          <Button variant="light" className="fw-bold rounded-pill px-4 py-2 d-flex align-items-center">
            Lorem Ipsum <span className="ms-2">→</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ContentSection;
