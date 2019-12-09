import axios from "axios";

export default axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    language: "en",
    sources: "bbc-news,cnn,google-news",
    sortBy: "popularity",
    apiKey: "18c3145e17994f4492055454a82e65ca"
  }
});
