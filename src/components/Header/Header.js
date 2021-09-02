import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">  Udemy Clone</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                        <Nav.Link href="/learning">My Learning</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;