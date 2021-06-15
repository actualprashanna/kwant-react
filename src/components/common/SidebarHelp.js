import React, { Component } from "react";
import List from "./List";

const listItemsWorkforce = [
  {
    title: "Adding Worker - Through Add Worker",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/151912449/Adding+Worker+-+Through+Add+Worker",
  },
  {
    title: "Adding Worker - Through Excel",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/152240129/Adding+Worker+Through+Excel",
  },
  {
    title: "Change the badges for the worker",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/152502340/Change+the+badges+for+the+worker",
  },
  {
    title: "Upload OSHA/ SST/ Other certifications",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/152240178/Upload%2BOSHA%2BSST%2BOther%2Bcertifications",
  },
  {
    title: "Procore Sync",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/152305667/Procore+Sync",
  },
];

const listItemsApp = [
  {
    title: "Printing badges for the worker",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/3670017/Printing+badges+for+the+worker",
  },
];

const listItemsPlanner = [
  {
    title: "Creating subtasks in gantt view",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/884785/Creating+subtasks+in+Gantt+View",
  },
  {
    title: "Types of Views",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/1867794/Types+of+View",
  },
  {
    title: "Creating and updating lookahead",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/884798/Creating+and+updating+lookahead",
  },
  {
    title: "Create a Constraint",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/2228244/Create+a+Constraint",
  },
  {
    title: "Auto Assign users to activities",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/1802255/Auto+Assign+users+to+activities",
  },
  {
    title: "PPC trend calculations",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/1703986/PPC+trend+calculations",
  },
  {
    title: "BIM - 4D and 5D calculations",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/1463123969/BIM+-+4D+and+5D+Integration",
  },
];

const listItemsSafety = [
  {
    title: "SOS | Emergency | Safety Alerts",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/1451819034/SOS%2BEmergency%2BSafety%2BAlerts",
  },
  {
    title: "Contact Tracing",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/1447002123/Contact+Tracing",
  },
  {
    title: "Location Tracing",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/1447034906/Location+Tracing",
  },
  {
    title: "Restricted Zones",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/1476526081/Restricted+Zones",
  },
];

const listItemsIOT = [
  {
    title: "How to Turn on Mini Kwants",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/1455685668/How+to+Turn+on+Mini+Kwants",
  },
  {
    title: "Asset Trackers",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/1455980684/Asset+Trackers",
  },
  {
    title: "Smart Badges - V1",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/1482260481/Smart+Badges+-+V1",
  },
  {
    title: "Smart Badges - V3",
    link: "https://ontargetapp.atlassian.net/wiki/spaces/MIF/pages/1567883265/Smart+Badges+-+V3",
  },
];

class SidebarHelp extends Component {
  state = {
    displayWorkforce: "none",
    displaySafety: "none",
    displayIOT: "none",
    displayPlanner: "none",
    displayApp: "none",
  };

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
            <div
              style={{
                overflowY: "scroll",
                width: "100%",
                fontSize: "1.8rem",
                marginTop: "2.5rem",
              }}>
              Pages
              <ul style={{ marginLeft: "20px" }}>
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
