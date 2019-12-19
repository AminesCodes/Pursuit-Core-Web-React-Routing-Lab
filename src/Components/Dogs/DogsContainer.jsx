import React from "react";
import axios from "axios";

export default class Dogs extends React.PureComponent {
  state = {
    urlList: [],
    targetBreed: this.props.match.params.breed,
    numOfDogs: this.props.match.params.num,
    reload: this.props.reload
  };

  componentDidMount() {
    this.manageState();
    const { targetBreed, numOfDogs } = this.manageState();
    this.fetchImage(targetBreed, numOfDogs);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.url !== this.props.match.url ||
      prevProps.reload !== this.props.reload
    ) {
      const { targetBreed, numOfDogs } = this.manageState();
      this.fetchImage(targetBreed, numOfDogs);
    }
  }

  fetchImage = async (breed, num) => {
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

  manageState = () => {
    const { breed, num } = this.props.match.params;
    const { dogNum } = this.props.match.params;

    let selectedBreed = "random",
      selectedNum = "1";

    if (breed && num && !dogNum) {
      selectedBreed = breed;
      selectedNum = num;
    } else if (!breed && !num && dogNum) {
      selectedNum = dogNum;
    }

    this.setState({
      targetBreed: selectedBreed,
      numOfDogs: selectedNum,
      reload: this.props.reload
    });

    return {
      targetBreed: selectedBreed,
      numOfDogs: selectedNum
    };
  };

  // ############### RENDER ###################
  render() {
    let dogContainer = <div className="loader" />;

    if (this.state.urlList.length) {
      dogContainer = this.state.urlList.map(url => (
        <img className="dogImage" key={url} src={url} alt="Dog" />
      ));
    }

    return (
      <div className="DogsPage">
        <h4>{this.props.match.params.targetBreed}</h4>
        <h4>{this.props.match.params.numOfDogs}</h4>
        <h4>form all: {this.props.match.params.dogNum}</h4>
        {dogContainer}
      </div>
    );
  }
}
