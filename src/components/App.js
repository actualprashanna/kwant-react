import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// Pages
import Login from "./login/Login";
import Help from "./help/Help";
import DashBoard from "./dashboard/Dashboard";
import OtpCheck from "../components/login/OtpCheck";
import Signup from "./login/Signup";
import Terms from "./terms/Terms";
import ForgotPassword from "./login/ForgotPassword";
import ProjectPortfolio from "./projects/ProjectPortfolio";

const App = () => {
  return (
    <BrowserRouter>
      {/* Routes */}
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={DashBoard} />
      <Route path="/help" exact component={Help} />
      <Route path="/otpcheck" exact component={OtpCheck} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/terms" exact component={Terms} />
      <Route path="/forgotpassword" exact component={ForgotPassword} />
      <Route path="/projects" exact component={ProjectPortfolio} />
    </BrowserRouter>
  );
};

export default App;
