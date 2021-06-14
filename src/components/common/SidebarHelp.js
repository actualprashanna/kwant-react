import React, { Children, Component } from "react";

class SidebarHelp extends Component {
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
              <div>Kwant.ai Tutorials</div>
            </div>
            <div className="ui secondary vertical menu">
              <a className="active item">Account</a>
              <a className="item">Settings</a>
              <div className="ui dropdown item">
                <i className="dropdown icon"></i>
                Display Options
                <div className="menu">
                  <div className="header">Text Size</div>
                  <a className="item">Small</a>
                  <a className="item">Medium</a>
                  <a className="item">Large</a>
                </div>
              </div>
            </div>
          </div>
          <div className="archived">Archived Pages</div>
        </div>
        <div className="helpContent">{this.props.children}</div>
      </div>
    );
  }
}

export default SidebarHelp;
