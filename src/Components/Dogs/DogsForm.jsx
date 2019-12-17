import React from "react";
import {Link} from 'react-router-dom',
import "../Spinner.css";

export default class Dogs extends React.PureComponent {
  state = {
    targetBreed: "",
    targetSubBreed: "",
    subBreeds: [],
    numOfDogs: "1"
  };

  rendreDogsList = () => {
    const dogsList = Object.keys(this.props.breedList).map(breed => (
      <option value={breed}>{breed}</option>
    ));
    if (dogsList.length) {
      dogsList.unshift(<option value="" />);
      return dogsList;
    }
    return null;
  };

  handleBreadSelection = event => {
    const { breedList } = this.props;
    const targetBreed = event.target.value;
    this.setState({
      targetBreed: targetBreed,
      subBreeds: breedList[targetBreed]
    });
    console.log(this.state.subBreeds);
  };

  rendreSubBreeds = () => {
    const { subBreeds } = this.state;

    if (subBreeds.length) {
      const subBreedList = subBreeds.map(subBreed => (
        <option value={subBreed}>{subBreed}</option>
      ));
      subBreedList.unshift(<option value="" />);
      return (
        <select
          value={this.state.targetSubBreed}
          onChange={this.handleSubBreadSelection}
        >
          {subBreedList}
        </select>
      );
    }
    return null;
  };

  handleSubBreadSelection = event => {
    this.setState({ targetSubBreed: event.target.value });
  };

  handleNumOfDogsSelection = event => {
    this.setState({ numOfDogs: event.target.value });
  };

  handleLoadDogs = () => {

  }

  render() {
    let breedForm = <div className="loader" />;
    const dogsList = this.rendreDogsList();
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

    const subBreedList = this.rendreSubBreeds();

    return (
      <div className="DogsForm">
        {breedForm}
        {subBreedList}
        <button onClick={this.handleLoadDogs}>Load</button>
      </div>
    );
  }
}
