import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import getISOWeek from "date-fns";
import getISOWeek from "date-fns/getISOWeek";
import getWeek from "date-fns/getWeek";
import "./About.css";

function About() {
  const weeklyAdjective = () => {
    const adjectives = [
      "fat",
      "perfect",
      "real",
      "actual",
      "biological",
      "attractive",
      "bald",
      "beautiful",
      "chubby",
      "clean",
      "dazzling",
      "drab",
      "elegant",
      "fancy",
      "fit",
      "flabby",
      "glamorous",
      "gorgeous",
      "handsome",
      "long",
      "magnificent",
      "muscular",
      "plain",
      "plump",
      "quaint",
      "scruffy",
      "shapely",
      "short",
      "skinny",
      "stocky",
      "ugly",
      "unkempt",
      "unsightly",
      "alive",
      "careful",
      "clever",
      "dead",
      "easy",
      "famous",
      "gifted",
      "hallowed",
      "helpful",
      "important",
      "inexpensive",
      "mealy",
      "mushy",
      "odd",
      "powerful",
      "rich",
      "shy",
      "jolly",
      "puny",
      "chonky",
    ];

    let result = getWeek(new Date(2020, 1, 1));
    return adjectives[result];
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
