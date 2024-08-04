import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Homepage.css';

function Homepage() {
  return (
    <>
      <Helmet>
        <title>Home - Kal Best Contractor, Inc. (KBCI)</title>
        <meta name="description" content="Welcome to Kal Best Contractor, Inc. (KBCI). We specialize in high-quality construction and remodeling services for your home or business. Explore our services and portfolio." />
        <meta name="keywords" content="home, construction, remodeling, contractor, kitchen remodeling, bathroom renovations, flooring solutions" />
      </Helmet>
      <section id="home">
        <div className="background-image-holder">
          <img src="https://github.com/BahaMustafa/improved-fishstick/blob/main/public/Untitled%20design.png?raw=true" alt="Kal Best Contractor" />
        </div>
        <div className="text-content">
          <h1>Welcome to Kal Best Contractor, Inc. (KBCI)</h1>
          <p>We are not the cheapest but the best.</p>
          <p>Explore our site to learn more about our services, view our portfolio, and discover why KBCI is the preferred choice for clients seeking quality and professionalism in construction and remodeling.</p>
        </div>
        <div className="trust-badge">
          <div className="text-container">
            <span className="trust-text">EARNING TRUST</span>
            <span className="since">SINCE</span>
            <span className="year">1990</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
