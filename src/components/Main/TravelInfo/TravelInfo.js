import React from "react";
import { Container, Row } from "react-bootstrap";
import image1 from "../../../media/card (2).png";
import image2 from "../../../media/card (1).png";
import image3 from "../../../media/card (4).png";
import image4 from "../../../media/card (3).png";
import Cards from "./Cards";
const TravelInfo = () => {
  const info = [
    {
      id: 1,
      img: image1,
      title: "Delhi Events 2022",
      description: "A small description goes on",
      top: "Open",
      bottom: ".Important",
    },
    {
      id: 2,
      img: image2,
      title: "Top places to visit in Maldives",
      description: "A small description goes on",
      top: "Restrictions",
      bottom: ".Important",
    },
    {
      id: 3,
      img: image3,
      title: "Option without Description here",
      description: "",
      top: "Covid Travel updates",
      bottom: ".2 mins read",
    },
    {
      id: 4,
      img: image4,
      title: "Delhi Events 2022",
      description: "A small description goes on",
      top: "Open",
      bottom: ".2 mins read",
    },
  ];
  return (
    <Container className="">
      <h4 className="text-dark fw-bold mb-3">
        Countries you can travel to right now{" "}
      </h4>
      <div className="d-flex me-4 justify-content-between align-items-center">
        <p className="text-brand-primary">
          {" "}
          Popular destinations open to visitors from your country
        </p>
        <button className="button-see-all"> See all</button>
      </div>
      <div className="hotel-card">
        <Row>
          {info.map((Cardinfo) => (
            <Cards info={Cardinfo} key={info.id}>
              {" "}
            </Cards>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default TravelInfo;
