import React from "react";

const TabItemList = ({ feature }) => {
  return (
    <div className="style2">
      <div className="row justify-content-md-center">
        <div className="col-sm-12 col-lg-3">
          <div className="image">
            <img
              src={require(`../../../.././asset/images/expatSection/${feature.image}`)}
              alt={feature.image}
              className="img-fluid"
              style={{ borderRadius: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div className="col-sm-12 col-lg-7">
          <div>
            <h2>{feature.title}</h2>
            <p>{feature.content}</p>
          </div>
          <h5>{feature.subtitle}</h5>
          <ul>
            <li>
              <a href={feature.link1} target={"_blank"}>
                {feature.linkTitle}
              </a>
            </li>
            <li>
              <a href={feature.link2} target={"_blank"}>
                {feature.link2Title}
              </a>
            </li>
            <li>
              <a href={feature.link3} target={"_blank"}>
                {feature.link3}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabItemList;
