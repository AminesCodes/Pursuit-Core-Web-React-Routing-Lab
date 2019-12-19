import React from "react";
import axios from "axios";

export default class Cats extends React.PureComponent {
  state = {
    urlList: [],
    numOfCats: this.props.match.params.catNum,
    reload: this.props.reload
  };

  componentDidMount() {
    const { catNum } = this.props.match.params;
    this.setState({
      numOfCats: catNum
    });
    this.fetchImage();
  }

  componentDidUpdate() {
    const { catNum } = this.props.match.params;
    const { numOfCats, reload } = this.state;
    if (catNum !== numOfCats || this.props.reload !== reload) {
      this.setState({
        numOfCats: catNum,
        reload: this.props.reload
      });
      this.fetchImage();
    }
  }

  fetchImage = async () => {
    const { catNum } = this.props.match.params;

    let fetchURL = `https://api.thecatapi.com/v1/images/search?limit=${catNum}`;

    try {
      const { data } = await axios.get(fetchURL);
      this.setState({ urlList: data });
    } catch (err) {
      console.log("Sorry, something went wrong", err);
    }
  };

  // ############### RENDER ###################
  render() {
    let catContainer = <div className="loader" />;

    if (this.state.urlList.length) {
      catContainer = this.state.urlList.map(cat => (
        <img className="catImage" key={cat.url} src={cat.url} alt="cat" />
      ));
    }

    return <div className="CatsPage">{catContainer}</div>;
  }
}
