import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LeftNav.css";
import EditorsInsights from "../../pages/News/News/EditorsInsights/EditorsInsights";
import { Card, Col, Row } from "react-bootstrap";

import first from "../../assets/1.png"
import second from "../../assets/2.png"
import third from "../../assets/3.png"
const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dragon-news-server-yeasin86.vercel.app/categories")
      .then((result) => result.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="">
      <h4>All Category</h4>
      <div className="mt-5">
        {categories.map((category) => (
          <p className="" key={category.id}>
            <NavLink
              to={`/category/${category.id}`}
              className={`"w-100 text-center p-4 text-decoration-none text-secondary fw-semibold ${({
                isActive,
              }) => (isActive ? "active" : "default")}`}
            >
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
      <div className="mt-4">
        <Row xs={1} lg={1} className="g-3">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LeftNav;
