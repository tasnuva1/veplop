import React from "react";
import "./VideoDetail.scss";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="loader-whole-container">
        <div class="loader-container">
          <div class="loader" id="loader-3"></div>
        </div>
      </div>
    );
  }

  const timeMode = video.snippet.publishedAt;
  const timeMode2 = timeMode.slice(0, 10);
  const timeModeDetails = timeMode.slice(11, 19);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail-container">
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
          {video.snippet.title}
          <span>Date: {timeMode2}</span>
          <span className="timeModeDetails" style={{ marginTop: "0rem" }}>
            Time: {timeModeDetails}
          </span>
        </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
