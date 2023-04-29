import React from "react";
import "./RightNav.css"
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <h5>Login With</h5>
      <div className="my-2">
        <Button className="w-100 my-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button className="w-100" variant="outline-secondary">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div className="my-4">
        <h5>Find us on</h5>
        <ListGroup className="fw-semibold">
          <ListGroup.Item>
            {" "}
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>

      <div className="ads text-center p-4 text-white">
        <h3 className="fw-bold mb-3">Create an Amazing Newspaper</h3>
        <p>
          <small>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
          </small>
        </p>
        <Button variant="danger">
            Learn More
        </Button>
      </div>
    </div>
  );
};

export default RightNav;
