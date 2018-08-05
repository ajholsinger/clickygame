import React from "react";

const ResultList = props => (
  <div className="row img-row">
    {props.results.map(results => (
      <div className="column">
        <img
          alt={results.title}
          className="img-fluid"
          src={results.images.original.url}
        />
      </div>
    ))}
  </div>
);

export default ResultList;
