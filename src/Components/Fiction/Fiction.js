import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Mia from "../Mia/Mia";
import "./Fiction.css";

function Fiction() {
  const [currentStory, setStory] = useState("none");

  const renderSwitch = (currentStory) => {
    switch (currentStory) {
      case "Mia":
        return <Mia />;
      default:
        return (
          <Container id="fiction-container">
            <Row>
              <Col>
                <Card
                  className="text-center fiction-card"
                  onClick={() => setStory("Mia")}
                >
                  MIA HERE
                </Card>
              </Col>
              <Col>
                <Card
                  className="text-center fiction-card"
                  onClick={() => setStory("Dogs")}
                >
                  DOGS IN THE RIVER HERE
                </Card>
              </Col>
              <Col>
                <Card className="text-center fiction-card">
                  THE INTERLEGION HERE
                </Card>
              </Col>
            </Row>
          </Container>
        );
    }
  };

  return renderSwitch(currentStory);
  // <>
  //   <Container id="fiction-container">
  //     <Row>
  //       <Col>
  //         <Card
  //           className="text-center fiction-card"
  //           onClick={() => setStory("Mia")}
  //         >
  //           MIA HERE
  //         </Card>
  //       </Col>
  //       <Col>
  //         <Card
  //           className="text-center fiction-card"
  //           onClick={() => setStory("Dogs")}
  //         >
  //           DOGS IN THE RIVER HERE
  //         </Card>
  //       </Col>
  //       <Col>
  //         <Card className="text-center fiction-card">
  //           THE INTERLEGION HERE
  //         </Card>
  //       </Col>
  //     </Row>
  //   </Container>
  // </>
}

export default Fiction;
