import React from "react";
import { Col } from "react-bootstrap";

const Cards = ({ info }) => {
  const { img, title, top, bottom, description } = info;
  return (
    <Col
      xs={6}
      sm={4}
      md={3}
      className="d-flex align-items-center justify-content-center"
    >
      <div
        className="place-card"
        style={{ boxShadow: "0px 6px 32px rgba(0, 0, 0, 0.06)" }}
      >
        <div className="card-img">
          <img
            src={img}
            className="mb-2"
            alt=""
            style={{
              height: 311,
              maxWidth: 304,
              width: "100%",
            }}
          />
        </div>
        <div className="card-wrapper">{/* <span>{top}</span> */}</div>
      </div>
    </Col>
  );
};

export default Cards;
