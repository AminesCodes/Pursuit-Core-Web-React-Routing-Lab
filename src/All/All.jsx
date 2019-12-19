import React from "react";
import { Route } from "react-router-dom";

import CatsContainer from "./Cats/CatsContainer";
import DogsContainer from "./Dogs/DogsContainer";

export default class DogsCats extends React.PureComponent {
  state = {
    numOfCats: 1,
    numOfDogs: 1,
    reload: true
  };

  handleCatsNumSelect = event => {
    const catsNum = event.target.value;
    const dogsNum = this.state.numOfDogs;
  };

  handleDogsNumSelect = event => {};

  render() {
    return (
      <div className="CatsPage">
        <div className="CatContainerLeft">
          <label htmlFor="catSelect">Number of Cats</label>
          <select
            onChange={this.handleCatsNumSelect}
            value={this.state.numOfCats}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={`Cd${num}`} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="CatContainerLeft">
          <label htmlFor="Dogselect">Number of Dogs</label>
          <select
            onChange={this.handleDogsNumSelect}
            value={this.state.numOfDogs}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={`Dc${num}`} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <Route
          path="/all/:catNum/:dogNum"
          render={props => (
            <DogsContainer reload={this.state.reload} {...props} />
          )}
        />
      </div>
    );
  }
}
