import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import caret from "../../../media/icons/caret.svg";
import flag from "../../../media/icons/flag.svg";
import love from "../../../media/icons/love (1).svg";
const Navigation = () => {
  return (
    <div className="w-90 navigation ">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand
            href="#"
            style={{ fontSize: 24, fontWeight: "600", color: "#5D6E82" }}
          >
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-items">
                Business
              </Nav.Link>
              <Nav.Link href="#link" className="nav-items new-item">
                New
              </Nav.Link>
              <Nav.Link href="#link" className="nav-items">
                <span
                  className="me-2"
                  style={{ fontSize: 14, fontWeight: 300, marginTop: "-10px" }}
                >
                  {" "}
                  |{" "}
                </span>
                Trips
              </Nav.Link>
              <Nav.Link href="#link" className="nav-items">
                <img src={love} alt="" />
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="nav-items"
                style={{ color: "red !important" }}
              >
                Log out
              </Nav.Link>
              <Nav.Link href="#link">
                <img src={flag} alt="" className="me-2" />
                <img src={caret} alt="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
