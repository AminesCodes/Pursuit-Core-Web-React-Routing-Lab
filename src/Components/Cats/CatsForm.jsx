import React from "react";
// import axios from "axios";
import { Link, Route } from "react-router-dom";

import CatsContainer from "./CatsContainer";

export default class Cats extends React.PureComponent {
  state = {
    numOfCats: "1",
    reload: true
  };

  // async componentDidMount() {
  //   try {
  //     const { data } = await axios.get("https://cat.ceo/api/breeds/list/all");
  //     this.setState({ breedList: data.message });
  //   } catch (err) {
  //     console.log("Sorry, something went wrong", err);
  //   }
  // }

  handleNumOfCatsSelection = event => {
    this.setState({ numOfCats: event.target.value });
  };

  reloadImages = () => {
    this.setState({ reload: !this.state.reload });
  };

  // ################### RENDER #################
  render() {
    const link = `/cat/${this.state.numOfCats}`;

    return (
      <div className="CatsForm">
        <select
          value={this.state.numOfCats}
          onChange={this.handleNumOfCatsSelection}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <Link className="LinkBtn" to={`${link}`} onClick={this.reloadImages}>
          Load
        </Link>
        <Route
          path="/cat/:num"
          render={props => (
            <CatsContainer reload={this.state.reload} {...props} />
          )}
        />
      </div>
    );
  }
}
