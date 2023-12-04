import React from 'react';
import './App.css'; // Import the CSS file
import Navbar from './Navbar';
import Homepage from './Homepage';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import FeatureSection from './FeatureSection'; // Import the FeatureSection component

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <FeatureSection /> 
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
