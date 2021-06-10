import React, { Component, Fragment } from "react";

class SidebarItem extends Component {
  render() {
    return (
      <li
        className="selected"
        onMouseOver={(e) => e.stopPropagation()}
        onMouseOut={(e) => e.stopPropagation()}
        key={this.props.index}>
        <i
          className={`fab fa-${this.props.title}`}
          onMouseOver={() => {
            console.log("touched");
          }}
          onMouseOut={() => {
            console.log("not touched");
          }}></i>
      </li>
    );
  }
}

export default SidebarItem;
