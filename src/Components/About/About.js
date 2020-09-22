import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Contact from "../Contact/Contact";
import "./About.css";

function About() {
  const randomAdjective = () => {
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

    // Choose and return random adjective from array
    return adjectives[Math.floor(Math.random() * adjectives.length)];
  };

  return (
    <Container fluid id="about-container">
      {/* main row containing everything on the about page */}
      <Row className="mx-5">
        {/* Main column containing everything on the about page */}
        <Col>
          {/* row for headshot, bio, and social media */}
          <Row>
            {/* col for headshot */}
            <Col lg={4} md={12} sm={12}>
              <Card className="p-2">
                <img
                  src={require("../../assets/images/Headshot.jpg")}
                  alt="headshot"
                  id="headshot"
                />
              </Card>
            </Col>
            {/* col for bio, social media */}
            <Col>
              {/* Row for bio */}
              <Row id="bio-row">
                <Col id="bio-col">
                  <Card id="bio-card">BIO HERE</Card>
                </Col>
              </Row>
              {/* Row for subscribe/social media */}
              <Row id="social-row">
                <Col id="social-col">
                  <Card id="social-card">SUBSCRIBE HERE</Card>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* Row for contact form */}
          <Row>
            {/* Col for contact form */}
            <Col lg={3}></Col>
            <Col lg={6}>
              <Contact />
            </Col>
            <Col lg={3}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
    // <Container fluid id="about-container">
    //   <Row className="my-4">
    //     <Col lg={4} md={12} sm={12} className="my-3">
    //       <img
    //         src={require("../../assets/images/Headshot.jpg")}
    //         alt="headshot"
    //         id="headshot"
    //       />
    //     </Col>
    //     <Col lg={8} md={12} sm={12}>
    //       <Row className="mt-4">
    //         <Col>
    //           <h3>
    //             Originally hailing from South Africa, Adele McKenna is an
    //             author, artist and freelance content creator residing in
    //             Philadelphia, PA, with her husband and three {randomAdjective()}{" "}
    //             cats.
    //           </h3>
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col lg={6} md={12} sm={12}>
    //           Enter your email to join the mailing list!
    //         </Col>
    //         <Col>
    //           <Form>
    //             <Form.Group controlId="formBasicEmail">
    //               <Form.Label>Email Address</Form.Label>
    //               <Form.Control type="email" placeholder="Enter email" />
    //               <Form.Text className="text-muted">
    //                 I'll never share your email with anyone else - promise!
    //               </Form.Text>
    //             </Form.Group>
    //           </Form>
    //         </Col>
    //       </Row>
    //     </Col>
    //   </Row>
    //   <Row className="mx-4 mb-4">
    //     <Col className="align-middle"></Col>
    //     <Col>
    //       <Contact />
    //     </Col>
    //     <Col></Col>
    //   </Row>
    // </Container>
  );
}

export default About;
