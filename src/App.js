import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";

import "./styles.css";

import Home from "./Components/Home";
import CatsForm from "./Components/Cats/CatsForm";
import DogsForm from "./Components/Dogs/DogsForm";
import DogsCats from "./Components/All";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="topNavBar">
          <Link to="/" className="navBarLink">
            Home
          </Link>
          <Link to="/cat" className="navBarLink">
            Cats
          </Link>
          <Link to="/dog" className="navBarLink">
            Dogs
          </Link>
          <Link to="/all" className="navBarLink">
            Dogs&Cats
          </Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cat" component={CatsForm} />
          <Route path="/dog" component={DogsForm} />
          <Route path="/all" component={DogsCats} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
