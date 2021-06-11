import React, { Component } from "react";

// maps each sidebar component
class SidebarItem extends Component {
  render() {
    return (
      <li
        data-tooltip={`${this.props.item.title}`}
        data-position="right center"
        data-inverted="">
        <div>{this.props.item.icon}</div>
      </li>
    );
  }
}

export default SidebarItem;
