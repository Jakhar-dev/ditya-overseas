import React from 'react';
import './Testimonials.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
//import mohit from '../assests/Images/Mohit.jpg';
import { Carousel } from 'react-bootstrap';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, Global Trade Co.',
      feedback:
        'Ditya Overseas has been instrumental in scaling our business internationally. Their expertise is unmatched.',
      image: './assests/Images/logo.jpg',
    },
    {
      name: 'Jane Smith',
      position: 'Founder, Local Goods Inc.',
      feedback:
        'The team at Ditya Overseas exceeded our expectations. Their logistics support is top-notch.',
      image: './assests/Images/logo.jpg',
    },
    {
      name: 'Rajiv Kapoor',
      position: 'Managing Director, Bright Exports',
      feedback:
        'We trust Ditya Overseas for all our product sourcing needs. Highly recommended!',
      image: './assests/Images/logo.jpg',
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <Container>
        <h2 className="section-title text-center">What Our Clients Say</h2>
        
          <Carousel>
            <Carousel.Item>
            <Row>
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="testimonial-card">
                <Card.Img
                  variant="top"
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <Card.Body>
                  <Card.Text className="testimonial-feedback">
                    "{testimonial.feedback}"
                  </Card.Text>
                  <Card.Title className="testimonial-name">
                    {testimonial.name}
                  </Card.Title>
                  <Card.Subtitle className="testimonial-position">
                    {testimonial.position}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>  
          </Carousel.Item>
          </Carousel>
        
      </Container>
    </section>
  );
};

export default Testimonials;
