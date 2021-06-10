import React from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const items = [
    {
      title: "Dashboard",
      img: "react",
    },
    {
      title: "Schedule",
      img: "react",
    },
    {
      title: "Building Information Model",
      img: "react",
    },
    {
      title: "Graphs",
      img: "react",
    },
    {
      title: "Daily Tracking",
      img: "react",
    },
    {
      title: "Team And Resources",
      img: "react",
    },
    {
      title: "Look Ahead",
      img: "react",
    },
  ];

  return (
    <div className="sideBarMain">
      <ul>
        <li
          className="selected"
          onMouseOver={(e) => e.stopPropagation()}
          onMouseOut={(e) => e.stopPropagation()}>
          <i
            className="fab fa-react"
            onMouseOver={() => {
              console.log("touched");
            }}
            onMouseOut={() => {
              console.log("not touched");
            }}></i>
        </li>
        <li
          onMouseOver={(e) => e.stopPropagation()}
          onMouseOut={(e) => e.stopPropagation()}>
          <i
            className="fab fa-react"
            onMouseOver={() => {
              console.log("touched");
            }}
            onMouseOut={() => {
              console.log("not touched");
            }}></i>
        </li>
        <li
          onMouseOver={(e) => e.stopPropagation()}
          onMouseOut={(e) => e.stopPropagation()}>
          <i
            className="fab fa-react"
            onMouseOver={() => {
              console.log("touched");
            }}
            onMouseOut={() => {
              console.log("not touched");
            }}></i>
        </li>
        <li
          onMouseOver={(e) => e.stopPropagation()}
          onMouseOut={(e) => e.stopPropagation()}>
          <i
            className="fab fa-react"
            onMouseOver={() => {
              console.log("touched");
            }}
            onMouseOut={() => {
              console.log("not touched");
            }}></i>
        </li>
        <li
          onMouseOver={(e) => e.stopPropagation()}
          onMouseOut={(e) => e.stopPropagation()}>
          <i
            className="fab fa-react"
            onMouseOver={() => {
              console.log("touched");
            }}
            onMouseOut={() => {
              console.log("not touched");
            }}></i>
        </li>
        <li
          onMouseOver={(e) => e.stopPropagation()}
          onMouseOut={(e) => e.stopPropagation()}>
          <i
            className="fab fa-react"
            onMouseOver={() => {
              console.log("touched");
            }}
            onMouseOut={() => {
              console.log("not touched");
            }}></i>
        </li>
        <li
          onMouseOver={(e) => e.stopPropagation()}
          onMouseOut={(e) => e.stopPropagation()}>
          <i
            className="fab fa-react"
            onMouseOver={() => {
              console.log("touched");
            }}
            onMouseOut={() => {
              console.log("not touched");
            }}></i>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
