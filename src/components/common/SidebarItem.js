import React, { Component, createRef } from "react";

class SidebarItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.titlePopup = createRef();
  //   this.sideLink = createRef();
  // }

  // handleMouseOver() {
  //   this.titlePopup.current.style.display = "initial";
  // }

  // handleMouseOut() {
  //   this.titlePopup.current.style.display = "none";
  // }

  // handleIcon =() =>{
  //   return ({this.props.item.icon});
  // }

  render() {
    return (
      // <li
      //   onMouseOver={(e) => this.handleMouseOver()}
      //   onMouseOut={(e) => this.handleMouseOut()}
      //   className={`${this.props.item.selected}`}>
      //   {this.props.item.icon}
      //   <div
      //     className="titlePopup"
      //     ref={this.titlePopup}
      //     style={{
      //       color: "#fff",
      //       position: "absolute",
      //       left: "9vh",
      //       backgroundColor: "#000",
      //       display: "none",
      //       padding: "3px 7px",
      //       borderRadius: "5px",
      //       borderLeft: "2px solid #000",
      //       borderTopLeftRadius: "30%",
      //       borderBottomLeftRadius: "30%",
      //     }}>
      //     {this.props.item.title}
      //   </div>
      // </li>
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
