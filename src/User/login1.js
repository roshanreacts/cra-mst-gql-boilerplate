import React, { Fragment, useState } from "react";
import Button from "../Components/Button";
import "./login.css";
import Header from "../Components/header";

const Login = (props) => {
  return (
    <Fragment>
      <Header>
        <div>This is Header</div>
      </Header>
      <div className="btn-center padding">
        <div>This is Login</div>
        <Button
          name="Login"
          onClick={() => {
            props.signin();
          }}
        />
      </div>
    </Fragment>
  );
};
export default Login;
