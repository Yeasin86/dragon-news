import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => { 
  return (
    <Container className="mb-3">
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
    </Container>
  );
};

export default Header;
