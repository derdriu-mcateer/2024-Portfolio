import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaUser } from "react-icons/fa6"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { MdAlternateEmail } from "react-icons/md";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex align-items-center">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src='./Initial Logo.png' className="img-fluid logo" alt="brand" id="initial-logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse className=" justify-content-center align-items-center" id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto">
            <Nav.Link href="#about-me" className="nav-item"><FaUser />About</Nav.Link>
            <Nav.Link href="#recent-projects" className="nav-item"> <AiOutlineFundProjectionScreen />Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-item"> <MdAlternateEmail />Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation