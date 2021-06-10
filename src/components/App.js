import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import Help from "./help/Help";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/help" exact component={Help} />
    </BrowserRouter>
  );
};

export default App;
