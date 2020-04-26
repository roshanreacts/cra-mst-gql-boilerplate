import React, { Fragment, useState, useEffect } from "react";
import "./login.css";

import Button from "../Components/Button";

const Login = (props) => {
  const [surp, setSurp] = useState(null);
  return (
    <Fragment>
      {props.name.map((val, id) => (
        <div key={id} className="title">
          <div>
            This is {val} code. {props.note}.
          </div>
          <Button
            onClick={() => {
              setSurp(val);
            }}
            name={val}
          />
          {surp === val && <Surprise val={val} />}
        </div>
      ))}
    </Fragment>
  );
};

const Surprise = (props) => {
  const [Name, setName] = useState(null);

  // ComponentDidMount
  useEffect(() => {
    setName(props.val.toUpperCase());
  }, []);

  useEffect(() => {
    console.log(Name);
  }, [Name]);

  return <div>Hi {Name}, Surprise</div>;
};

export default Login;
