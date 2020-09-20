import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import Mia from "../Mia/Mia";
import StoryModal from "../StoryModal/StoryModal";
import "./Fiction.css";

function LaunchModal(props) {
  return (
    <Modal
      {...props}
      centered
      id="example-custom-modal-styling-title"
      dialogClassName="modal-100w"
    >
      <Modal.Header closeButton></Modal.Header>
      <Mia />
    </Modal>
  );
}
function Fiction() {
  const [modalShow, setModalShow] = useState(false);
  const [story, setStory] = useState("");

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const [currentStory, setStory] = useState("none");

  // const renderSwitch = (currentStory) => {
  //   switch (currentStory) {
  //     case "Mia":
  //       return <Mia />;
  //     default:
  //       return (
  //         <Container id="fiction-container">
  //           <Row>
  //             <Col>
  //               <Card
  //                 className="text-center fiction-card"
  //                 onClick={() => setStory("Mia")}
  //               >
  //                 MIA HERE
  //               </Card>
  //             </Col>
  //             <Col>
  //               <Card
  //                 className="text-center fiction-card"
  //                 onClick={() => setStory("Dogs")}
  //               >
  //                 DOGS IN THE RIVER HERE
  //               </Card>
  //             </Col>
  //             <Col>
  //               <Card className="text-center fiction-card">
  //                 THE INTERLEGION HERE
  //               </Card>
  //             </Col>
  //           </Row>
  //         </Container>
  //       );
  //   }
  // };

  // return renderSwitch(currentStory);
  return (
    <>
      <Container id="fiction-container">
        <Row>
          <Col sm={12} md={4} lg={4}>
            <Card
              className="text-center fiction-card"
              onClick={() => {
                setModalShow(true);
                setStory("Mia");
              }}
            >
              <h1 className="card-h1">Mia</h1>
              <hr />
              <p className="card-p">
                <em>
                  "Somewhere in her mind, water towers and bridges were blown to
                  smithereens."
                </em>
              </p>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Card
              className="text-center fiction-card"
              onClick={() => setStory("Dogs")}
            >
              <h1 className="card-h1">Dogs in the River</h1>
              <hr />
              <p className="card-p">
                <em>
                  "Roy no stop what are you doing"
                </em>
              </p>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Card className="text-center fiction-card">
              <h1 className="card-h1">The Interlegion</h1>
              <hr />
              <p className="card-p">
                <em>
                  "Pew pew pew pew pew"
                </em>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      <LaunchModal
        story={story}
        show={modalShow}
        onHide={() => setModalShow(false)}
        // dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      ></LaunchModal>
    </>
  );
}

export default Fiction;
