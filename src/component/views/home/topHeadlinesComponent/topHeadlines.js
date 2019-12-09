import React from "react";
import { connect } from "react-redux";
import { fetchTopHeadlines } from "../../../../actions";
import CardComponent from "./cardComponent";
import "./topHeadlines.css";

class TopHeadlines extends React.Component {
  componentDidMount() {
    this.props.fetchTopHeadlines();
  }

  renderCards = () => {
    const { news } = this.props;
    if (news === "") {
      return <div></div>;
    } else {
      return news.reduce((result, card, i) => {
        if (i < 4 && card.title.length < 80) {
          result.push(<CardComponent key={i} card={card} />);
        }
        return result;
      }, []);
    }
  };

  render() {
    return (
      <div className="container-fluid wraper1">
        <div className="row">{this.renderCards()}</div>
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
