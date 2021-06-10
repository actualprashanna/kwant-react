import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const PageWrapper = (props) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content">{props.children}</div>
    </div>
  );
};

export default PageWrapper;
