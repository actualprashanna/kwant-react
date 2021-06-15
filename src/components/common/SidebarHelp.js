import React, { Component } from "react";
import List from "./List";
import {
  listItemsWorkforce,
  listItemsApp,
  listItemsIOT,
  listItemsPlanner,
  listItemsSafety,
} from "./constants";

class SidebarHelp extends Component {
  state = {
    displayWorkforce: "none",
    displaySafety: "none",
    displayIOT: "none",
    displayPlanner: "none",
    displayApp: "none",
  };

  // toggles the submenu
  toggleDisplay(titleOf) {
    switch (titleOf) {
      case "Workforce":
        if (this.state.displayWorkforce === "none") {
          this.setState({ displayWorkforce: "initial" });
        } else {
          this.setState({ displayWorkforce: "none" });
        }
        break;
      case "Safety":
        if (this.state.displaySafety === "none") {
          this.setState({ displaySafety: "initial" });
        } else {
          this.setState({ displaySafety: "none" });
        }
        break;
      case "IOT":
        if (this.state.displayIOT === "none") {
          this.setState({ displayIOT: "initial" });
        } else {
          this.setState({ displayIOT: "none" });
        }
        break;
      case "Planner":
        if (this.state.displayPlanner === "none") {
          this.setState({ displayPlanner: "initial" });
        } else {
          this.setState({ displayPlanner: "none" });
        }
        break;
      case "App":
        if (this.state.displayApp === "none") {
          this.setState({ displayApp: "initial" });
        } else {
          this.setState({ displayApp: "none" });
        }
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <div className="sidebarHelp">
          <div className="container">
            {/* Sidemenu title */}
            <div
              className="title link"
              style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://ontargetapp.atlassian.net/wiki/download/attachments/688129/MIF?version=1&amp;modificationDate=1571442123710&amp;cacheVersion=1&amp;api=v2"
                alt="logo"
                style={{ width: "24px", height: "24px", borderRadius: "5px" }}
              />
              <div style={{ marginLeft: "10px" }}>Kwant.ai Tutorials</div>
            </div>
            {/* Menu links */}
            <div
              style={{
                overflowY: "scroll",
                width: "100%",
                fontSize: "1.8rem",
                marginTop: "2.5rem",
              }}>
              Pages
              <ul style={{ marginLeft: "20px" }}>
                {/* List of pages */}
                <li>
                  <a href="https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/819219/Start+a+project">
                    Start a Project
                  </a>
                </li>

                <li>
                  <a href="https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/152338463/Inviting+People+Into+Projects">
                    Inviting People Into Projects
                  </a>
                </li>

                <li onClick={() => this.toggleDisplay("Workforce")}>
                  Workforce Awareness
                </li>

                <ul style={{ display: this.state.displayWorkforce }}>
                  {listItemsWorkforce.map((listItem, index) => {
                    return <List {...listItem} key={index} />;
                  })}
                </ul>

                <li onClick={() => this.toggleDisplay("App")}>
                  Kwant.ai iPhone App
                </li>

                <ul style={{ display: this.state.displayApp }}>
                  {listItemsApp.map((listItem, index) => {
                    return <List {...listItem} key={index} />;
                  })}
                </ul>

                <li onClick={() => this.toggleDisplay("Planner")}>
                  Last Planner System
                </li>

                <ul style={{ display: this.state.displayPlanner }}>
                  {listItemsPlanner.map((listItem, index) => {
                    return <List {...listItem} key={index} />;
                  })}
                </ul>

                <li onClick={() => this.toggleDisplay("Safety")}>Safety</li>
                <ul style={{ display: this.state.displaySafety }}>
                  {listItemsSafety.map((listItem, index) => {
                    return <List {...listItem} key={index} />;
                  })}
                </ul>

                <li onClick={() => this.toggleDisplay("IOT")}>
                  IOT Infrastructure
                </li>

                <ul style={{ display: this.state.displayIOT }}>
                  {listItemsIOT.map((listItem, index) => {
                    return <List {...listItem} key={index} />;
                  })}
                </ul>
              </ul>
            </div>
          </div>
          {/* archived link */}
          <div className="archived">
            <a href="https://ontargetapp.atlassian.net/wiki/spaces/MIF/archivedpages">
              Archived Pages
            </a>
          </div>
        </div>
        <div className="helpContent">{this.props.children}</div>
      </div>
    );
  }
}

export default SidebarHelp;
