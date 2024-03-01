import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Image, Navbar, Col, Container, Nav, NavDropdown, Row, Button } from 'react-bootstrap';
import { Instagram, Twitter, Facebook, Cart } from 'react-bootstrap-icons';


const NavBar = () => (
  <Container>

    <Navbar expand="lg">
      <Navbar.Brand href="#home"><Image src="/calvinsusielogo.webp" width={200}/></Navbar.Brand>
      <Col>
        <Image height="60px" src="/calvinsusiecar.webp"/>
        <u id="form"> <br/>Click here <br/>for Pick-Up <br/>Order Form</u>
      </Col>
      <Nav>
        <Nav.Link href="#" className="nav-item">Home</Nav.Link>
        <Nav.Link href="#" className="nav-item">Raw Food</Nav.Link>
        <Nav.Link href="#" className="nav-item">About</Nav.Link>
        <Nav.Link href="#" className="nav-item">Shop</Nav.Link>
        <Nav.Link href="#" className="nav-item">Blog</Nav.Link>
        <Nav.Link href="#" className="nav-item">Press</Nav.Link>
        <Nav.Link href="#" className="nav-item">Contact</Nav.Link>

        <Nav.Link href="#"><Cart/></Nav.Link>
        <NavDropdown/>
      </Nav>
    </Navbar>
  </Container>
);
const Main = () => (
  <Container fluid>
    <Col className="grad-background">
      <h1>Hawaii's Store For Healthy Pets</h1>
    </Col>
    <Col className="ms-3">
      <p>
        We are located in Kaimuki on Waialae Avenue in Honolulu, and on Uluniu Street in beautiful Kailua Town.

      </p>
      <p>We offer the largest selection of premium pet foods in all of Hawaii.

      </p>
      <p>Please come and visit us, and our animal-loving staff will do all they can to help you in any way possible.

      </p>
      <p>All profits from the sales of Calvin & Susie brand of products will go to Calvin & Susie Hawaii Animal Foundation. Please visit <u>CSHAF.org</u> for more information.</p>

      <p id="calvin"> #calvinandsusiefamily</p>
    </Col>

  </Container>
);
const Footer = () => (

  <Container>

    <Row id="icons" className="justify-content-center mb-3">
      <Col className="d-flex justify-content-center p-1">
        <Facebook className=" me-3 mb-1"/>
        <Twitter className=" me-3 mb-1"/>
        <Instagram className=" me-3 mb-1"/>
      </Col>
    </Row>


    <Col className="d-flex justify-content-center p-1">
      Subscribe and stay on top of our latest news and promotions
    </Col>
    <Row className="d-flex justify-content-center py-4">
      <Col sm="auto">
        <input className="me-2 form-control-sm" placeholder="Email" type="text" id="email"/>
      </Col>
      <Col sm="auto">
        <Button className="btn-sm" variant="dark">Join</Button>
      </Col>
    </Row>

    <Row className="mb-3">
      <Col>
        <strong>Where to Next</strong><br/>
        <br/>
        Raw Food<br/>
        About<br/>
        Shop<br/>
        Blog<br/>
        Press<br/>
        Contact<br/>
      </Col>
      <Col>
        <strong> Find us in Honolulu </strong><br/>
        <br/>
        3109 Waialae Avenue <br/> Honolulu, HI 96816<br/><br/>
        WAIALAE: <br/> Sunday: 10am - 5pm <br/> Monday: 10am - 5pm<br/> Tuesday: CLOSED <br/> Wednesday: 10am - 6pm <br/> Thursday: 10am - 6pm <br/> Friday: 10am - 6pm <br/> Saturday: 10am - 5pm
        <br/><br/>
        Phone: (808) 734-2320 <br/> Email: info@calvinandsusie.com
      </Col>
      <Col>
        <strong> Find us in Kailua </strong><br/> <br/>
        315 Uluniu St #105 <br/> Kailua, HI 96734<br/><br/>
        KAILUA: <br/> Sunday: 9am - 3pm <br/> Monday: 9am - 5pm <br/> Tuesday: 9am - 3pm <br/> Wednesday: 9am - 5pm<br/> Thursday: 9am - 3pm <br/> Friday: 9am - 5pm <br/> Saturday: 9am - 3pm<br/><br/>
        Phone: (808) 262-2320 <br/> Email: info@calvinandsusie.com
      </Col>
    </Row>

  </Container>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode><NavBar/><Main/><Footer/></StrictMode>);
