import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import Mia from "../../Components/Mia/Mia";
import "./Home.css";

function Home() {
  return (
    <Container fluid>
      <Row id="home-row">
        <Col>
          <Row>
            <Header />
            <About />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
