import "./VideoItemStyle.css";
import "./tem.scss";
import React, { useEffect } from "react";

import blur from "../Images/white-blur.png";

const VideoItem = ({ video, onVideoSelect, time, counter }) => {
  // console.log(video);
  // let counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // var arr = [1, 2, 3];
  // for (var i = 0; i <= arr.length; i++) {
  //   console.log(arr[i]);
  // }

  // for (var i = 0; i < 9; i++) {
  //   i
  //  }
  // console.log(num2);

  // useEffect(() => {
  //   counterContainer();
  // }, []);

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
                <span>{/* <span>{counter}</span>{" "} */}</span>
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
