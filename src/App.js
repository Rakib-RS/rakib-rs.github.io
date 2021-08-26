import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="mycontainer">
          <AboutMe />
          <Skills/>
        </div>
      </div>
    );
  }
}
export default App;
