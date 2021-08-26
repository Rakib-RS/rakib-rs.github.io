import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'
const Header = (props) => {
  return (
    
      <nav class="navbar navbar-sticky-top navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <b>Rakib</b>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                ABOUT ME <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                PORTFOLIO
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                CONTRACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    
  );
};

export default Header;
