import React from 'react';
import './Portfolio.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Portfolio = () => {
  const projects = [
    {
      title: 'Global Product Distribution',
      description:
        'Successfully distributed over 500 products to international clients with streamlined logistics.',
      image: 'path-to-project1.jpg',
      link: '#',
    },
    {
      title: 'Exporting Indian Handicrafts',
      description:
        'Supported local artisans by exporting handcrafted products to global markets.',
      image: 'path-to-project2.jpg',
      link: '#',
    },
    {
      title: 'Customized Sourcing Solutions',
      description:
        'Provided customized sourcing solutions for businesses across Asia and Europe.',
      image: 'path-to-project3.jpg',
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section" data-aos="zoom-in">
      <Container>
        <h2 className="section-title text-center">Our Work</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="portfolio-card">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
                <Card.Body>
                  <Card.Title className="portfolio-title">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="portfolio-description">
                    {project.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
