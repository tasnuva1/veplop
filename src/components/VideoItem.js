import "./VideoItemStyle.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  // Destructuring
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="video-item item"
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">
          <h3>
            {video.snippet.title} - {video.snippet.publishedAt}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
