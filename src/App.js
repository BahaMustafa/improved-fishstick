import React from 'react';
import './App.css'; // Import the CSS file
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider for SEO
import Navbar from './Navbar';
import Homepage from './Homepage';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import FeatureSection from './FeatureSection'; // Import the FeatureSection component
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary for handling errors

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
