import React from "react";
import './App.css';
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  return <React.Fragment>
    <Navbar />
    <LandingPage />
    <Projects />
    <About />
    <Contact />
  </React.Fragment>
}

export default App;
