import React, { Component, createRef } from "react";

class ProjectSingle extends Component {
  state = { dropdown: "none" };

  constructor(props) {
    super(props);
    this.menu = createRef();
  }

  // dropdown effect
  handleDropdown = () => {
    if (this.state.dropdown === "none") {
      this.setState({ dropdown: "initial" });
    } else {
      this.setState({ dropdown: "none" });
    }
  };

  render() {
    return (
      <div
        className="projects_container cursor-pointer"
        style={{ padding: "7px" }}>
        <div
          className="container-fluid start_project_body"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              fontSize: "17px",
            }}>
            <div className="title">Sample Project</div>
            <div
              className="ui icon dropdown button"
              onClick={this.handleDropdown}
              style={{ background: "#fff", fontSize: "17px" }}>
              <i className="fa fa-ellipsis-v"></i>
              {/* Dropdown options */}
              <div
                className="menu active"
                ref={this.menu}
                style={{ display: this.state.dropdown }}>
                <div className="item">Dashboard</div>
                <div className="item">Team</div>
                <div className="item">Files</div>
                <div className="item">Tasks</div>
                <div className="item">Update Project</div>
                <div className="item">Delete</div>
              </div>
            </div>
          </div>
          {/* logo of project */}
          <div className="image">
            <svg
              width="85"
              style={{
                height: "140px",
                width: "100%",
                border: "1px solid #ddd",
              }}
              height="71"
              viewBox="0 0 85 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                ng-attr-d="{{vm.getRamdomIcon()}}"
                fill="#e2e1e1"
                d="M11.1875 55.8382L18.0762 51.5685V41.6713C16.3836 41.2699 15.1213 39.7621 15.1213 37.9526C15.1213 35.8361 16.8426 34.1203 18.9664 34.1203C21.0893 34.1203 22.8106 35.8361 22.8106 37.9526C22.8106 39.7621 21.5484 41.2693 19.8566 41.6713V50.4651L26.0629 46.6184V23.0599L42.9334 18.9098L58.938 23.0695V46.6184L64.8921 50.3089V41.6713C63.1995 41.2699 61.9373 39.7621 61.9373 37.9526C61.9373 35.8361 63.6585 34.1203 65.7823 34.1203C67.9053 34.1203 69.6266 35.8361 69.6266 37.9526C69.6266 39.7621 68.3643 41.2693 66.6725 41.6713V51.4125L73.8133 55.8382V70.999C80.7578 63.4584 85 53.4056 85 42.3627C85 18.9665 65.9721 0 42.5 0C19.0279 0 0 18.9665 0 42.3627C0 53.406 4.24266 63.4592 11.1875 71V55.8382Z"></path>
            </svg>
          </div>
          {/* footer of project */}
          <div
            className="row project_footer"
            style={{
              display: "flex",
              width: "100%",
              alignItems: "end",
              justifyContent: "center",
              marginTop: "2rem",
            }}>
            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 footer-time project_footer_border-right footerItem">
              <i className="fa fa-ship"></i>
              <small className="text-muted">
                <b>0</b>
              </small>
            </div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 footer-icon project_footer_border-left footerItem">
              <i className="fa  fa-users"> </i>
              <small className="text-blue-light">
                <b>0</b>
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSingle;
