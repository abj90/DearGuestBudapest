import React from "react";
import { connect } from "react-redux";
import ParallaxBanner from "./parallaxBannerComponent/parallaxBanner";
import Section1 from "./section1Component/section1";
import Section2 from "./section2Component/section2";
import TabContainer from "./section3Component/tabContainer";

class TouristicPlaces extends React.Component {
  renderList = () => {
    return (
      <div>
        <ParallaxBanner data={this.props.tourismSectionData.parallaxBanner} />
        <Section1 data={this.props.tourismSectionData.section1} />
        <Section2 data={this.props.tourismSectionData.section2} />
        <TabContainer data={this.props.tourismSectionData.section3} />
      </div>
    );
  };

  render() {
    console.log(this.props.tourismSectionData);
    return <section>{this.renderList()}</section>;
  }
}

const mapStateToProps = state => {
  return { tourismSectionData: state.tourismSectionData };
};

export default connect(mapStateToProps)(TouristicPlaces);
