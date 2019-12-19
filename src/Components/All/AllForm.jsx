import React from "react";
import { Link, Route } from "react-router-dom";

import CatsContainer from "../Cats/CatsContainer";
import DogsContainer from "../Dogs/DogsContainer";

export default class DogsCats extends React.PureComponent {
  state = {
    numOfCats: 1,
    numOfDogs: 1,
    reload: true
  };

  handleCatsNumSelect = event => {
    const catsNum = event.target.value;
    const dogsNum = this.state.numOfDogs;
    this.setState({ numOfCats: catsNum, reload: !this.state.reload });

    this.redirectRoute(catsNum, dogsNum);
  };

  handleDogsNumSelect = event => {
    const dogsNum = event.target.value;
    const catsNum = this.state.numOfCats;
    this.setState({ numOfDogs: dogsNum, reload: !this.state.reload });

    this.redirectRoute(catsNum, dogsNum);
  };

  redirectRoute = (cNum, dNum) => {
    //
  };

  reloadImages = () => {
    this.setState({ reload: !this.state.reload });
  };
  // ############# RENDER ###############
  render() {
    const link = `/all/${this.state.numOfCats}/${this.state.numOfDogs}`;

    return (
      <div>
        <div>
          <Link className="LinkBtn" to={`${link}`} onClick={this.reloadImages}>
            Load
          </Link>
        </div>

        <div className="CatsAndDogs">
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

            <Route
              path="/all/:catNum/:dogNum"
              render={props => (
                <CatsContainer reload={this.state.reload} {...props} />
              )}
            />
          </div>

          <div className="CatContainerRight">
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

            <Route
              path="/all/:catNum/:dogNum"
              render={props => (
                <div>
                  <DogsContainer reload={this.state.reload} {...props} />
                </div>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
