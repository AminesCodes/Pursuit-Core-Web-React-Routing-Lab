import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";

import "./styles.css";

import Home from "./Components/Home";
import Cats from "./Components/Cats";
import Dogs from "./Components/Dogs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/" className="navBar">
            Home
          </Link>
          <Link to="/cats" className="navBar">
            Cats
          </Link>
          <Link to="/dogs" className="navBar">
            Dogs
          </Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cats" component={Cats} />
          <Route path="/dogs" component={Dogs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
