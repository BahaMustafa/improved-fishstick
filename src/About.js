import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './About.css';
import { FaAward, FaUsers, FaHandshake, FaTools, FaHome, FaCertificate } from 'react-icons/fa';
import { animate } from 'animejs';

function About() {
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

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  return (
    <>
      <Helmet>
        <title>About Kal Best Contractor, Inc (KBCI) - Licensed General Contractor Rowland Heights CA Since 1990</title>
        <meta name="description" content="Learn about Kal Best Contractor Inc (KBCI), a family-owned licensed general contractor serving Rowland Heights, CA since 1990. 30+ years of quality construction and remodeling experience." />
        <meta name="keywords" content="about KBCI, family owned contractor, licensed contractor Rowland Heights, construction company since 1990, general contractor CA" />
      </Helmet>
      
      {/* Hero Section */}
      <section id="about" className="about-hero">
        <div ref={heroRef} className={`hero-content ${heroInView ? 'animate' : ''}`}>
          <div className="container">
            <div className="about-text">
              <h1>About Kal Best Contractor, Inc.</h1>
              <p className="subtitle">Building Excellence Since 1990</p>
              <p className="description">
                Kal Best Contractor, Inc (KBCI) is a family-owned, licensed general contractor that has been delivering exceptional 
                construction and remodeling services to Rowland Heights and surrounding communities for over 
                three decades. We pride ourselves on quality craftsmanship, reliable service, and building 
                lasting relationships with our clients.
              </p>
              
              <div className="about-features">
                <div className="feature">
                  <FaCertificate className="feature-icon" />
                  <div>
                    <h4>Licensed & Insured</h4>
                    <p>CA License #1078043</p>
                  </div>
                </div>
                <div className="feature">
                  <FaUsers className="feature-icon" />
                  <div>
                    <h4>Family Owned</h4>
                    <p>Three generations of excellence</p>
                  </div>
                </div>
                <div className="feature">
                  <FaHandshake className="feature-icon" />
                  <div>
                    <h4>Local Experts</h4>
                    <p>Serving Rowland Heights & beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div ref={statsRef} className={`stats-grid ${statsInView ? 'animate' : ''}`}>
            <div className="stat-card">
              <div className="stat-icon">
                <FaAward />
              </div>
              <h3>30+</h3>
              <p>Years of Experience</p>
              <span>Trusted since 1990</span>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <FaTools />
              </div>
              <h3>500+</h3>
              <p>Projects Completed</p>
              <span>Residential & Commercial</span>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <FaUsers />
              </div>
              <h3>100%</h3>
              <p>Customer Satisfaction</p>
              <span>Quality guaranteed</span>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <FaHome />
              </div>
              <h3>24/7</h3>
              <p>Emergency Service</p>
              <span>Always here for you</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey of Excellence</h2>
            <p>Three decades of growth, innovation, and commitment to quality</p>
          </div>
          
          <div ref={timelineRef} className={`timeline ${timelineInView ? 'animate' : ''}`}>
            <div className="timeline-item">
              <div className="timeline-year">1990</div>
              <div className="timeline-content">
                <h4>Company Founded</h4>
                <p>Kal Radwan established Kal Best Contractor, Inc (KBCI) with a vision to provide exceptional construction services to the local community.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2000</div>
              <div className="timeline-content">
                <h4>Commercial Expansion</h4>
                <p>Expanded our services to include commercial projects, serving businesses throughout Southern California.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h4>Green Building Initiative</h4>
                <p>Launched sustainable building practices and eco-friendly construction solutions for environmentally conscious clients.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>500th Project Milestone</h4>
                <p>Celebrated completing our 500th project, marking three decades of excellence and customer satisfaction.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>Digital Innovation</h4>
                <p>Embracing modern technology and digital solutions to better serve our clients and streamline our processes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h3>Ready to Work with Kal Best Contractor, Inc (KBCI)?</h3>
            <p>Experience the difference that 30+ years of expertise makes. Contact us today for your next construction or remodeling project.</p>
            <div className="cta-buttons">
              <a href="mailto:kal@kbci.pro" className="btn btn-primary">Start Your Project</a>
              <a href="tel:(626) 393-2638" className="btn btn-secondary">Call (626) 393-2638</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
