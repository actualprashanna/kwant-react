import React, { Component } from "react";
import SidebarItem from "./SidebarItem";

class Sidebar extends Component {
  state = {
    items: [
      {
        title: "Dashboard",
        img: "react",
        touched: false,
        selected: "selected",
      },
      {
        title: "Dashboard1",
        img: "react",
        touched: false,
        selected: "",
      },
      {
        title: "Dashboard2",
        img: "react",
        touched: false,
        selected: "",
      },
      {
        title: "Dashboard3",
        img: "react",
        touched: false,
        selected: "",
      },
      {
        title: "Dashboard4",
        img: "react",
        touched: false,
        selected: "",
      },
      {
        title: "Dashboard5",
        img: "react",
        touched: false,
        selected: "",
      },
      {
        title: "Dashboard6",
        img: "react",
        touched: false,
        selected: "",
      },
      {
        title: "Dashboard7",
        img: "react",
        touched: false,
        selected: "",
      },
    ],
  };

  handleMouseOver(e) {
    e.stopPropagation();
    this.setState({ items: [{ touched: true }] });
  }

  handleMouseOut(e) {
    e.stopPropagation();
    this.setState({ items: [{ touched: false }] });
  }

  renderTitle(title) {
    return (
      <div
        className="menuTitle"
        style={{
          position: "absolute",
          top: `${title.top}px`,
          left: `${title.left}px`,
          backgroundColor: "red",
        }}>
        Dashboard
      </div>
    );
  }

  render() {
    return (
      <div className="sideBarMain">
        <ul>
          {this.state.items.map((item, index) => {
            return <SidebarItem item={item} key={index} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
