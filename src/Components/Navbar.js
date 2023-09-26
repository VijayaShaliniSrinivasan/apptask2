import React from 'react';
import './Navbar.css'; // Import the CSS file
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  // Get the current location to highlight the active link
  const location = useLocation();

  return (
    <Navbar expand="lg" className="bg-dark navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          FETCH API
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navcontent">
            <Nav.Link className="mx-3" as={Link} to='/' activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to='/about' activeClassName="active">
              About
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to='/service' activeClassName="active">
              Services
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to='/login' activeClassName="active">
              Login
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to='/signup' activeClassName="active">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
