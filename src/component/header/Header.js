import React from "react";
import ToolBar from "./ToolBar";
import BackDrop from "./BackDrop";
import SideDrawer from "./SideDrawer";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      sideDrawerOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const istTop = window.scrollY > 50;
      if (istTop === true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  drawerToggleClickHandler = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  BackDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  renderList() {
    if (this.state.sideDrawerOpen) {
      return (
        <div>
          <BackDrop click={this.BackDropClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <header>
        <ToolBar
          scrolled={this.state.scrolled}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        {this.renderList()}
      </header>
    );
  }
}

export default Header;
