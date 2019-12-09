import React from "react";
import ParallaxBanner from "./parallaxBannerComponent/parallaxBanner";
import "./mediaSection1.css";

const MediaSection1 = () => {
  return (
    <div>
      <ParallaxBanner />
      <div className="container">
        <div className="row media-wrapper2">
          <div className="col-md-4">
            <img
              src={require(`../../../.././asset/images/media/${"d.jpg"}`)}
              alt={"abraham castro"}
              className="img-fluid"
              style={{ borderRadius: "100%", width: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="content">
              <div className="title">
                <h3>Abraham Jose Castro</h3>
                <p>Web developer/Chief Editor</p>
              </div>
              <div className="content-inner">
                <p>
                  A Venezuelan who spent over three years in Budapest and
                  immediately fell in love with the Hungarian capital on the day
                  he arrived there. He is a foodie engineer and web-developer
                  who never stops looking for the next restaurant and bar to try
                  for some bites and drinks!. He's the hardware of this web
                  application
                </p>
                <p>+36 703567042</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row media-wrapper2">
          <div className="col-md-4">
            <img
              src={require(`../../../.././asset/images/media/${"e.jpg"}`)}
              alt={"Peter sikos"}
              className="img-fluid"
              style={{ borderRadius: "100%", width: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="content">
              <div className="title">
                <h3>Peter Sikos Vilmos</h3>
                <p>Chief Editor</p>
              </div>
              <div className="content-inner">
                <p>
                  Born in Hungary, a passionate tour guide with over four years
                  of deep experience in showing his city for people from all
                  around the planet. He is dedicated to explore, discover new
                  and hidden gems all around in Europe and the world. He is all
                  the time thinking about his next big project.He's the software
                  of application.
                </p>
                <p>+36 7302910676</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection1;
