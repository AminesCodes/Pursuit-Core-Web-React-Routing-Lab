import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";

import "./styles.css";

import Home from "./Components/Home";
import Cats from "./Components/Cats/Cats";
import Dogs from "./Components/Dogs/Dogs";
import DogsCats from "./Components/All";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/" className="navBar">
            Home
          </Link>
          <Link to="/cats/random" className="navBar">
            Cats
          </Link>
          <Link to="/dog/random" className="navBar">
            Dogs
          </Link>
          <Link to="/all/random" className="navBar">
            Dogs&Cats
          </Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cats/random" component={Cats} />
          <Route path="/dog/random" component={Dogs} />
          <Route path="/all/random" component={DogsCats} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
