import "./VideoItemStyle.css";
import "./tem.scss";
import React from "react";

import blur from "../Images/white-blur.png";

const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video);
  let counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Destructuring
  return (
    // <div
    //   onClick={() => {
    //     onVideoSelect(video);
    //   }}
    //   className="video-item item"
    // >
    //   <img
    //     alt={video.snippet.title}
    //     className=""
    //     src={video.snippet.thumbnails.high.url}
    //   />
    //   <div className="">
    //     <div className="">
    //       <h3>
    //         {video.snippet.title} - {video.snippet.publishedAt}
    //       </h3>
    //     </div>
    //   </div>
    // </div>

    //////////
    <div class="example-2 card">
      <div
        class="wrapper"
        style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
      >
        <div class="header">
          <div class="date">
            <span class="day">12</span>
            <span class="month">Aug</span>
            <span class="year">2016</span>
          </div>
          <ul class="menu-content">
            <li>
              <a href="#" class="fa fa-bookmark-o"></a>
            </li>
            <li>
              <a href="#" class="fa fa-heart-o">
                <span>
                  <span>{counts.map((el, index) => el[index])}</span>{" "}
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="fa fa-comment-o">
                <span>3</span>
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
