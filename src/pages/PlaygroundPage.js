import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Checklist from "../components/Checklist";
import Counter from "../components/Counter";
import SearchFruit from "../components/SearchFruit";

const PlaygroundPage = () => {
  return (
    <div className="Work block">
      <h1>
        Play<span>ground</span>
      </h1>

      <Row>
        <Col>
          <Card>
            <Checklist />
          </Card>
        </Col>
        <Col>
          <Card>
            <SearchFruit />
          </Card>
        </Col>
        <Col>
          <Card>
            <Counter />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default PlaygroundPage;
