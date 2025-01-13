import React from 'react';
import './Services.css'; // Import styles for this section
import { Container, Row, Col, Card } from 'react-bootstrap';
import icon1 from '..//assests/Images/exportSol.jfif';
import icon2 from '..//assests/Images/logistic.jfif';
import icon3 from '..//assests/Images/sourcing.jfif';

const Services = () => {
  const services = [
    {
      icon: icon1,
      title: 'Export Solutions',
      description: 'We provide seamless export solutions to connect your business to global markets.',
    },
    {
      icon: icon3,
      title: 'Product Sourcing',
      description: 'Our team helps you source high-quality products tailored to your requirements.',
    },
    {
      icon: icon2,
      title: 'Logistics Support',
      description: 'Comprehensive logistics services to ensure timely and safe deliveries.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <Container>
        <h2 className="section-title text-center">Our Services</h2>
        <p className="section-subtitle text-center">
          Explore the range of services we offer to empower your business.
        </p>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="service-card">
                <Card.Img
                  variant="top"
                  src={service.icon}
                  alt={service.title}
                  className="service-icon"
                />
                <Card.Body>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
