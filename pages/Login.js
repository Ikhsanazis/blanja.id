import React, { useState } from "react";
import style from "../styles/Login.module.css";
import { ButtonGroup, ToggleButton, Form, Button } from "react-bootstrap";
import Image from "next/image";

function Login() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    { name: "Cutomer", value: "1" },
    { name: "Seller", value: "2" },
  ];
  return (
    <div lg={12} md={12} className="Login">
      <div
        className=" d-flex justify-content-center "
        style={{ marginTop: "100px" }}
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
      <h5 className="mt-3 text-center">Please login with your account</h5>
      <div
        className="d-flex justify-content-center"
        style={{ margin: "50px 0px  40px 0px " }}
      >
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              className={style.button} //   style={{ width: "123px" }}
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              //   variant={"outline-primary"}
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
      <div className={style.form}>
        <Form className=" mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="border-primary"
              size="lg"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className="border-primary"
              size="lg"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <p className="text-end">Forget Passwor?</p>
          <Button
            type="submit"
            className="w-100 btn-lg"
            style={{ borderRadius: "25px", backgroundColor:`#273AC7` }}
          >
            Submit
          </Button>
          <p className="text-center mt-3">
            Don{`'`}t have a Blanja account? Register
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
