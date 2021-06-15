import React from "react";

// Start new Project button
const ProjectStart = () => {
  return (
    <div
      className="projects_container cursor-pointer"
      style={{ padding: "7px" }}>
      <div
        className="container-fluid start_project_body"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <div
          className="glyphicon glyphicon-plus start-newproj text-muted-light"
          style={{ paddingBottom: "5px" }}></div>

        <h3 className="text-muted-light">Start New Project</h3>
      </div>
    </div>
  );
};

export default ProjectStart;
