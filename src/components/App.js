import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
    </BrowserRouter>
  );
};

export default App;
