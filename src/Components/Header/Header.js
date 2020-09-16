import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Row className="rellax" id="header-container">
      <Col>
        <h1 className="header text-center">Adele McKenna</h1>
      </Col>
    </Row>
  );
}

export default Header;
