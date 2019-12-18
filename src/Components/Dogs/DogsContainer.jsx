import React from "react";
import axios from "axios";

import DogImage from "./DogImage";

export default class Dogs extends React.PureComponent {
  state = {
    urlList: [],
    reload: this.props.reload
  };

  async componentDidMount() {
    const { breed, num } = this.props.match.params;
    this.setState({
      targetBreed: breed,
      numOfDogs: num
    });
    this.fetchImage();
  }

  componentDidUpdate() {
    const { breed, num } = this.props.match.params;
    const { targetBreed, numOfDogs, reload } = this.state;
    if (
      breed !== targetBreed ||
      num !== numOfDogs ||
      this.props.reload !== reload
    ) {
      this.setState({
        targetBreed: breed,
        numOfDogs: num,
        reload: this.props.reload
      });
      this.fetchImage();
    }
  }

  fetchImage = async () => {
    const { breed, num } = this.props.match.params;

    let fetchURL = `https://dog.ceo/api/breed/${breed}/images/random/${num}`;
    if (breed === "random") {
      fetchURL = `https://dog.ceo/api/breeds/image/random/${num}`;
    }

    try {
      const { data } = await axios.get(fetchURL);
      this.setState({ urlList: data.message });
    } catch (err) {
      console.log("Sorry, something went wrong", err);
    }
  };

  // ############### RENDER ###################
  render() {
    let dogContainer = <div className="loader" />;

    if (this.state.urlList.length) {
      dogContainer = this.state.urlList.map(url => (
        <DogImage key={url} imageUrl={url} />
      ));
    }

    return <div className="DogsPage">{dogContainer}</div>;
  }
}
