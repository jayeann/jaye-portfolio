import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

import JayeBnW from "../assets/images/jaye_bnw.jpeg";

const AboutPage = () => {
  return (
    <Container className="pb-5">
      <Row className="align-items-center">
        <Col xs={12} lg={7}>
          <div className="d-flex justify-content-center">
            <div className="summary">
              <h6 className="summary-greet"> Hi, I'm</h6>
              <h1 className="summary-title text-orange">
                Jaye Ann
                <br />
                Tagoctoc.
              </h1>
              <p className="summary-description">
                I'm passionate about designing and building applications that
                people will love to use and enjoy.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <Image
            className="image-float"
            src={JayeBnW}
            width={600}
            height={600}
          />
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col xs={12} lg={6}>
          <div className="Career block">
            <h3>My Career so far</h3>
            <p>
              I started my career at Trends & Technologies as a software
              developer. I discovered a lot of different technologies and
              amazing people. I became part of the business analytics and
              innovation team. I also learned a new skill that will be extremely
              beneficial to the products we create and the future apps we plan
              to create.
            </p>
            <p>
              After more than 2 years, I joined FPS, Inc., as a frontend
              developer. I became part of a team of five for a big company. We
              developed a platform prototype that would really help
              organizations make smarter business decisions and reinforce
              relationships with customers.
            </p>
            <p>
              After some time, I joined UBX as a software engineer. I've learned
              many things and enjoyed creating different platforms for our
              clients and collaborating with my colleagues.
            </p>
            <p>
              I've been working for almost 5 years now as a developer. Over the
              years, I improved my coding skills with the help of various
              people, shaping me into what I am today as a developer.
            </p>
            <br />
            <h6>Keep growing! Keep acquiring new skills!</h6>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <Row>
            <Col>
              <div className="skills">
                <h1 className="text-orange">React</h1>
                <h1 className="skills-thin ">Front-end</h1>
                <h1 className="text-orange">Redux</h1>
                <h1 className="skills-thin">Git</h1>
              </div>
            </Col>
            <Col>
              <div className="skills">
                <h1 className="skills-thin">Figma</h1>
                <h1 className="text-orange">Prototyping</h1>
                <h1 className="text-orange">UI/UX Design</h1>
                <h1 className="skills-thin">Branding</h1>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutPage;
