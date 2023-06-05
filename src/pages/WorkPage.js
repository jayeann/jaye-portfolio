import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import CardWork from "../components/CardWork";
import SupremeCourt from "../assets/images/supreme-court.png";
import KiltonBiddit from "../assets/images/kilton-biddit.png";
import HrPortal from "../assets/images/hr-portal.png";
import Orbis from "../assets/images/orbis.png";
import Trendsight from "../assets/images/trendsight.png";
import Fdc from "../assets/images/fdc-visitor.png";
import Trendsforce from "../assets/images/trendsforce.png";

const WorkPage = () => {
  return (
    <Container className="Work block">
      <h1 className="text-orange">
        <span>Selected</span> Works
      </h1>
      <p>Here are a few projects I've worked on.</p>
      <br />
      <br />
      <Row>
        <Col>
          <CardWork
            width={50}
            img={SupremeCourt}
            altText="Supreme Court"
            title="Project Justice"
            text="ePayment System"
            url={"supreme-court"}
          />
          <CardWork
            width={50}
            img={Orbis}
            altText="Orbis"
            title="Orbis"
            text="Dashboard Analytics"
            url="orbis"
          />
        </Col>
        <Col>
          <CardWork
            width={50}
            img={KiltonBiddit}
            altText="Kilton Biddit"
            title="Biddit"
            text="Bidding Platform"
            url="biddit"
          />
          <CardWork
            width={50}
            img={Trendsight}
            altText="Trendsight"
            title="Trendsight"
            text="Customer Relationship Management"
            url="trendsight"
          />
          <CardWork
            width={50}
            img={Trendsforce}
            altText="Trendsforce"
            title="Trendsforce"
            text="Data Extractor"
            url="trendsforce"
          />
        </Col>
        <Col>
          <CardWork
            width={50}
            img={HrPortal}
            altText="UBX Portal"
            title="UBX Portal"
            text="Company Portal"
            url="hr-portal"
          />
          <CardWork
            width={50}
            img={Fdc}
            altText="Fdc"
            title="FDC"
            text="Visitor Management System"
            url="fdc"
          />
        </Col>
      </Row>
      <br />
      <br />
      <div>
        Want to learn more about my skills? <h5>See my resume</h5>
      </div>
      <Button>Resume</Button>
    </Container>
  );
};
export default WorkPage;
