import React from "react";
import axios from "axios";
import DogImage from "./DogImage";

export default class DogMenu extends React.PureComponent {
  state = {
    url: ""
  };

  componentDidMount() {
    this.fetchDogImage();
  }

  fetchDogImage = async () => {
    try {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      this.setState({ url: data.message });
    } catch (err) {
      console.log("Something went wrong, Sorry!", err);
    }
  };

  handleGetNewDogBtn = () => {
    this.fetchDogImage();
  };

  // ################### RENDER ####################
  render() {
    let randomDogImage = <div className="loader" />;
    if (this.state.url) {
      randomDogImage = <DogImage imageUrl={this.state.url} />;
    }

    return (
      <div className="randomDogImage">
        <button onClick={this.handleGetNewDogBtn}>Load New Image</button>
        {randomDogImage}
      </div>
    );
  }
}
