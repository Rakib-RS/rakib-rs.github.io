import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="mycontainer">
          <AboutMe />
          <Skills/>
          <Education/>
          <Projects/>
        </div>
      </div>
    );
  }
}
export default App;
