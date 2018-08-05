import Search from "../components/images";
import Score from "../components/score";
import ResultList from "../components/ResultList";
import React, { Component } from "react";
import API from "../util/API";

class Final extends Component {
  state = {
    search: "",
    results: [],
    score: 0
  };

  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          submit={this.handleFormSubmit}
        />
        <Score score={this.state.score} changeScore={this.changeScore} />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default Final;
