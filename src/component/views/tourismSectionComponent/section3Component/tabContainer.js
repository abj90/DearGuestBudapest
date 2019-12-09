import React, { Component } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import CardComponent from "./cardComponent";
import "./tabContainer.css";

class TabContainer extends Component {
  renderTab = () => {
    const items = this.props.data;
    console.log("cards", items.foodElements);
    return (
      <div>
        <header>
          <h2>EAT DRINK LOVE</h2>
        </header>
        <div className="row justify-content-center m-1">
          <div className="col-lg-9">
            <Tabs defaultTab="one">
              <TabList className="tab-title">
                <Tab tabFor="one">
                  <h3>EAT</h3>
                </Tab>
                <Tab tabFor="two">
                  <h3>DRINK</h3>
                </Tab>
                <Tab tabFor="three">
                  <h3>LOVE</h3>
                </Tab>
              </TabList>

              <TabPanel tabId="one" className="pt-4">
                <div className="row">
                  {items.feactures1.map(element => {
                    return <CardComponent key={element.id} card={element} />;
                  })}
                </div>
              </TabPanel>

              <TabPanel tabId="two" className="pt-4">
                <div className="row">
                  {items.feactures2.map(element => {
                    return <CardComponent card={element} />;
                  })}
                </div>
              </TabPanel>

              <TabPanel tabId="three" className="pt-4">
                <p>
                  What to do with your special friend in Budapest{" "}
                  <i className="fas fa-heart"></i>
                </p>
                <div className="row">
                  {items.feactures3.map(element => {
                    return <CardComponent card={element} />;
                  })}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div className="container-fluid wrapper4">{this.renderTab()}</div>;
  }
}

export default TabContainer;
