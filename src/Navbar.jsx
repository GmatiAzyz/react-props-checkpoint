import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="shadow-sm sticky-top" style={{ backgroundColor: '#0f172a', padding: '0.8rem 1rem' }}>
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2 fw-bold text-white fs-4">
          <span style={{ fontSize: '1.8rem' }}>⚽</span>
          <span style={{ background: 'linear-gradient(45deg, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            FUTStars Showcase
          </span>
          <Badge bg="primary" className="ms-2 fs-6 pill">2026 Edition</Badge>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-3 fw-semibold">
            <Nav.Link href="#home" className="active text-white">Home</Nav.Link>
            <Nav.Link href="#players" className="text-light">Players</Nav.Link>
            <Nav.Link href="#teams" className="text-light">Teams</Nav.Link>
            <Nav.Link href="#stats" className="text-light">Statistics</Nav.Link>
          </Nav>
          <Form className="d-flex gap-2">
            <Form.Control
              type="search"
              placeholder="Search player..."
              className="me-2 rounded-pill bg-dark text-white border-secondary"
              style={{ paddingLeft: '1rem' }}
            />
            <Button variant="outline-primary" className="rounded-pill px-3">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
