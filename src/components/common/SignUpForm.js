import React, { Component } from "react";
import procore from "../assets/procore-sm-logo.png";
import bim from "../assets/bim-logo.png";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="error">
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, meta, type, placeholder }) => {
    const className = `form-group`;
    return (
      <div className={className}>
        <input
          {...input}
          className="form-control"
          type={type}
          placeholder={placeholder}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderCheckbox = ({ input, meta, type, placeholder }) => {
    return (
      <input
        {...input}
        className="form-control"
        type={type}
        placeholder={placeholder}
      />
    );
  };

  onSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onSubmit()}>
        <div className="formWrapper">
          <div className="field">
            <div className="two fields">
              <div className="field">
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  component={this.renderInput}
                />
              </div>
              <div className="field">
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  component={this.renderInput}
                />
              </div>
            </div>
          </div>

          <Field
            type="email"
            name="username"
            placeholder="Email"
            component={this.renderInput}
            className="input"
          />

          <div style={{ height: "10px" }} />

          <div className="field">
            <div className="fields">
              <div className="six wide field">
                <Field
                  type="text"
                  name="countryCode"
                  maxlength="4"
                  placeholder="Country Code"
                  component={this.renderInput}
                  className="input"
                  defaultValue="+1"
                />
              </div>
              <div className="ten wide field">
                <Field
                  type="text"
                  name="phone"
                  maxlength="10"
                  placeholder="Phone Number"
                  component={this.renderInput}
                  className="input"
                />
              </div>
            </div>
          </div>

          <Field
            type="text"
            name="company"
            placeholder="Company Name"
            component={this.renderInput}
            className="input"
          />

          <div style={{ height: "10px" }} />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            component={this.renderInput}
            className="input"
          />

          <div
            className="vertical-bottom password-conditions"
            style={{ width: "100%", marginTop: "10px" }}>
            <ul style={{ margin: "0", fontSize: "12px" }}>
              <span
                style={{ display: "flex", justifyContent: "space-between" }}>
                <li className="active">
                  <i className="fas fa-circle" style={{ fill: "\f111" }}></i>One
                  lower character
                </li>
                <li className="active">
                  <i className="fas fa-circle"></i>One upper character
                </li>
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  content: "fill",
                }}>
                <li className="active">
                  <i className="fas fa-circle"></i>One number
                </li>
                <li className="active">
                  <i className="fas fa-circle"></i>8 character minimum
                </li>
              </span>
            </ul>
          </div>

          <h4 style={{ fontSize: "14px", textAlign: "center" }}>
            By clicking "Sign Up" you agree to onTarget's{" "}
            <a
              href="https://platform.ontargetcloud.com/#/terms"
              target="_blank"
              rel="noreferrer">
              Terms {"&"} Conditions
            </a>
          </h4>

          <div className="buttonWrapper">
            <button
              className="ui signin button"
              control-id="ControlID-104"
              type="submit"
              style={{
                width: "100%",
                borderRadius: "20px",
                backgroundColor: "#43A1E2",
                color: "#fff",
              }}>
              Sign Up
            </button>
            <div className="seperator">
              <div
                className="section-separator"
                style={{ marginRight: "10px" }}></div>{" "}
              Or{" "}
              <div
                className="section-separator"
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
              Sign Up With Procore
            </button>
            <button className="link-btns-blue">
              <img src={bim} alt="bim" />
              Sign Up With BIM
            </button>
            <h4 style={{ fontSize: "14px", textAlign: "center" }}>
              Already have an account? <Link to="/">Sign In</Link>
            </h4>
          </div>
        </div>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "Username is required";
  }

  if (!formValues.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export default reduxForm({
  form: "Form",
  validate,
})(SignUpForm);
