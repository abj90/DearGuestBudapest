import React from "react";
import "./section2.css";

class Section2 extends React.Component {
  renderList = () => {
    const item = this.props.data;
    console.log(item.feactures);
    return (
      <div>
        <header>
          <h2>{item.title}</h2>
        </header>
        <div className="container-fluid">
          {item.feactures.map(feacture => {
            if (feacture.id % 2 != 0) {
              return (
                <div
                  className="row justify-content-center m-1 media-container-inner"
                  key={feacture.id}
                >
                  <div className="col-sm-12 col-md-6 col-lg-5 m-2 image-left">
                    <img
                      src={require(`../../../.././asset/images/tourismSection/${feacture.image}`)}
                      alt={feacture.image}
                    />
                  </div>
                  <div className="col-sm-12 col-md-9 col-lg-4 m-2 media-content">
                    <h3>{feacture.title}</h3>
                    <p>{feacture.content}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="row justify-content-center m-1 media-container-inner"
                  key={feacture.id}
                >
                  <div className="col-sm-12 col-md-9 col-lg-4 m-2 media-content">
                    <h3>{feacture.title}</h3>
                    <p>{feacture.content}</p>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-5 image-right">
                    <img
                      src={require(`../../../.././asset/images/tourismSection/${feacture.image}`)}
                      alt={feacture.image}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  };

  render() {
    return <div className="wrapper3">{this.renderList()}</div>;
  }
}

export default Section2;
