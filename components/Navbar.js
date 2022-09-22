import React from "react";
import Image from "next/image";
import { Container, Navbar, Form, Button } from "react-bootstrap";
import { FiFilter } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import styles from "../styles/Home.module.css";

function Navigationbar() {
  return (
    <>
      <div>
        <Navbar style={{ boxShadow: "0px 6px 40px rgba(173, 173, 173, 0.25)" }}>
          <Container>
            <Navbar.Brand className="me-5">
              <Image
                src={"/images/Icon.png"}
                width="119"
                height="44"
                className=""
                alt=""
              />
            </Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: "507px", borderRadius: "23px" }}
              />
              <div className={styles.filter}>
                <FiFilter />
              </div>
            </Form>
            <Navbar.Toggle />
            <Navbar.Collapse
              className="justify-content-between align-items-center"
              style={{ marginLeft: "120px" }}
            >
              <div className="fs-4 text-secondary">
                <RiShoppingCartLine />
              </div>
              <div>
                <Button
                  className={`${styles.button} me-3`}
                  variant="outline-primary"
                >
                  Login
                </Button>
                <Button
                  className={`${styles.button} `}
                  variant="outline-primary"
                >
                  Sign Up
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navigationbar;
