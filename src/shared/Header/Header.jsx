import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className="fw-semibold">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee
          className="text-danger cursor-pointer"
          gradient={true}
          pauseOnHover={true}
          speed={100}
        >
          I can be a React component, multiple React components, or just some
          text.I can be a React component, multiple React components, or just
          some text.I can be a React component, multiple React components, or
          just some text.I can be a React component, multiple React components,
          or just some text.I can be a React component, multiple React
          components, or just some text.I can be a React component, multiple
          React components, or just some text.I can be a React component,
          multiple React components, or just some text.I can be a React
          component, multiple React components, or just some text.
        </Marquee>
      </div>

      <Navbar className="my-2" >
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <div>
            <img className="img-fluid mx-2" style={{ width: '3rem' }} src="https://i.ibb.co/HBbr8DM/User.png" alt="" />
            <Button variant="dark">Login</Button>
          </div> 
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
