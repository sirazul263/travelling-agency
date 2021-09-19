import React from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import { ReactComponent as CaretIcon } from "../../../media/icons/caret.svg";
import { ReactComponent as Arrow } from "../../../media/icons/double-arrow.svg";
import { ReactComponent as CalenderIcon } from "../../../media/icons/calender.svg";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchSection = () => {
  return (
    <Container className="my-4 ">
      <h3 className="text-dark fw-bold mb-5">
        Welcome, Find a flexible flight for your next trip{" "}
      </h3>
      <div className="search">
        <div className="d-flex mb-4">
          <div className="dropdown me-4">
            <Dropdown className="border-end border-end-2 border-end-black h-100">
              <Dropdown.Toggle
                id="dropdown-basic"
                className="shadow-none border-0 h-100 text-dark rounded-0 bg-transparent text-brand-primary fw-medium"
                style={{ fontSize: "12px" }}
              >
                Return
                <CaretIcon className="ms-4" style={{ height: 8, width: 8 }} />
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ fontSize: "12px" }}>
                <Dropdown.Item href="#/action-1">One-way</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Return</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Multi-city</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Trip-Builder</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="dropdown me-4">
            <Dropdown className="border-end border-end-2 border-end-black h-100">
              <Dropdown.Toggle
                id="dropdown-basic"
                className="shadow-none border-0 h-100 text-dark rounded-0 bg-transparent text-brand-primary fw-medium"
                style={{ fontSize: "12px" }}
              >
                1 Adult
                <CaretIcon className="ms-4" style={{ height: 8, width: 8 }} />
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ fontSize: "12px" }}>
                <Dropdown.Item href="#/action-1">One-way</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Return</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Multi-city</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Trip-Builder</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="dropdown">
            <Dropdown className="border-end border-end-2 border-end-black h-100">
              <Dropdown.Toggle
                id="dropdown-basic"
                className="shadow-none border-0 h-100 text-dark rounded-0 bg-transparent text-brand-primary fw-medium"
                style={{ fontSize: "12px" }}
              >
                Economy
                <CaretIcon className="ms-4" style={{ height: 8, width: 8 }} />
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ fontSize: "12px" }}>
                <Dropdown.Item href="#/action-1">One-way</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Return</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Multi-city</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Trip-Builder</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="search-box">
          <Row className="g-2">
            <Col style={{ width: "204px", height: "56px" }}>
              <Form.Group className="me-2" controlId="">
                <Form.Control type="text" placeholder="From +" />
              </Form.Group>
            </Col>
            <Col xs={1}>
              <Form.Group className="me-2" controlId="">
                <Arrow style={{ width: "40px", height: "40px" }}></Arrow>
              </Form.Group>
            </Col>
            <Col style={{ width: "204px", height: "56px" }}>
              <Form.Group className="me-2" controlId="">
                <Form.Control type="text" placeholder="To?" />
              </Form.Group>
            </Col>
            <Col style={{ width: "204px", height: "56px" }}>
              <Form.Group className="me-2" controlId="">
                <CalenderIcon></CalenderIcon>
              </Form.Group>
            </Col>
            <Col style={{ width: "204px", height: "56px" }}>
              <Form.Group className="me-2" controlId="">
                <Form.Control type="date" placeholder="From +" />
              </Form.Group>
            </Col>
            <Col xs={1}>
              <Button variant="primary" type="submit">
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ fontSize: "12px" }}
                ></FontAwesomeIcon>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default SearchSection;
