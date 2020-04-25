import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./User/login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Now?Ya!</p>
        <Login name={["roshan", "navya"]} note="Hello World" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
