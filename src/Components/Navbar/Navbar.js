import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand href="#home">AM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Short Stories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Mia</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Dogs in the River
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              The Interlegion
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
