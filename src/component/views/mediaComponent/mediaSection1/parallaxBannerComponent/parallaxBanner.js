import React from "react";
import { Parallax } from "react-parallax";
import "./parallaxBanner.css";

class ParallaxBanner extends React.Component {
  render() {
    return (
      <section>
        <div className="wrapper1">
          <Parallax
            bgImage={require(`../../../../.././asset/images/media/${"a.jpg"}`)}
            strength={500}
          >
            <div className="banner" style={{ width: "100%" }}>
              <div className="title">
                <h1>About Us</h1>
              </div>
            </div>
          </Parallax>
        </div>
      </section>
    );
  }
}

export default ParallaxBanner;
