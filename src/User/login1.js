import React, { Fragment, useState } from "react";
import Button from "../Components/Button";
import "./login.css";

const Login = (props) => {
  return (
    <Fragment>
      {/* <div className="btn-center"> */}
      <div className="login-btns">
        <Button
          name="Counter"
          onClick={() => {
            props.signin("counter");
          }}
        />
        <Button
          name="Todo"
          onClick={() => {
            props.signin("todo");
          }}
        />
      </div>
    </Fragment>
  );
};
export default Login;
