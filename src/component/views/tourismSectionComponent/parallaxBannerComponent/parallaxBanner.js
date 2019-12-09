import React from "react";
import { Parallax } from "react-parallax";
import "./parallaxBanner.css";

class ParallaxBanner extends React.Component {
  render() {
    const item = this.props.data;
    return (
      <section>
        <div className="wrapper1">
          <Parallax
            bgImage={require(`../../../.././asset/images/tourismSection/${item.bannerImage}`)}
            strength={500}
          >
            <div className="banner" style={{ width: "100%" }}>
              <div className="title">
                <h1>Tourism in Budapest</h1>
              </div>
            </div>
          </Parallax>
          <div className="container-fluid p-4">
            <div className="row justify-content-center">
              <div className="col-lg-5 content">
                <h2>
                  {item.title}
                  <i className="far fa-smile-wink pl-2"></i>
                </h2>
                <p>{item.content}</p>
              </div>
              <div className="col-lg-4">
                <img
                  src={require(`../../../.././asset/images/tourismSection/${item.image}`)}
                  alt={item.image}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ParallaxBanner;
