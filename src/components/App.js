import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import Help from "./help/Help";
import DashBoard from "./dashboard/Dashboard";
import OtpCheck from "../components/login/OtpCheck";
import Signup from "./login/Signup";

const App = () => {
  return (
    <BrowserRouter>
      {/* Routes */}
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={DashBoard} />
      <Route path="/help" exact component={Help} />
      <Route path="/otpcheck" exact component={OtpCheck} />
      <Route path="/signup" exact component={Signup} />
    </BrowserRouter>
  );
};

export default App;
