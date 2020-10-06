import React, { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./App.scss";

const App = () => {
  const [RgbaColor, setRgbaColor] = useState("#1d3557"); // default Background Color
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchInput(""); // default search
  }, []);

  const onSearchInput = async (searchInput) => {
    const res = await youtube.get("/search", {
      params: {
        q: searchInput,
      },
    });
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const loadis = videos.map((video) => {
    return !video;
  });
  const { video } = videos;
  console.log(!video);

  return (
    <div style={{ backgroundColor: `${RgbaColor}`, zIndex: 4 }}>
      <div className="app-container">
        <div className="search-container">
          <SearchBar onSearchSubmit={onSearchInput} />
          <div className="color-pic">
            <ColorPicker RgbaColor={RgbaColor} setRgbaColor={setRgbaColor} />
            <p>Background Color Changer</p>
          </div>
        </div>
        <div className="search-lable">We have {videos.length} videos.</div>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                // key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
