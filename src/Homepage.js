import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <section id="home">
      <div className="background-image-holder">
        <img src="https://github.com/BahaMustafa/improved-fishstick/blob/main/public/Untitled%20design.png?raw=true" alt="Background"/>
      </div>
      <div className="text-content">
        <h1>Welcome to Kal Best Contractor, Inc. (KBCI)</h1>
        <p>We are not the cheapest but the best.</p>
        <p>Explore our site to learn more about our services, view our portfolio, and discover why KBCI is the preferred choice for clients seeking quality and professionalism in construction and remodeling.</p>
      </div>
      {/* Add more content, images, or call-to-action buttons as needed */}
    </section>
  );
}

export default Homepage;
