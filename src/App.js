import React from 'react';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab);

function App() {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <Skills />
    </div>
  );
}

export default App;
