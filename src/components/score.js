import React from "react";

const Score = props => (
  <div className="navnav">
    <div className="name">Clicky Game!</div>
    <div className="score">Score: {props.score}</div>
  </div>
);

export default Score;
