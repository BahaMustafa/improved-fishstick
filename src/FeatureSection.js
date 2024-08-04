import React from 'react';
import { Helmet } from 'react-helmet-async';
import './FeatureSection.css';

function FeatureSection() {
  return (
    <>
      <Helmet>
        <title>Our Features - Kal Best Contractor, Inc. (KBCI)</title>
        <meta name="description" content="Explore the features of Kal Best Contractor, Inc. (KBCI) including kitchen remodeling, luxury bathroom renovations, and premium flooring solutions." />
        <meta name="keywords" content="features, kitchen remodeling, bathroom renovations, flooring solutions, construction" />
      </Helmet>
      <div className="feature-section">
        <div className="feature" style={{ backgroundImage: "url('https://github.com/BahaMustafa/improved-fishstick/blob/main/public/Untitled%20design%20(1).png?raw=true')" }}>
          <div className="feature-content">
            <h3>KITCHEN REMODELING EXPERTS</h3>
            <hr />
            <p>Transforming kitchens into modern, functional spaces tailored to your lifestyle.</p>
          </div>
        </div>
        <div className="feature" style={{ backgroundImage: "url('https://github.com/BahaMustafa/improved-fishstick/blob/main/public/Untitled%20design%20(2).png?raw=true')" }}>
          <div className="feature-content">
            <h3>LUXURY BATHROOM REMODELING</h3>
            <hr />
            <p>Experience the blend of comfort and style with our custom bathroom renovations.</p>
          </div>
        </div>
        <div className="feature" style={{ backgroundImage: "url('https://github.com/BahaMustafa/improved-fishstick/blob/main/public/Untitled%20design%20(3).png?raw=true')" }}>
          <div className="feature-content">
            <h3>PREMIUM FLOORING SOLUTIONS</h3>
            <hr />
            <p>From hardwood to tile, we provide high-quality flooring solutions for your home.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
