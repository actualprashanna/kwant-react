import React, { Component } from "react";
import procore from "../assets/procore-sm-logo.png";
import bim from "../assets/bim-logo.png";
import { Field, reduxForm } from "redux-form";

class LoginForm extends Component {
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
          <Field
            type="email"
            name="username"
            placeholder="Email"
            component={this.renderInput}
            className="input"
          />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            component={this.renderInput}
            className="input"
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              width: "100%",
            }}>
            <div class="ui checkbox">
              <Field type="checkbox" component={this.renderCheckbox} />
              <label>
                <h3 style={{ fontSize: "1.2rem" }}>Remember Me</h3>
              </label>
            </div>

            <div>Forgot Password</div>
          </div>

          <div className="buttonWrapper">
            <button
              class="ui signin button"
              control-id="ControlID-104"
              type="submit"
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
})(LoginForm);
