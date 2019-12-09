import React from "react";
import { Parallax } from "react-parallax";
import Button from "./buttonComponent/button";
import "./parallaxBanner.css";

class parallaxBanner extends React.Component {
  render() {
    const item = this.props.data;
    return (
      <div className="wrapper2">
        <Parallax
          bgImage={require(`../../../.././asset/images/home/${item.bannerImage}`)}
          strength={300}
          className="img-fluid"
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(254, 125, 0, ${percentage * 1})`,
                  left: "32%",
                  top: "50%",
                  opacity: "0.9",
                  borderRadius: "50px",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 1600,
                  height: percentage * 1200
                }}
              />
            </div>
          )}
        >
          <div style={{ height: 700 }}>
            <div className="spotlight">
              <div className="content">
                <h1 className="title">{item.title}</h1>
                <p className="inner-content">{item.subTitle}</p>
                <Button />
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default parallaxBanner;
