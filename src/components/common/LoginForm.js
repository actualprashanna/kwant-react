import React, { Component } from "react";
import procore from "../assets/procore-sm-logo.png";
import bim from "../assets/bim-logo.png";

class LoginForm extends Component {
  render() {
    return (
      <form className="ui form">
        <div className="formWrapper">
          <input type="email" name="username" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              width: "100%",
            }}>
            <div class="inline ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden" />
              <label>Remember Me</label>
            </div>
            <div>Forgot Password</div>
          </div>
          <div className="buttonWrapper">
            <button
              class="ui signin button"
              control-id="ControlID-104"
              style={{
                width: "100%",
                borderRadius: "20px",
                marginTop: "10px",
                backgroundColor: "#43A1E2",
                color: "#fff",
              }}>
              Sign In
            </button>
            <div className="seperator">
              <div
                class="section-separator"
                style={{ marginRight: "10px" }}></div>{" "}
              Or{" "}
              <div
                class="section-separator"
                style={{ marginLeft: "10px" }}></div>
            </div>
            <button
              className="link-btns"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <img src={procore} alt="procore" />
              Sign In With Procore
            </button>
            <button className="link-btns-blue">
              <img src={bim} alt="bim" />
              Sign In With BIM
            </button>
            <button className="link-btns-blue">Sign Up</button>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
