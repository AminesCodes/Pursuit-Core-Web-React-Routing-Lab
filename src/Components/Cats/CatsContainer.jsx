import React from "react";
import axios from "axios";

export default class Cats extends React.PureComponent {
  state = {
    urlList: [],
    reload: this.props.reload
  };

  async componentDidMount() {
    const { num } = this.props.match.params;
    this.setState({
      numOfCats: num
    });
    this.fetchImage();
  }

  componentDidUpdate() {
    const { num } = this.props.match.params;
    const { numOfCats, reload } = this.state;
    if (num !== numOfCats || this.props.reload !== reload) {
      this.setState({
        numOfCats: num,
        reload: this.props.reload
      });
      this.fetchImage();
    }
  }

  fetchImage = async () => {
    const { num } = this.props.match.params;

    let fetchURL = `https://api.thecatapi.com/v1/images/search?limit=${num}`;

    try {
      const { data } = await axios.get(fetchURL);
      console.log(data);
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
