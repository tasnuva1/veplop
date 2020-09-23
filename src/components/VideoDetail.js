import React from "react";
import "./VideoDetail.scss";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div class="loader-container">
        <div class="loader" id="loader-3"></div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          src={videoSrc}
          frameborder="0"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          {" "}
          {video.snippet.title} - {video.snippet.publishedAt}
        </h4>
        <p>{video.snippet.description}</p>
        {/* <p>{video.snippet.localized.description}</p> */}
      </div>
    </div>
  );
};

export default VideoDetail;
