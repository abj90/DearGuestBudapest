import React from "react";
import "./squaredContainer.css";

const SquaredContainer = props => {
  const item = props.data;
  return (
    <div className="wrapper3 spotlight">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-9">
            <div className="row">
              <div className="col-lg-3 style1">
                <img
                  src={require(`../../../.././asset/images/expatSection/${item.imageFullSize}`)}
                  alt={item.imageFullSize}
                  className="img-fluid fullSize"
                />
                <img
                  src={require(`../../../.././asset/images/expatSection/${item.imageReduceSize}`)}
                  alt={item.imageReduceSize}
                  className="img-fluid reduceSize"
                />
              </div>
              <div className="col-lg-9 style2">
                <h2>{item.title}</h2>
                <h5>{item.subtitle}</h5>
                <ul>
                  {item.tipsList.map(tip => {
                    return (
                      <li>
                        <i
                          className="fas fa-hand-point-right"
                          style={{ margin: "0 0.5rem 0 0", fontSize: "1rem" }}
                          key={tip.id}
                        ></i>
                        {tip.content}
                      </li>
                    );
                  })}
                </ul>
                <p>{item.content}</p>
                <p>{item.subTitle}</p>

                {item.features.map(feature => {
                  return (
                    <div className="feature d-inline-flex">
                      <div>
                        <i className={feature.icon}></i>
                      </div>
                      <div className="content">
                        <h5>{feature.title}</h5>
                        <p>{feature.content}</p>
                        <ul>
                          <li>
                            <a href={feature.link1} target={"_blank"}>
                              {feature.link1Title}
                            </a>
                          </li>
                          <li>
                            <a href={feature.link2} target={"_blank"}>
                              {feature.link2Title}
                            </a>
                          </li>
                          <li>
                            <a href={feature.link3} target={"_blank"}>
                              {feature.link3Title}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquaredContainer;
