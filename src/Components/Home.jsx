import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="HomePage">
      <h1>Cats & Dogs Pictures Generator</h1>
      <p>
        This web app will generate a random picture of a cat if you go to{" "}
        <nav className="navBarInline">
          <Link to="/cat">Cats</Link>
        </nav>{" "}
        or a random piture of a dog if you go to{" "}
        <nav className="navBarInline">
          <Link to="/dog">Dogs</Link>
        </nav>
      </p>
      <p>
        You also have the option of loading dogs and cats pictures at the same
        time by visiting{" "}
        <nav className="navBarInline">
          <Link to="/all">Dogs&Cats</Link>
        </nav>
      </p>
    </div>
  );
};

export default Home;
