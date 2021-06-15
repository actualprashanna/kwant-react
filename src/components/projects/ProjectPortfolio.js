import React, { Component } from "react";
import Header from "../common/Header";
import ProjectStart from "./ProjectStart";
import ProjectSingle from "./ProjectSingle";

class ProjectPortfolio extends Component {
  render() {
    return (
      <div className="portfolioPage">
        {/* Here lies header */}
        <Header />
        {/* Portfolio start */}
        <div
          className="portfolioContent"
          style={{
            position: "absolute",
            top: "7vh",
            width: "100%",
          }}>
          {/* Types of views */}
          <div className="titlebar" style={{ width: "100%" }}>
            <div className="title">Project Portfolio</div>
            <div className="nav">
              <button className="portfolio-switch tracking-font-size-header md-button md-ink-ripple">
                <span>Gantt</span>
              </button>
              <button className="portfolio-switch tracking-font-size-header md-button md-ink-ripple mbutton">
                <span>Map</span>
              </button>
              <button className="portfolio-switch tracking-font-size-header md-button md-ink-ripple mbutton">
                <span>Grid</span>
              </button>
            </div>
          </div>
          {/* Project single */}
          <div className="project-page">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "10px",
                  }}>
                  {/* New project void */}
                  <ProjectStart />
                  {/* Projects */}
                  <ProjectSingle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPortfolio;
