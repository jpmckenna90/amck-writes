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
            <Col>ABOUT</Col>
            <Col>FICTION</Col>
            <Col>ART</Col>
            <Col>BLOG</Col>
            <Col>SHOP</Col>
            <Col>CONTACT</Col>
          </Row>
        ) : (
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav >
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

  // <Container>
  // <Row>
  //   <Col>ABOUT</Col>
  //   <Col>FICTION</Col>
  //   <Col>ART</Col>
  //   <Col>BLOG</Col>
  //   <Col>SHOP</Col>
  //   <Col>CONTACT</Col>
  // </Row>
  /* <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Row>
              <Col>
                <Nav.Link href="About" className="nav-links">
                  About
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="Fiction" className="nav-links">
                  Fiction
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="Art" className="nav-links">
                  Art
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="Blog" className="nav-links">
                  Blog
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="Shop" className="nav-links">
                  Shop
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="Contact" className="nav-links">
                  Contact
                </Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */
  // </Container>
  // );
}

export default MyNavbar;
