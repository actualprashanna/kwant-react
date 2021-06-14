import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Field, reduxForm } from "redux-form";

// validation
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const required = (value) => (value ? undefined : "Please Provide Email");

class ForgotPassword extends Component {
  state = { meta: {} };

  // renders errors
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="error-summary">
          <div className="error-title">
            Please check your entry and try again.
            <br />
            {error}
          </div>
        </div>
      );
    }
  }

  // renders input
  renderInput = ({ input, meta, type, placeholder }) => {
    const className = `form-group`;
    return (
      <div className={className}>
        <input
          {...input}
          className="form-control"
          type={type}
          placeholder={placeholder}
          style={{ fontSize: "14px" }}
        />
        {this.setState({ meta: meta })}
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log("submitted");
  };

  render() {
    return (
      <div className="signin-page">
        <form
          className="ui form"
          onSubmit={this.onSubmit()}
          style={{ fontSize: "1.2rem" }}>
          <div className="auth-wrp modal-dialog">
            <div className="modal-above">
              {/* Logo */}
              <img src={logo} className="logo pull-left" alt="" />

              <div className="text pull-right">
                You know the password, <Link to="/">Sign In</Link>
              </div>
            </div>
            <div className="modal-content" style={{ borderRadius: "7px" }}>
              <div className="modal-header">
                <h2 className="modal-title">Forgot Password</h2>
              </div>
              <div className="ui inverted divider" style={{ margin: 0 }}></div>
              <div className="modal-body">
                <div className="row">
                  {/* Error Displayed here */}
                  {this.renderError(this.state.meta)}
                  <div className="col-xs-12 col-xs-top">
                    <div className="form-group">
                      <label
                        style={{
                          fontWeight: "550",
                          marginBottom: "5px",
                          fontSize: "14px",
                        }}>
                        Email:
                      </label>
                      {/* Email field */}
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        component={this.renderInput}
                        validate={[email, required]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui inverted divider" style={{ margin: 0 }}></div>
              <div
                className="modal-footer"
                style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="submit"
                  className="ui blue button"
                  style={{
                    backgroundClip: "#43A1E2",
                    padding: "6px 12px",
                    fontSize: "14px",
                    lineHeight: "1.42",
                  }}
                  disabled={false}>
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "Form",
  // validate,
})(ForgotPassword);
