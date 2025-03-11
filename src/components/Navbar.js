import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assests/Images/logo.jpg' // Import logo image
import "./Navbar.css"; // External CSS for advanced styling

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          <img src={logo} alt="Ditya Overseas Logo" width="160" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav-links">
            <Nav.Link href="#home" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-item">
              About Us
            </Nav.Link>
            <Nav.Link href="#products" className="nav-item">
              Products
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
