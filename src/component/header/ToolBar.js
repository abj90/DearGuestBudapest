import React from "react";
import { Link } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggleButton";
import "./ToolBar.css";

const ToolBar = props => (
  <div className={props.scrolled ? "toolbar scrolled" : "toolbar"}>
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <img src={require(`../.././asset/images/navbar/${"logo.png"}`)} />
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation_items">
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/tourism-in-Budapest">
              Tourism
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Expa-life-in-Budapest">
              Expat Life
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Daily-news-Hungary">
              Hungary News
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="">
              Study in Hungary
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default ToolBar;
