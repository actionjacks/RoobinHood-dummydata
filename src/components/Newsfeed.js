import React, { useEffect, useState } from "react";
import LineGraph from "./LineGraph";
import "./Newsfeed.css";
import TimeLine from "./TimeLine";
import Chip from "@material-ui/core/Chip";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function Newsfeed() {
  const [popularTopics, setTopics] = useState([
    "Cyberpunk 2077",
    "JavaScript",
    "C##",
    "Python",
    "The Pirate Bay",
    "Healthcare Supplies",
    "Bitcoin",
    "Bankruptcy in Poland",
    "Filmweb",
    "COVID",
  ]);

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

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
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2> Buying Power</h2>
          <h2> $4.11</h2>
        </div>
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p>Markets Closed</p>
            <h4>come back tomorrow</h4>
          </div>
        </div>
        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1>Popular lists</h1>
            <p>Show More</p>
          </div>
          <div className="newsfeed_popularlists_badges">
            {popularTopics.map((topic) => (
              <Chip
                className="topic__badge"
                variant="outlined"
                label={topic}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
