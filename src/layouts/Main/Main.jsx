import React from "react";
import Header from "../../shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../../shared/LeftNav/LeftNav";
import RightNav from "../../shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
