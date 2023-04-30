import moment from "moment/moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import MenuBar from "../../shared/MenuBar/MenuBar";

const CategoryNews = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  const slicedParagraph = details.split(" ").slice(0, 30).join(" ");

  return (
    <div>
      <Card className="mb-4">
        <Card.Header>
          {author && (
            <div className="d-flex justify-content-between align-items-center">
              {/* img-holder */}
              <div className="d-flex align-items-center">
                <div className="me-3">
                  {author.img ? (
                    <Image
                      style={{ height: "40px" }}
                      className=""
                      src={author.img}
                      roundedCircle
                    />
                  ) : (
                    <Image
                      style={{ height: "40px" }}
                      className="dummy-author"
                      src="https://i.ibb.co/HBbr8DM/User.png"
                      roundedCircle
                    />
                  )}
                </div>

                {/* author name and publish date */}
                <div className="fw-semibold">
                  <p className="m-0">{author.name}</p>
                  <p className="m-0">
                    <small>
                      {moment(author.published_date).format("yyyy-MM-DD")}
                    </small>
                  </p>
                </div>
              </div>
              <div>
                <FaRegBookmark className="mx-2" />{" "}
                <FaShareAlt className="mx-2" />
              </div>
            </div>
          )}
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {
              <p>
                {slicedParagraph} ...<Link to={`/news/${_id}`}>Read More</Link>
              </p>
            }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="d-flex justify-content-between">
            <div className="">
              <Rating
                readonly
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar className="text-warning" />}
                placeholderSymbol={<FaStar className="text-warning" />}
                fullSymbol={
                    <FaStar className="text-warning" />
                }
              />
              <span> {rating.number}</span>
            </div>
            <p>
              {" "}
              <FaEye /> {total_view}
            </p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CategoryNews;
