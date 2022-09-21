import React, { useState } from "react";
import style from "../styles/Login.module.css";
import { ButtonGroup, ToggleButton, Form, Button } from "react-bootstrap";
import Image from "next/image";

function Login() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("Customer");
  const radios = [
    { name: "Cutomer", value: "Cutomer" },
    { name: "Seller", value: "Seller" },
  ];
  return (
    <div lg={12} md={12} className="Login">
      <div
        className=" d-flex justify-content-center "
        style={{ marginTop: "120px" }}
      >
        <Image
          className="justify-content-center"
          style={{ objectFit: "cover" }}
          src={"/images/Icon.png"}
          alt=""
          width={135}
          height={50}
        />
      </div>
      <h5 className="mt-3 text-center">Please sign up with your account</h5>
      <div className="d-flex justify-content-center">
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              deffaultValue={radio.value}
              className=""
              style={{ width: "123px" }}
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={"outline-primary"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div className="col-6 mx-auto mt-4">
        <Form className="col-8 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control size="lg" type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control size="lg" type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Control size="lg" type="phone" placeholder="Phone Number" />
          </Form.Group>
          {radioValue === "Seller" ? (
            <Form.Group className="mb-3" controlId="formBasicStoreName">
              <Form.Control size="lg" type="text" placeholder="Store Name" />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control size="lg" type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary btn-lg w-100" type="submit">
            Submit
          </Button>
          <p className="text-center mt-3">
            Already have a Tokopedia account? Login{" "}
          </p>
        </Form>
      </div>
      <div></div>
    </div>
  );
}

export default Login;
