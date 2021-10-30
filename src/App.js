import React from 'react';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
