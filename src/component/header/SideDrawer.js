import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = props => {
  return (
    <nav className={props.show ? "side-drawer open" : "side-drawer"}>
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
            ExpatLife
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Daily-news-Hungary">
            Hungary News
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Sustainable-tourism-in-Europe">
            Study in Hungary
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
