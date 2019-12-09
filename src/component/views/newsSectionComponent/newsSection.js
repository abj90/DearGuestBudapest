import React from "react";
import ParallaxBanner from "./parallaxBannerComponent/parallaxBanner";
import TopHeadlines from "./topHeadlinesComponent/topHeadlines";

class NewsList extends React.Component {
  render() {
    return (
      <section>
        <ParallaxBanner />
        <TopHeadlines />
      </section>
    );
  }
}

export default NewsList;
