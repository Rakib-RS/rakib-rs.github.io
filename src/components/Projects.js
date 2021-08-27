import React from "react";
import "./Projects.css";
const Projects = (props) => {
  return (
    <div className="project">
      <h4>Projects</h4>
      <div className="educontainer">
        <div className="content">
          <div className="school">
            <div className="icon">
              <h3>S</h3>
            </div>
            <h6>SSC-2014</h6>
            <h5>Gouripur R.K. GOVT. High School</h5>
          </div>
        </div>
        <div className="content smargin">
          <div className="school">
            <div className="icon">
              <h3>C</h3>
            </div>
            <h6>HSC-2016</h6>
            <h5>Gouripur R.K. GOVT. High School</h5>
          </div>
        </div>
        <div className="content smargin">
          <div className="school">
            <div className="icon">
              <h3>U</h3>
            </div>
            <h6>BSc(CSE) 2017-current</h6>
            <h5>Gouripur R.K. GOVT. High School</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
