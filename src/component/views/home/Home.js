import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import VideoBackground from "./backgroundVideoComponent/videoBackground";
import ImageContent from "./imageContentComponent/imageContent";
import TopHeadlines from "./topHeadlinesComponent/topHeadlines";
import ParallaxBanner from "./parallaxBannerComponent/parallaxBanner";
import FancyDivider from "./fancyDividerComponent/fancyDivider";

class Home extends React.Component {
  renderPage = () => {
    const { homeData } = this.props;
    return (
      <div>
        <VideoBackground data={homeData.videoBackground} />
        <TopHeadlines />
        <ParallaxBanner data={homeData.parallaxBanner} />
        <ImageContent data={homeData.imageContent} />
        <FancyDivider data={homeData.fancyDivider} />
      </div>
    );
  };

  render() {
    return <section>{this.renderPage()}</section>;
  }
}

const mapStateToProps = ({ homeData }) => {
  return { homeData };
};

export default connect(mapStateToProps)(Home);
