import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Link to="/grid">Grid Game</Link>
        <Link to="/todo-1">TodoList </Link>
        <Link to="/todo-2">TodoList Using store Store And Model</Link>
        <Link to="/user">UsersPage</Link>
        <Link to="/todo-3">TodosPage</Link>
    
      </header>
    </div>
  );
}

export default App;
