import React from "react";
import axios from "axios";

import DogsForm from "./DogsForm";

export default class Dogs extends React.PureComponent {
  state = {
    breedList: {}
  };

  async componentDidMount() {
    const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
    this.setState({ breedList: data.message });
  }

  render() {
    return (
      <div className="DogsPage">
        <DogsForm breedList={this.state.breedList} />
      </div>
    );
  }
}
