import React from "react";
import { connect } from "react-redux";
import ParallaxBanner from "./parallaxBannerComponent/parallaxBanner";
import SplitContainer from "./splitContainerComponent/splitContainer";
import SquaredContainer from "./squaredContainerComponent/squaredContainer";
import TabContainer from "./tabContainerComponent/tabContainer";

class ExpaList extends React.Component {
  render() {
    const { expatSectionData } = this.props;
    return (
      <section>
        <ParallaxBanner data={expatSectionData.parallaxBanner} />
        <SplitContainer data={expatSectionData.splitContainer} />
        <SquaredContainer data={expatSectionData.squaredContainer} />
        <TabContainer data={expatSectionData.tabContainer} />
      </section>
    );
  }
}

const mapStateToProps = ({ expatSectionData }) => {
  return { expatSectionData };
};

export default connect(mapStateToProps)(ExpaList);
