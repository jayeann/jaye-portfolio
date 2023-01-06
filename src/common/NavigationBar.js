import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand to="#home">J.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/work">
              WORK
            </Nav.Link>
            <Nav.Link as={Link} to="/playground">
              PLAYGROUND
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              ABOUT ME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
