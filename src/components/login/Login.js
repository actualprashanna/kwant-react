import React, { Component } from "react";
import LoginForm from "../common/LoginForm";
import logo from "../assets/logo-uninterlaced.png";

class Login extends Component {
  render() {
    return (
      <div class="login-page">
        <div className="login-left">
          <div className="logo" style={{ margin: "40px 0" }}>
            <img src={logo} alt="logo" />
          </div>
          <div className="welcome-text">Welcome</div>

          <LoginForm />
        </div>
        <div className="login-right">
          <div className="signup-image"></div>
        </div>
      </div>
    );
  }
}

export default Login;
