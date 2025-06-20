import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Services.css';
import { FaTools, FaBath, FaLayerGroup, FaCogs, FaHome, FaHammer, FaPhone } from 'react-icons/fa';
import { animate } from 'animejs';

function Service({ title, children, className, icon, features }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  return (
    <div ref={ref} className={`service-card ${inView ? 'animate' : ''} ${className}`}>
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
      {features && (
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      <a href="mailto:kal@kbci.pro" className="service-cta">Get Quote</a>
    </div>
  );
}

function Services() {
  useEffect(() => {
    // Character animation with anime.js
    const characterElement = document.querySelector('.character-animation');
    if (characterElement) {
      // Set up the text with individual spans
      const text = "Kal Best not the cheapest, but we are the best.\nQuality craftsmanship, reliable service, and customer satisfaction guaranteed.";
      
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

  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Construction & Remodeling Services</h2>
          <p className="character-animation"></p>
          <p>Professional contractor services in Rowland Heights, CA and surrounding areas</p>
        </div>
        
        <div className="services-grid">
          <Service 
            title="Kitchen Remodeling" 
            className="kitchen-remodeling" 
            icon={<FaTools />}
            features={['Custom Cabinets', 'Countertop Installation', 'Flooring', 'Electrical & Plumbing']}
          >
            Transform your kitchen into a modern, functional space with our custom kitchen remodeling services. From design to completion, we handle every detail.
          </Service>
          
          <Service 
            title="Bathroom Renovation" 
            className="bathroom-remodeling" 
            icon={<FaBath />}
            features={['Tile Work', 'Fixture Installation', 'Vanity & Storage', 'Accessibility Features']}
          >
            Create your dream bathroom with our expert renovation services. Modern designs, quality materials, and professional installation.
          </Service>
          
          <Service 
            title="Flooring Solutions" 
            className="flooring-solutions" 
            icon={<FaLayerGroup />}
            features={['Hardwood', 'Tile & Stone', 'Laminate', 'Carpet Installation']}
          >
            High-quality flooring installation for residential and commercial properties. Wide selection of materials and expert installation.
          </Service>
          
          <Service 
            title="Concrete & Foundation" 
            className="concrete-slab-construction" 
            icon={<FaCogs />}
            features={['Foundation Work', 'Driveways', 'Patios', 'Structural Concrete']}
          >
            Professional concrete work for foundations, driveways, patios, and structural applications. Durable and precisely executed.
          </Service>
          
          <Service 
            title="Home Additions" 
            className="home-additions" 
            icon={<FaHome />}
            features={['Room Additions', 'Second Stories', 'ADUs', 'Garage Conversions']}
          >
            Expand your living space with professional home additions. From planning to completion, we make your vision reality.
          </Service>
          
          <Service 
            title="General Construction" 
            className="general-construction" 
            icon={<FaHammer />}
            features={['New Construction', 'Renovations', 'Repairs', 'Commercial Work']}
          >
            Complete construction services for residential and commercial projects. Licensed, insured, and experienced professionals.
          </Service>
        </div>
        
        <div className="services-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>Contact us today for a free consultation and estimate</p>
          <div className="cta-buttons">
            <a href="mailto:kal@kbci.pro" className="btn btn-primary">Schedule Consultation</a>
            <a href="tel:(626) 393-2638" className="btn btn-secondary">
              <FaPhone /> (626) 393-2638
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
