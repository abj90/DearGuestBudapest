import React from "react";
import ScrollDialog from "./dialogComponent/dialog";
import "./section1.css";

class Section1 extends React.Component {
  renderList = () => {
    const item = this.props.data;
    return (
      <div>
        <header>
          <h2>{item.title}</h2>
        </header>
        <div className="container-fluid media-container">
          <div className="row justify-content-center">
            {item.feactures.map(feacture => {
              if (feacture.content.length <= 390) {
                return (
                  <div
                    className="col-sm-12 col-md-5 col-lg-3 media-container-inner m-1"
                    key={feacture.id}
                  >
                    <div className="media-image">
                      <img
                        src={require(`../../../.././asset/images/tourismSection/${feacture.image}`)}
                        alt={feacture.image}
                        className="img-fluid"
                      />
                    </div>
                    <div className="media-content">
                      <h3>{feacture.title}</h3>
                      <p>{feacture.content}</p>
                      <p>Points of interest</p>
                      <ul>
                        <li>{feacture.placeOfInterest1}</li>
                        <li>{feacture.placeOfInterest2}</li>
                        <li>{feacture.placeOfInterest3}</li>
                      </ul>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className="col-sm-12 col-md-5 col-lg-3 media-container-inner m-1"
                    key={feacture.id}
                  >
                    <div className="media-image">
                      <img
                        src={require(`../../../.././asset/images/tourismSection/${feacture.image}`)}
                        alt={feacture.image}
                      />
                    </div>
                    <div className="media-content">
                      <h3>{feacture.title}</h3>
                      <p>{[...[], feacture.content.substr(0, 387) + "..."]}</p>
                      <p>Points of interest</p>
                      <ScrollDialog
                        feacture={feacture}
                        className="modalWindow"
                      />
                      <ul>
                        <li>{feacture.placeOfInterest1}</li>
                        <li>{feacture.placeOfInterest2}</li>
                        <li>{feacture.placeOfInterest3}</li>
                      </ul>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  };

  render() {
    console.log("from tourismSection", this.props);
    return <div className="wrapper2">{this.renderList()}</div>;
  }
}

export default Section1;
