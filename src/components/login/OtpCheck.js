import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import logo from "../assets/logo-uninterlaced.png";

// Page for otp check
class OtpCheck extends Component {
  // renders error
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="invalid-feedback">
          <div>{error}</div>
        </div>
      );
    }
  }

  // renders input component
  renderInput = ({ input, meta, type, placeholder, inputmode, maxLength }) => {
    const className = `form-group`;
    return (
      <div className={className}>
        <input
          {...input}
          className="form-control"
          type={type}
          placeholder={placeholder}
          inputMode={inputmode}
          maxLength={maxLength}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  // submit handler
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className="otpCheckPage">
        <div className="container">
          {/* logo */}
          <div className="logo" style={{ margin: "40px 0" }}>
            <img src={logo} alt="logo" />
          </div>
          <div
            className="promptText"
            style={{ padding: "10px", fontSize: "1.5rem", width: "70%" }}>
            Enter the code generated on your mobile device below to log in!
          </div>
          {/* form start */}
          <form className="ui form">
            <div className="formWrapper">
              {/* input field */}
              <Field
                type="text"
                name="otpcode"
                placeholder="Enter 4-digit Code here"
                component={this.renderInput}
                maxLength={4}
                inputmode="numeric"
              />
              {/* resend */}
              <button className="resendBtn ui blue button">Resend</button>
              {/* submit */}
              <button type="submit" className="ui blue button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// validation
const validate = (formValues) => {
  const errors = {};

  if (!formValues.otpcode) {
    errors.username = "Code is required";
  }

  return errors;
};

export default reduxForm({
  form: "Form",
  validate,
})(OtpCheck);
