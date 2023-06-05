import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import MiniJaye from "../assets/images/mini-jaye.png";

const Home = () => {
  return (
    <Container className="Home pt-5 pb-5 ">
      <Row className="align-items-center">
        <Col lg={7} xs={12}>
          <div className="d-flex justify-content-center">
            <div className="summary">
              <h6 className="summary-greet pt-5"> Hello there!</h6>
              <div className="summary-title">
                I'm <span className="summary-title-text"> Jaye Ann.</span>
              </div>
              <p className="summary-description">
                Frontend Developer & UI/UX Designer
              </p>
            </div>
          </div>
        </Col>
        <Col lg={5} xs={12}>
          <div className="d-flex justify-content-center">
            <Image
              className="wobble-hor-bottom p-3"
              src={MiniJaye}
              width={400}
              height={400}
            />
          </div>
        </Col>
      </Row>
      <span className="scroll-btn">
        <span className="mouse">
          <span></span>
        </span>
        <p>scroll me</p>
      </span>
    </Container>
  );
};
export default Home;
