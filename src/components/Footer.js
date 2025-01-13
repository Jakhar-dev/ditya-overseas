import React from 'react';
import './Footer.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaArrowUp,
} from 'react-icons/fa';

const Footer = () => {
  // Scroll-to-Top Handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-start footer-top">
          {/* Branding Section */}
          <Col md={4} className="footer-brand">
            <h5>Ditya Overseas</h5>
            <p>Connecting Businesses Globally</p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="footer-links">
            <h6>Quick Links</h6>
            <a href="#about">About Us</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </Col>

          {/* Newsletter Section */}
          <Col md={4} className="footer-newsletter">
            <h6>Stay Updated</h6>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <Form>
              <Form.Group controlId="newsletterEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
              </Form.Group>
              <Button variant="primary" className="newsletter-btn">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Social Media and Copyright */}
        <Row className="footer-bottom align-items-center">
          <Col md={6} className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </Col>
          <Col md={6} className="text-end footer-copyright">
            <p>© {new Date().getFullYear()} Ditya Overseas. All rights reserved.</p>
          </Col>
        </Row>

        {/* Scroll-to-Top Button 
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>*/}
      </Container>
    </footer>
  );
};

export default Footer;
