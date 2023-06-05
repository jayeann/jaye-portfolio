import { Row, Col, Card } from "react-bootstrap";

import GmailIcon from "../assets/icons/gmail-icon.png";
import LinkedinIcon from "../assets/icons/linkedin-icon.png";

const Footer = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="footer">
        <h3>Feel free to say hi :)</h3>
        <p className="footer-description">
          I’d love to hear from you! I am available to work on your projects or
          be part of your company. I'm excited to make the leap, continue
          refining my skills and bring your ideas to life.
        </p>
        <Row className="pt-4">
          <Col lg={6} xs={12}>
            <Card className="card-shadow">
              <Card.Img src={GmailIcon} />
              <Card.Title>jgtagoctoc@gmail.com</Card.Title>
              <Card.Text>Email Me</Card.Text>
            </Card>
          </Col>
          <Col lg={6} xs={12}>
            <Card className="card-shadow">
              <Card.Img src={LinkedinIcon} />
              <Card.Title>linkedin.com/in/jayeanntagoctoc/ </Card.Title>
              <Card.Text>Visit Me</Card.Text>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
