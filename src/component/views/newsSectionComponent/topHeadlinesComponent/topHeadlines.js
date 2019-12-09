import React from "react";
import { connect } from "react-redux";
import { fetchTopHeadlines } from "../../../.././actions";
import CardComponent from "./cardComponent";
import "./topHeadlines.css";

class TopHeadlines extends React.Component {
  componentDidMount() {
    if (this.props.news.length === 0) {
      this.props.fetchTopHeadlines();
    }
  }

  render() {
    const items = this.props.news;
    return (
      <div className="wrapper2">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-9 main">
              <div className="row">
                {items.map((item, i) => {
                  return <CardComponent card={item} key={i} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ news }) => {
  return { news };
};

export default connect(mapStateToProps, {
  fetchTopHeadlines
})(TopHeadlines);
