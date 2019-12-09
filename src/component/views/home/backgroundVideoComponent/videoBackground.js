import React from "react";
import "./videoBackground.css";

class VideoBackground extends React.Component {
  render() {
    const item = this.props.data;
    return (
      <div className="container-fluid video-background">
        <div className="video-wrap">
          <div className="video">
            <video autoPlay loop muted playsInline>
              <source
                src={require(`../../../.././asset/video/${item.video}`)}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="caption text-center">
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </div>
      </div>
    );
  }
}

export default VideoBackground;
