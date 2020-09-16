import React, { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Container, Col, Row } from "react-bootstrap";
import "./Navbar.css";

function MyNavbar() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Container fluid>
      <div>
        {isDesktop ? (
          <Row>
            <Col className="text-center desktop-nav right-border my-1">
              ABOUT
            </Col>
            <Col className="text-center desktop-nav right-border my-1">
              FICTION
            </Col>
            <Col className="text-center desktop-nav right-border my-1">ART</Col>
            <Col className="text-center desktop-nav right-border my-1">
              BLOG
            </Col>
            <Col className="text-center desktop-nav right-border my-1">
              SHOP
            </Col>
            <Col className="text-center desktop-nav my-1">CONTACT</Col>
          </Row>
        ) : (
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="About" className="nav-links">
                  About
                </Nav.Link>

                <Nav.Link href="Fiction" className="nav-links">
                  Fiction
                </Nav.Link>

                <Nav.Link href="Art" className="nav-links">
                  Art
                </Nav.Link>

                <Nav.Link href="Blog" className="nav-links">
                  Blog
                </Nav.Link>

                <Nav.Link href="Shop" className="nav-links">
                  Shop
                </Nav.Link>

                <Nav.Link href="Contact" className="nav-links">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )}
      </div>
    </Container>
  );
}

export default MyNavbar;
