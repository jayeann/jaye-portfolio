import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const Work = () => {
  return (
    <div className="Work block">
      <h1>
        <span>Selected</span> Works
      </h1>

      <Row>
        <Col>
          <Card></Card>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
          <Card></Card>
        </Col>
      </Row>
    </div>
  );
};
export default Work;
