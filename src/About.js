import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Kal Best Contractor, Inc. (KBCI)</title>
        <meta name="description" content="Learn more about Kal Best Contractor, Inc. (KBCI), a family-owned construction company offering quality remodeling and construction services since 1990." />
        <meta name="keywords" content="construction, remodeling, kitchen, bathroom, flooring, contractor, family-owned" />
      </Helmet>
      <section id="about" className="parallax">
        <div className="about-overlay">
          <h2>About Kal Best Contractor, Inc. (KBCI)</h2>
          <p>KBCI is a medium-sized, family-owned construction company that has been delivering exceptional service since 1990.</p>
        </div>
      </section>

      <section id="highlights">
        <h3>Our Highlights</h3>
        <div className="facts-container">
          <div className="fact-item">
            <h4>30+</h4>
            <p>Years of Experience</p>
          </div>
          <div className="fact-item">
            <h4>500+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="fact-item">
            <h4>100%</h4>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>

      <section id="timeline">
        <h3>Our Journey</h3>
        <div className="timeline-container">
          <div className="timeline-item">
            <h4>1990</h4>
            <p>Founded by Kal Radwan.</p>
          </div>
          <div className="timeline-item">
            <h4>2000</h4>
            <p>Expanded services to include commercial projects.</p>
          </div>
          <div className="timeline-item">
            <h4>2010</h4>
            <p>Launched green building initiatives.</p>
          </div>
          <div className="timeline-item">
            <h4>2020</h4>
            <p>Completed 500th project.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
