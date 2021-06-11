import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

// Page Wrapper contains header and sidebar
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
