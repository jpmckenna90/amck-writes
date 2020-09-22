import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
// import MyNavbar from "../../Components/Navbar/Navbar";
import About from "../../Components/About/About";
import Mia from "../../Components/Mia/Mia";
import Fiction from "../../Components/Fiction/Fiction";
import Art from "../../Components/Art/Art";
import Blog from "../../Components/Blog/Blog";
import Contact from "../../Components/Contact/Contact";
import "./Home.css";

function Home() {
  const [currentPage, setPage] = useState("Fiction");
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const renderSwitch = (currentPage) => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Fiction":
        return <Fiction />;
      case "Art":
        return <Art />;
      case "Blog":
        return <Blog />;
      case "Contact":
        return <Contact />;

      default:
        return <div>default</div>;
    }
  };

  return (
    <Container fluid>
      <Header />
      {isDesktop ? (
        <Row id="nav-row">
          <Col
            className="text-center desktop-nav right-border my-1"
            onClick={() => setPage("About")}
          >
            <span>ABOUT</span>
          </Col>
          <Col
            className="text-center desktop-nav right-border my-1"
            onClick={() => setPage("Fiction")}
          >
            FICTION
          </Col>
          <Col
            className="text-center desktop-nav right-border my-1"
            onClick={() => setPage("Art")}
          >
            ART
          </Col>
          <Col
            className="text-center desktop-nav right-border my-1"
            onClick={() => setPage("Blog")}
          >
            BLOG
          </Col>
          <Col
            className="text-center desktop-nav right-border my-1"
            onClick={() =>
              window.open("https://honeyguts.bigcartel.com/", "_blank")
            }
          >
            SHOP
          </Col>
          <Col
            className="text-center desktop-nav my-1"
            onClick={() => setPage("About")}
          >
            CONTACT
          </Col>
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
      {renderSwitch(currentPage)}
    </Container>
  );
}

export default Home;
