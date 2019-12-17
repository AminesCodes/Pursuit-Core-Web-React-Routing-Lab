import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/" className="navBar">
            Home
          </Link>
          <Link to="/dogs" className="navBar">
            Dogs
          </Link>
          <Link to="/cats" className="navBar">
            Cats
          </Link>
        </nav>

        <Switch>{/* <Route exact path='/' component={}></Route> */}</Switch>
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
