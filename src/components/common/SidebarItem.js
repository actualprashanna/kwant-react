import React, { Component, createRef } from "react";

class SidebarItem extends Component {
  constructor(props) {
    super(props);
    this.titlePopup = createRef();
    this.sideLink = createRef();
  }

  handleMouseOver() {
    this.titlePopup.current.style.display = "initial";
  }

  handleMouseOut() {
    this.titlePopup.current.style.display = "none";
  }

  render() {
    return (
      <li
        onMouseOver={(e) => this.handleMouseOver()}
        onMouseOut={(e) => this.handleMouseOut()}
        className={`${this.props.item.selected}`}>
        <i className="fab fa-react"></i>
        <div
          ref={this.titlePopup}
          style={{
            color: "#fff",
            position: "absolute",
            left: "10vh",
            backgroundColor: "#000",
            display: "none",
            padding: "3px 7px",
          }}>
          {this.props.item.title}
        </div>
      </li>
    );
  }
}

export default SidebarItem;
