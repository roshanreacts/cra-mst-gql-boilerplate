import React, { Fragment, useState } from "react";
import Login from "./User/login1";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import TodoForm from "./Components/ToDoForm";

function App1() {
  // Update state to rerender a component
  const [dash, setDash] = useState("login");
  return (
    <Fragment>
      <Header />
      {dash === "login" && <Login signin={(val) => setDash(val)} />}
      {dash === "counter" && <Counter signout={() => setDash("login")} />}{" "}
      {dash === "todo" && <TodoForm signout={() => setDash("login")} />}
    </Fragment>
  );
}

export default App1;
