import React, { Component } from "react";
import SidebarItem from "./SidebarItem";
import DashboardIcon from "./icons/DashboardIcon";
import ScheduleIcon from "./icons/ScheduleIcon";
import ModelIcon from "./icons/ModelIcon";
import GraphsIcon from "./icons/GraphsIcon";
import DailyIcon from "./icons/DailyIcon";
import TeamIcon from "./icons/TeamIcon";
import LookIcon from "./icons/LookIcon";

class Sidebar extends Component {
  state = {
    items: [
      {
        title: "Dashboard",
        img: "react",
        touched: false,
        selected: "selected",
        icon: <DashboardIcon />,
      },
      {
        title: "Schedule",
        img: "react",
        touched: false,
        selected: "",
        icon: <ScheduleIcon />,
      },
      {
        title: "Building Information Model",
        img: "react",
        touched: false,
        selected: "",
        icon: <ModelIcon />,
      },
      {
        title: "Graphs",
        img: "react",
        touched: false,
        selected: "",
        icon: <GraphsIcon />,
      },
      {
        title: "Daily Tracking",
        img: "react",
        touched: false,
        selected: "",
        icon: <DailyIcon />,
      },
      {
        title: "Team And Resources",
        img: "react",
        touched: false,
        selected: "",
        icon: <TeamIcon />,
      },
      {
        title: "Look Ahead",
        img: "react",
        touched: false,
        selected: "",
        icon: <LookIcon />,
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
