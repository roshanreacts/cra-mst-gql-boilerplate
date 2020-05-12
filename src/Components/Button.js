import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => (
  <button onClick={props.onClick} className={"pri-btn " + props.className}>
    {props.name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
