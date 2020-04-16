import axios from "axios";
const KEY = "AIzaSyC2NkG98_xMD_tyR4ZidYICB87s-mzG4zE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    // params
    part: "snippet",
    maxResults: 25, // max is 50
    key: KEY,
  },
});
