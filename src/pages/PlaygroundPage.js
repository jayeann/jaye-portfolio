import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Checklist from "../components/Checklist";
import Counter from "../components/Counter";
import SearchFruit from "../components/SearchFruit";

const PlaygroundPage = () => {
  return (
    <Container className="Work block">
      <h1 className="text-orange">
        Play<span>ground</span>
      </h1>
      <p>Learning by doing and having fun</p>
      <br />
      <br />
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
    </Container>
  );
};
export default PlaygroundPage;
