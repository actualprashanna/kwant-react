import React, { Component } from "react";

class List extends Component {
  // returns list of submenu items
  render() {
    return (
      <li onClick={(e) => e.stopPropagation()} style={{ marginLeft: "20px" }}>
        <a href={this.props.link}>{this.props.title}</a>
      </li>
    );
  }
}

export default List;
