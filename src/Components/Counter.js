import React, { Fragment, useState } from "react";
import { FaPlus, FaMinus, FaUndoAlt } from "react-icons/fa";
import Button from "./Button";
import "./Counter.css";

const Counter = (props) => {
  const [c, setC] = useState(0);
  return (
    <Fragment>
      {props.name}
      <div className="btn-center">
        <div className="cnt-margin"> {c}</div>

        <div className="actions">
          <Button
            name={<FaPlus />}
            className="bgcolor1"
            onClick={() => setC(c + 1)}
          />
          <Button
            name={<FaUndoAlt />}
            className="bgcolor2"
            onClick={() => setC(0)}
          />
          <Button
            name={<FaMinus />}
            className="bgcolor3"
            onClick={() => setC(c - 1)}
          />
        </div>
      </div>

      <div className="logbtn-center">
        <Button name="Go Back" onClick={() => props.signout()} />
      </div>
    </Fragment>
  );
};

export default Counter;
