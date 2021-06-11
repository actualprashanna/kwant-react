import React, { Component } from "react";
import LoginForm from "../common/LoginForm";
import logo from "../assets/logo-uninterlaced.png";

// Login Page
class Login extends Component {
  render() {
    return (
      <div class="login-page">
        {/* // Left side of login page */}
        <div className="login-left">
          <div className="logo" style={{ margin: "40px 0" }}>
            <img src={logo} alt="logo" />
          </div>
          <div className="welcome-text">Welcome</div>
          {/* Login Form */}
          <LoginForm />
        </div>
        {/* Image on right side of login page */}
        <div className="login-right">
          <div className="signup-image"></div>
        </div>
      </div>
    );
  }
}

export default Login;
