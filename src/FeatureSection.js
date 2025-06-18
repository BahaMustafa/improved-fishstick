import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './FeatureSection.css';
import { animate } from 'animejs';

function FeatureSection() {
  useEffect(() => {
    // Character animation with anime.js
    const characterElement = document.querySelector('.character-animation');
    if (characterElement) {
      // Set up the text with individual spans
      const text = "We're not the cheapest, but we are the best.\nQuality craftsmanship, reliable service, and customer satisfaction guaranteed.";
      
      characterElement.innerHTML = text.split('').map(char => {
        if (char === '\n') return '<br>';
        return `<span>${char === ' ' ? '&nbsp;' : char}</span>`;
      }).join('');
      
      // Apply anime.js animation
      setTimeout(() => {
        animate('.character-animation span', {
          // Property keyframes
          y: [
            { to: '-2.75rem', ease: 'outExpo', duration: 600 },
            { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
          ],
          // Property specific parameters
          rotate: {
            from: '-1turn',
            delay: 0
          },
          delay: (_, i) => i * 50, // Function based value
          ease: 'inOutCirc',
          loopDelay: 1000,
          loop: true
        });
      }, 400);
    }
  }, []);

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
