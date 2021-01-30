import React from "react";
import LineGraph from "./LineGraph";
import "./Newsfeed.css";

function Newsfeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>113,124</h1>
            <p>+PLN 44.4 (+12%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
