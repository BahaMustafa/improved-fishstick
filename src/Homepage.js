import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Homepage.css';
import { FaPhone, FaEnvelope, FaAward, FaUsers, FaTools } from 'react-icons/fa';

function Homepage() {
  useEffect(() => {
    // Add animation classes after component mounts
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-in');
      }, index * 200); // Stagger animations by 200ms
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>General Contractor Rowland Heights CA | Kitchen & Bathroom Remodeling | KBCI</title>
        <meta name="description" content="Professional general contractor in Rowland Heights, CA 91748. Specializing in kitchen remodeling, bathroom renovations, flooring, and concrete work. Licensed contractor since 1990." />
        <meta name="keywords" content="general contractor Rowland Heights, kitchen remodeling 91748, bathroom renovation CA, flooring contractor, concrete slab construction, home remodeling Rowland Heights" />
      </Helmet>
      <section id="home">
        <div className="background-video-holder">
          <video autoPlay muted loop playsInline>
            <source src="https://res.cloudinary.com/dh19j0ik1/video/upload/1817871-hd_1920_1080_30fps_tcqlab.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Professional Construction Services by KBCI" />
          </video>
          <div className="overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="animate-on-load">Professional Construction & Remodeling</h1>
            <p className="hero-subtitle animate-on-load">Serving Rowland Heights & Surrounding Areas Since 1990</p>
            <p className="hero-description animate-on-load">We're not the cheapest, but we are the best. Quality craftsmanship, reliable service, and customer satisfaction guaranteed.</p>
            
            <div className="cta-buttons animate-on-load">
              <a href="mailto:kal@kbci.pro" className="btn btn-primary">Get Free Quote</a>
              <a href="tel:(626) 393-2638" className="btn btn-secondary">
                <FaPhone /> Call Now
              </a>
            </div>
          </div>
          
          <div className="trust-badges">
            <div className="trust-badge animate-on-load">
              <FaAward className="badge-icon" />
              <span>Licensed</span>
              <span>#1078043</span>
            </div>
            <div className="trust-badge animate-on-load">
              <FaUsers className="badge-icon" />
              <span>30+ Years</span>
              <span>Experience</span>
            </div>
            <div className="trust-badge animate-on-load">
              <FaTools className="badge-icon" />
              <span>Quality</span>
              <span>Guaranteed</span>
            </div>
          </div>
        </div>
        
        <div className="quick-stats animate-on-load">
          <div className="stat">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>30+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Licensed & Insured</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
