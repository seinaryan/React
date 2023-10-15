/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import Contact from "./components/contact";
import About from "./components/about";
import Skills from "./components/skills";
import Home from "./components/home";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <nav className="flex justify-evenly my-2">
        <a onClick={() => scrollToSection("home")}>Home</a>
        <a onClick={() => scrollToSection("ab")}>About</a>
        <a onClick={() => scrollToSection("sk")}>Skills</a>
        <a onClick={() => scrollToSection("con")}>Contact</a>
      </nav>
      <div id="home">
        <Home />
      </div>
      <div id="ab">
        <About/>
      </div>
      <div id="sk">
        <Skills />
      </div>
      <div id="con">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
