import React, { Fragment } from "react";
import { FaReact } from "react-icons/fa";

const Header = (props) => {
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          padding: "20px",
          backgroundColor: "#5642d4",
          color: "#dae0d8",
          fontSize: "20px",
          // Flex Properties
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaReact />
        <div style={{ marginLeft: "10px" }}>Welcome React Projects</div>
      </div>
    </Fragment>
  );
};
export default Header;
