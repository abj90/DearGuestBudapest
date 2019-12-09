import React from "react";
import Button from "./buttonComponent/button";
import "./fancyDivider.css";

class FancyDivider extends React.Component {
  renderList = () => {
    const item = this.props.data;
    return (
      <div className="row">
        <div className="col-sm-12 col-md-7 imageWrapper">
          <img
            className="image"
            alt={item.image}
            src={require(`../../../.././asset/images/home/${item.image}`)}
          />
        </div>
        <div className="col-sm-12 col-md-5 titleWrapper">
          <h2 className="title">
            TIRED
            <br></br>
            OF WAITING IN
            <br></br>A QUEUE?
          </h2>

          <h2 className="title inner">TIRED OF WAITING IN A QUEUE?</h2>
        </div>

        <div className="content">
          <h2>
            What is <span className="text-danger">Hot</span> but not trending
            yet?
          </h2>
          <p>{item.content}</p>
          <Button />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container-fluid homeWrapper4">{this.renderList()}</div>
    );
  }
}

export default FancyDivider;
