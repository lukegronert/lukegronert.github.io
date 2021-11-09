import React from 'react';
import './App.css';
import ProfileBar from './components/ProfileBar';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  const contactClick = () => {
    console.log('hey')
  }

  return (
    <div>
      <ProfileBar position='top' />
      <Navigation contactClick={contactClick} />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <ProfileBar position='bottom' />
      <Footer />
    </div>
  );
}

export default App;
