import React from "react";
import { connect } from "react-redux";
import { fetchTopHeadlines } from "../../.././actions";
import "./singleNews.css";

class SingleNews extends React.Component {
  componentDidMount() {
    if (this.props.news === undefined) {
      this.props.fetchTopHeadlines();
    }
  }

  renderNews = () => {
    const { news } = this.props;

    if (news === undefined) {
      return <div></div>;
    } else {
      return (
        <div className="inner">
          <img
            className="img-fluid mx-auto d-block"
            src={news.urlToImage}
            alt={news.urlToImage}
          />
          <p>
            {news.publishedAt}- Source: <strong>{news.source.id}</strong>
          </p>
          <h2>{news.title}</h2>
          <p>{news.content}</p>
          <a href={news.url} target={"_blank"}>
            Click to continue to read the news
          </a>
        </div>
      );
    }
  };
  render() {
    return (
      <section>
        <div className="header"></div>
        <div className="wrapper1-main">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 main">
                {this.renderNews()}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { news: state.news[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
  fetchTopHeadlines
})(SingleNews);
