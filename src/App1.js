import React, { Fragment, useState } from "react";
import Login from "./User/login1";
import Dashboard from "./Components/Dashboard";


function App1() {
  const [dash, setDash] = useState(false);
  return (
    <Fragment>
      {dash ? (
        <Dashboard signout={() => setDash(false)} />
      ) : (
        <Login signin={() => setDash(true)} />
      )}
    </Fragment>
  );
}

export default App1;
