import React, { Component } from "react";
import logo from "../assets/logo-uninterlaced.png";
import SignUpForm from "../common/SignUpForm";

class Signup extends Component {
  render() {
    return (
      <div class="signup-page">
        <div className="signup-left">
          <div className="logo" style={{ margin: "10px 0 30px 0" }}>
            <img src={logo} alt="logo" />
          </div>
          <SignUpForm />
        </div>

        <div className="signup-right">
          <div className="signup-image"></div>
        </div>
      </div>
    );
  }
}

export default Signup;
