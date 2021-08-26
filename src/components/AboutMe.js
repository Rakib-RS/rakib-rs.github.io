import React from "react";
import PropTypes from "prop-types";
import "./AboutMe.css";
import url from "./assests/user.jpg";
const AboutMe = (props) => {
  return (
    <div className="aboutme">
      <div className="leftSide">
        <div className="picture">
          <img src={url} alt="user pic" />
        </div>
        <div className="download">
          <button>Download Resume</button>
        </div>
      </div>
      <div className="rightSide">
        <div>
          <h4>Rakib Sheikh</h4>
        </div>
        <div>
          <h6>Full Stack Web & Blockchain Developer</h6>
        </div>
        <div>
          I am full stack web and Blockchain developer.I have over two year
          experience on that.I am passionate and love to take challenge . I have
          solved over 300+ problems in various online judge (like
          uva,lightoj,codeforces)
        </div>
        <br />
        <br />
        <div className="info ">
          <div className="infoLeft">
            <div>Age </div>
            <div>Nationality {} </div>
            <div>Address {}</div>
            <div>Phone {}</div>
            <div>Email {}</div>
          </div>
          <div className="infoRight">
            <div>21</div>
            <div>Bangladeshi</div>
            <div>Rajshahi</div>
            <div>+8801710386886</div>
            <div>rakib.rscse@gmail.com</div>
          </div>
        </div>
        <div className="linkbar">
          
          <a href="https://github.com/Rakib-RS" target="blank">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-github fa-stack-1x fa-inverse"></i>
            </span>
          </a>
          <a href="https://github.com/Rakib-RS" target="blank">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
            </span>
          </a>
          <a href="https://github.com/Rakib-RS" target="blank">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
            </span>
          </a>
          <a href="https://github.com/Rakib-RS" target="blank">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
          </a>
          
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {};

export default AboutMe;
