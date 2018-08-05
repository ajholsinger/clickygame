import React from "react";

const Search = props => (
  <div className="search-form">
    <div className="search-h">Search: </div>
    <input
      type="text"
      value={props.search}
      class="search-search"
      id="search-search"
      name="search"
      onChange={props.handleInputChange}
    />
    <button onClick={props.submit} className="submit-button" />
    <div className="andPlay">And Play!</div>
  </div>
);

export default Search;
