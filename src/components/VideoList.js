import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  // Destructuring
  const array1 = [0]; // 1

  const numMap = array1.map((x) => x[0]);
  const renderedList = videos.map((video) => {
    const timeMode = video.snippet.publishedAt;
    const timeMode2 = timeMode.slice(0, 10);
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
        time={timeMode2}
        counter={numMap.push(1)}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
