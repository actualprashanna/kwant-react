import React, { Component } from "react";
import SidebarItem from "./SidebarItem";

// Icons
import DashboardIcon from "./icons/DashboardIcon";
import ScheduleIcon from "./icons/ScheduleIcon";
import ModelIcon from "./icons/ModelIcon";
import GraphsIcon from "./icons/GraphsIcon";
import DailyIcon from "./icons/DailyIcon";
import TeamIcon from "./icons/TeamIcon";
import LookIcon from "./icons/LookIcon";

// Sidebar component
class Sidebar extends Component {
  state = {
    // options in sidebar
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

  render() {
    return (
      <div className="sideBarMain">
        <ul>
          {/* maps the sidebar menu items */}
          {this.state.items.map((item, index) => {
            return <SidebarItem item={item} key={index} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
