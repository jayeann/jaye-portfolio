import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

import JayeBnW from "../assets/images/jaye_bnw.jpeg";

const About = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={6}>
          <div className="summary">
            <h6 className="summary-greet"> Hi, I'm</h6>
            <h1 className="summary-title">
              Jaye Ann
              <br />
              Tagoctoc.
            </h1>
            <p className="summary-description">
              I'm passionate about designing and building applications that
              people will love to use and enjoy.
            </p>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <Image src={JayeBnW} width={600} height={600} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={6}>
          <div className="Career block">
            <h3>My Career so far</h3>
            <p>
              I'm lucky to have started my career at Trends & Technologies. as a
              Software Developer. I discovered a lot of different technologies
              and amazing people. I became part of the business analytics and
              innovations team. I also discovered a new skill that will be a
              huge help to the products that we're developing and the future
              apps that we'll develop soon.
            </p>
            <p>
              After more than 2 years, I joined FPS, Inc . as a Frontend
              Developer. I became a part of a team of 5 for a big company. We
              contribute to develop a platform prototype that would really help
              the company.
            </p>
            <p>
              After some time, I recently joined UBX as a Software Engineer.
              I've learned many things and enjoyed creating different platforms
              for our clientsand collaborating with my colleagues.
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
export default About;
