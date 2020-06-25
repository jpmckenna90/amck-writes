import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <Container fluid>
      <Row id="home-row" className="align-items-center">
        <Col>
          <Row >
            <Col className="text-center"><Link to="/long-form"><img src="https://via.placeholder.com/500x600?text=Long-Form"></img></Link></Col>
            <Col className="text-center"><Link to="/short-form"><img src="https://via.placeholder.com/500x600?text=Short-Form"></img></Link></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
