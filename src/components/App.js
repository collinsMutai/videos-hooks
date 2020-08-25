import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
const KEY = "AIzaSyDwTAdOOzcgxV4vl3YSFKbTiSv57_PwUwc";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("eiffel tower");
  }

  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              {/* pass videos array to VideoList */}
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
