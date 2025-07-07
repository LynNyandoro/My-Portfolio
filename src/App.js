import logo from './logo.svg';
import './App.css';
import Nav from './sections/Nav';
import Home from './sections/Home';
import About from './sections/About';
import React from 'react';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Footer from './sections/Footer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
