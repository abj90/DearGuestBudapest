import React from "react";
import { Link } from "react-router-dom";
import "./cardComponent.css";

const CardComponent = ({ card }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 cardWrapper">
      <div className="card-news">
        <img
          className="card-img-top card-news-img mx-auto d-block"
          alt={card.urlToImage}
          src={card.urlToImage}
        />
        <div className="card card-news-content">
          <div className="card-news-body">
            <h5 className="card-title  text-primary">
              <Link to={`/news/${card.id}`} className="card-link">
                {card.title}
              </Link>
            </h5>
            <p className="card-text">{card.description}</p>
            <Link to={`/news/${card.id}`} className="card-link">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
