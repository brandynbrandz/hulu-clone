import React from "react";
import "./VideoCard.css";

const VideoCard = ({ movie }) => {
  return (
    <div className="videoCard">
      <img
        src="https://pbs.twimg.com/media/ErZvwLDW8AcZkOI?format=jpg&name=small"
        alt=""
      />
      <p>This is a movie about coding</p>
      <h2>Movie title</h2>
      <p>No of likes</p>
    </div>
  );
};

export default VideoCard;
