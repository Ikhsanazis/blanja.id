import React from "react";
import { Nav } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { ChevronRight } from "react-bootstrap-icons";

function Navigationbar() {
  return (
    <>
      <Nav
        className="justify-content-start mt-5 text-secondary"
        activeKey="/home"
      >
        <Nav.Item className="d-flex">
          <Nav.Link className="text-secondary" href="/home">
            Active
          </Nav.Link>
          <ChevronRight className=" h-100 align-items-center" />
        </Nav.Item>
        <Nav.Item className="d-flex">
          <Nav.Link className="text-secondary" href="/home">
            Active
          </Nav.Link>
          <ChevronRight className=" h-100 align-items-center" />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary" eventKey="link-2">
            Link
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navigationbar;
