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
    const profileBar = document.querySelector('.profile-bar-top');
    // Check if animation class has already been applied
    if(!profileBar.classList.contains('slide-to-center')) {
      const bannerSection = document.querySelector('.banner-section');
      profileBar.classList.add('slide-to-center');
      // Make Banner blurry
      bannerSection.classList.add('blur');
      // handler for eventListener (makes removing the event easier)
      const reverseToCorner = () => {
          profileBar.classList.remove('slide-to-center')
          bannerSection.classList.remove('blur');
          bannerSection.removeEventListener('click', reverseToCorner);
      }
      // Waits for animation to finish before allowing user to reverse it
      setTimeout( () => {
        bannerSection.addEventListener('click', reverseToCorner)
      }, 1000)
    }
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
