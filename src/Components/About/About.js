import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

function About() {
  const weeklyAdjective = () => {
    const adjectives = ["fat", "perfect", "real", "actual", "biological"];
    // console.log(Math.floor(Math.random(adjectives.length)));
    // console.log(Math.random(adjectives.length));
    console.log(Math.floor(Math.random() * adjectives.length - 1));
    return adjectives[Math.floor(Math.random() * adjectives.length - 1)];
  };

  return (
    <Container fluid id="about-container">
      <Row className="mt-4">
        <Col lg={4}></Col>
        <Col lg={8}>
          <h3>
            Originally hailing from South Africa, Adele McKenna is an author,
            artist and freelance content creator residing in Philadelphia, PA,
            with her husband and three {weeklyAdjective()} cats.
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
