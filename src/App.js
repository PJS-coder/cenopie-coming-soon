import React from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import DesktopSideArt from './components/DesktopSideArt';
import Logo from './components/Logo';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ThreeDBackground from './components/ThreeDBackground';

function App() {
  return (
    <div className="App">
      <ThreeDBackground />
      <BackgroundEffects />
      <DesktopSideArt />
      
      <div className="container">
        <Logo />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;