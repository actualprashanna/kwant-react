import React from "react";
import logo from "../assets/logo.png";

// Code for header
const Header = () => {
  return (
    <div className="headerMain">
      <div className="leftSide">
        <div className="logo">
          <img src={logo} alt="onTarget" style={{ height: "40px" }} />
        </div>
        <div className="pull-left select-proj" style={{ padding: "6px 12px" }}>
          <span>
            <button className="btn btn-clear">
              <span>Select a Project</span>
              <i className="fa fa-chevron-down pull-right"></i>
            </button>
          </span>
        </div>
      </div>
      <div className="rightSide">
        <div className="notifications">
          <a>
            <i className="fa fa-cloud-upload"></i>
          </a>
          <button className="btn custom-btn tutorials-btn">Tutorials</button>
        </div>
        <div className="ui vertical inverted divider"></div>
        <div className="profile">
          <button>
            Nepal Prashanna <i className="fa fa-cog cursor-pointer"></i>
            <div className="image">
              <img src="/images/avatar2/large/kristy.png" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
