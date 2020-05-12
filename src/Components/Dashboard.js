import React, { Fragment, useState } from "react";
import Button from "../Components/Button";
import "./Dashboard.css";
import Header from "../Components/header";

const Dashboard = (props) => {
  const [c, setC] = useState(2);
  return (
    <Fragment>
      <Header>This is Header</Header>
      {props.name}

      <div className="btn-center">
        <div className="cnt-margin"> {c}</div>

        <div>
          <Button
            name="plus"
            className="bgcolor1"
            onClick={() => setC(c + 1)}
          />
          <Button name="refresh" className="bgcolor2" onClick={() => setC(0)} />
          <Button
            name="minus"
            className="bgcolor3"
            onClick={() => setC(c - 1)}
          />
        </div>
      </div>

      <div className="logbtn-center">
        <Button name="Logout" onClick={() => props.signout()} />
      </div>
    </Fragment>
  );
};

export default Dashboard;
