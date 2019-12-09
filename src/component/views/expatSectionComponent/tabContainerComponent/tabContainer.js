import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import TabItemList from "./tabItemList";
import TabTable from "./tabTable";

import "./tabContainer.css";

const TabContainer = props => {
  const item = props.data;

  return (
    <div className="wrapper4">
      {/*header*/}
      <div className="header">
        <h2>{item.title}</h2>
        <div className="content">
          <p>{item.subTitle}</p>
        </div>
      </div>
      {/*end header*/}

      <div className="container-fluid">
        <Tabs className="tab" defaultTab="one">
          {/**/}
          <div className="row ">
            <div className="col-lg-12 primary">
              <TabList className="tab-title">
                <Tab tabFor="one">
                  <h3 style={{ color: "#f06862" }}>SOCIAL</h3>
                </Tab>
                <Tab tabFor="two">
                  <h3 style={{ color: "#f06862" }}>SPORTS</h3>
                </Tab>
                <Tab tabFor="three">
                  <h3 style={{ color: "#f06862" }}>HOLIDAY CALENDAR</h3>
                </Tab>
              </TabList>
            </div>
          </div>
          {/**/}

          {/**/}
          <div className="row justify-content-md-center secondary">
            <div className="col-lg-9">
              {/**/}
              <TabPanel tabId="one" className="tab1Content">
                <div className="container-fluid">
                  <div className="row">
                    {/*part1*/}
                    <div className="col-sm-12 col-md-6 col-lg-4 align-self-starts h-100">
                      {item.features1a.map(feature => {
                        return (
                          <div className="style1">
                            <h5>{feature.title}</h5>
                            <p>{feature.content}</p>
                            <div className="container">
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
                                <li>
                                  <a href={feature.link4} target={"_blank"}>
                                    {feature.link4Title}
                                  </a>
                                </li>
                                <li>
                                  <a href={feature.link5} target={"_blank"}>
                                    {feature.link5Title}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/*end part1*/}

                    {/*part2*/}
                    <div className="col-md-4 col-lg-4 align-self-center image">
                      <img
                        src={require(`../../../.././asset/images/expatSection/${item.features1b.image}`)}
                        alt={item.features1b.image}
                        className="img-fluid"
                        style={{ borderRadius: "100%", width: "100%" }}
                      />
                    </div>
                    {/*end part2*/}

                    {/*part3*/}
                    <div className="col-sm-12 col-md-6 col-lg-4 align-self-starts h-100">
                      {item.features1c.map(feature => {
                        return (
                          <div className="style1">
                            <h5>{feature.title}</h5>
                            <p>{feature.content}</p>
                            <div className="container">
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
                                <li>
                                  <a href={feature.link4} target={"_blank"}>
                                    {feature.link4Title}
                                  </a>
                                </li>
                                <li>
                                  <a href={feature.link5} target={"_blank"}>
                                    {feature.link5Title}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/*end part3*/}
                  </div>
                </div>
              </TabPanel>
              {/**/}
              {/*tabPanel 2*/}
              <TabPanel tabId="two" className="tab2Content">
                <div className="container-fluid secondary">
                  {item.features2.map(feature => {
                    return <TabItemList key={feature.id} feature={feature} />;
                  })}
                </div>
              </TabPanel>
              {/*end tabPanel 2*/}
              {/*tabPanel 3*/}
              <TabPanel tabId="three" className="tab2Content">
                <div className="container">
                  <p>Check out in advance the Hungary holidays calendar </p>
                  <table className="table secondary">
                    <thead className="thead-dark">
                      <tr>
                        <th>Date</th>
                        <th>Day</th>
                        <th>Holiday</th>
                        {/*<th>Comments</th>*/}
                      </tr>
                    </thead>
                    {item.features3.map(feature => {
                      return <TabTable key={feature.id} feature={feature} />;
                    })}
                  </table>
                </div>
              </TabPanel>
              {/*end tabPanel 3*/}
            </div>
          </div>
          {/**/}
        </Tabs>
      </div>
    </div>
  );
};

export default TabContainer;
