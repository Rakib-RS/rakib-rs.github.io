import React from "react";
import PropTypes from "prop-types";
import "./Skills.css";
const Skills = (props) => {
  return (
    <div className="skills">
      <span className="header">
        <h4>MY SKILL</h4>
      </span>
      <div className="skillcontainer">
        <div className="left">
          <h6>Backend</h6>
          <div className="item">
            C
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="item">
            C++
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="item">
            Javascript
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="item">
            Node Js
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="item">
            Solidity
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
        </div>
        <div className="right">
          <h6>Front END</h6>
          <div className="item">
            C
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="item">
            C++
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="item">
            Javascript
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="item">
            Node Js
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="item">
            Solidity
            <div class="progress-line html">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {};

export default Skills;
