import React from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

import DogsContainer from "./DogsContainer";

export default class Dogs extends React.PureComponent {
  state = {
    breedList: null,
    targetBreed: "random",
    numOfDogs: "1",
    reload: true
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
      this.setState({ breedList: data.message });
    } catch (err) {
      console.log("Sorry, something went wrong", err);
    }
  }

  rendreDogsList = () => {
    const dogsList = Object.keys(this.state.breedList).map(breed => (
      <option value={breed}>{breed}</option>
    ));
    if (dogsList.length) {
      dogsList.unshift(<option value="random">--Select a Breed--</option>);
      return dogsList;
    }
    return null;
  };

  handleBreadSelection = event => {
    const targetBreed = event.target.value;
    this.setState({
      targetBreed: targetBreed
    });
  };

  handleNumOfDogsSelection = event => {
    this.setState({ numOfDogs: event.target.value });
  };

  forceReload = () => {
    this.setState({ reload: !this.state.reload });
  };

  // ################### RENDER #################
  render() {
    let breedForm = <div className="loader" />;
    let dogsList = null;
    if (this.state.breedList) {
      dogsList = this.rendreDogsList();
    }
    if (dogsList) {
      const numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
        <option value={num}>{num}</option>
      ));
      breedForm = (
        <>
          <select
            value={this.state.numOfDogs}
            onChange={this.handleNumOfDogsSelection}
          >
            {numberOptions}
          </select>
          <select
            value={this.state.targetBreed}
            onChange={this.handleBreadSelection}
          >
            {dogsList}
          </select>
        </>
      );
    }

    let link = "/dog";
    // if (this.state.targetBreed) {
    link += `/${this.state.targetBreed}`;
    // }
    // if (this.state.numOfDogs !== "1") {
    link += `/${this.state.numOfDogs}`;
    // }

    return (
      <div className="DogsForm">
        {breedForm}
        <Link className="LinkBtn" to={`${link}`} onClick={this.forceReload}>
          Load
        </Link>
        <Route path="/dog/:breed/:num" component={DogsContainer} />
      </div>
    );
  }
}
