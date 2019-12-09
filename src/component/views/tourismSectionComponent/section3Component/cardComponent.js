import React from "react";
import "./cardComponent.css";

const CardComponent = ({ card }) => {
  return (
    <div className="col-sm-3 col-md-6 col-lg-4 col-xl-4 p-0">
      <div className="card-news">
        <img
          className="card-img-top card-img mx-auto d-block"
          src={require(`../../../.././asset/images/tourismSection/${card.image}`)}
          alt={card.image}
          style={{ height: "10%" }}
        />
        <div className="card-body">
          <div className="card-content">
            <h4>{card.title}</h4>
            <p>{card.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
