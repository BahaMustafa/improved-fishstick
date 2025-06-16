import React from 'react';
import { Helmet } from 'react-helmet-async';
import './FeatureSection.css';

function FeatureSection() {
  const features = [
    {
      title: "Kitchen Remodeling Experts",
      description: "Transforming kitchens into modern, functional spaces tailored to your lifestyle."
    },
    {
      title: "Luxury Bathroom Remodeling",
      description: "Experience the blend of comfort and style with our custom bathroom renovations."
    },
    {
      title: "Premium Flooring Solutions",
      description: "From hardwood to tile, we provide high-quality flooring solutions for your home."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Features - Kal Best Contractor, Inc. (KBCI)</title>
        <meta name="description" content="Explore the features of Kal Best Contractor, Inc. (KBCI) including kitchen remodeling, luxury bathroom renovations, and premium flooring solutions." />
        <meta name="keywords" content="features, kitchen remodeling, bathroom renovations, flooring solutions, construction" />
      </Helmet>
      <section className="feature-section">
        <div className="section-header">
          <h2>Our Expertise</h2>
          <p>Discover what makes us the premier choice for your construction needs</p>
        </div>
        <div className="grid">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="shine"></div>
              <div className="background">
                <div className="tiles">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`tile tile-${i + 1}`}></div>
                  ))}
                </div>
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FeatureSection;
