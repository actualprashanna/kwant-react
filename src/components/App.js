import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import Help from "./help/Help";
import DashBoard from "./dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={DashBoard} />
      <Route path="/help" exact component={Help} />
    </BrowserRouter>
  );
};

export default App;
