import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import SupremeCourt from "../assets/images/supreme-court.png";
import KiltonBiddit from "../assets/images/kilton-biddit.png";
import HrPortal from "../assets/images/hr-portal.png";
import Orbis from "../assets/images/orbis.png";
import Trendsight from "../assets/images/trendsight.png";
import Fdc from "../assets/images/fdc-visitor.png";
import Trendsforce from "../assets/images/trendsforce.png";

const WorkPage = () => {
  return (
    <div className="Work block">
      <h1>
        <span>Selected</span> Works
      </h1>
      <p>Here are a few projects I've worked on.</p>

      <Row>
        <Col>
          <Card className="card-shadow">
            <Card.Img
              className="mx-auto"
              width={50}
              src={SupremeCourt}
            ></Card.Img>
          </Card>
          <Card className="card-shadow">
            <Card.Img className="mx-auto" width={50} src={Orbis}></Card.Img>
          </Card>
        </Col>
        <Col>
          <Card className="card-shadow">
            <Card.Img
              className="mx-auto"
              width={50}
              src={KiltonBiddit}
            ></Card.Img>
          </Card>
          <Card className="card-shadow">
            <Card.Img
              className="mx-auto"
              width={50}
              src={Trendsight}
            ></Card.Img>
          </Card>
          <Card className="card-shadow">
            <Card.Img
              className="mx-auto"
              width={50}
              src={Trendsforce}
            ></Card.Img>
          </Card>
        </Col>
        <Col>
          <Card className="card-shadow">
            <Card.Img className="mx-auto" width={50} src={HrPortal}></Card.Img>
          </Card>
          <Card className="card-shadow">
            <Card.Img className="mx-auto" width={50} src={Fdc}></Card.Img>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default WorkPage;
