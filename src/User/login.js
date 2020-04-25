import React, { Fragment } from "react";
import "./login.css";

const Login = (props) => {
  console.log(props);
  return (
    <Fragment>
      {props.name.map((val) => (
        <div className="title">
          This is {val} code. {props.note}.
        </div>
      ))}
    </Fragment>
  );
};

export default Login;
