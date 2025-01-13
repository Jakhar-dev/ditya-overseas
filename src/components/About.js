import React from 'react';
import './About.css'; // Import the styles for this section
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Image
              src="path-to-your-image.jpg"
              alt="About Ditya Overseas"
              fluid
              rounded
            />
          </Col>
          <Col md={6}>
            <h2 className="section-title">About Ditya Overseas</h2>
            <p className="about-text">
              Welcome to Ditya Overseas! We specialize in delivering high-quality products and services to our clients. Our goal is to ensure satisfaction through excellent craftsmanship, innovative designs, and unmatched customer support.
            </p>
            <p className="about-text">
              <strong>Mission:</strong> To bridge global markets with exceptional products and services that exceed expectations.
            </p>
            <p className="about-text">
              <strong>Vision:</strong> To become a trusted partner for businesses worldwide by consistently delivering value.
            </p>
            <Button className="btn btn-primary" variant="primary" href="#contact">
              Get in Touch
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
