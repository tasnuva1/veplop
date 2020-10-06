import "./VideoItemStyle.css";
import "./tem.scss";
import React, { useEffect } from "react";

import blur from "../Images/white-blur.png";

const VideoItem = ({ video, onVideoSelect, time, counter }) => {
  return (
    <div class="example-2 card">
      <div
        class="wrapper"
        style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
        onClick={() => {
          onVideoSelect(video);
        }}
      >
        <div class="header">
          <div class="date">
            <span class="day">{time}</span>
          </div>
          <ul class="menu-content">
            <li>
              <a href="#" class="fa fa-bookmark-o"></a>
            </li>
            <li>
              <a href="#" class="fa fa-heart-o">
                <span></span>
              </a>
            </li>
            <li>
              <a href="#" class="fa fa-comment-o">
                <span>{counter}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="data">
          <div class="content">
            <span class="author">Jane Doe</span>

            <h1
              class="text bg-text"
              style={{
                backgroundImage: `url(${blur})`,
              }}
            >
              <span> {video.snippet.title}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
