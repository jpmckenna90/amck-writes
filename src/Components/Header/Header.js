import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";


function Header() {
  
  
  return (
    <Container fluid id="header-container">
      <Row className="rellax">
        <Col>
          <h1 className="header text-center">Adele McKenna</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
