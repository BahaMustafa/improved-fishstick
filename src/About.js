import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Kal Best Contractor, Inc. (KBCI)</title>
        <meta name="description" content="Learn more about Kal Best Contractor, Inc. (KBCI), a family-owned construction company offering quality remodeling and construction services since 1990." />
        <meta name="keywords" content="construction, remodeling, kitchen, bathroom, flooring, contractor, family-owned" />
      </Helmet>
      <section id="about">
        <h2>About Kal Best Contractor, Inc. (KBCI)</h2>
        <p>KBCI is a medium-sized, family-owned construction company that has been delivering exceptional service since 1990. Founded and led by Kal Radwan, a general contractor and consulting engineer, we pride ourselves on our commitment to quality and customer satisfaction.</p>
        <p>Our expertise spans a wide range of services, including kitchen remodeling, bathroom renovations, flooring solutions, and concrete slab construction. At KBCI, we understand that every project is unique. That's why we work closely with our clients, offering tailored solutions to meet their specific needs and preferences.</p>
        <p>Our team of skilled professionals is equipped with the knowledge and experience to handle projects of all sizes and complexities. We are not just another construction company; we are a partner you can trust to bring your vision to life.</p>
        <p>We are licensed and bonded, ensuring that all our work meets the highest standards of safety and quality. Our commitment to excellence has earned us a reputation as one of the most reliable and respected construction companies in the area.</p>
        <p>For us, it's not just about building structures, but about building lasting relationships with our clients. We believe in transparent communication, meticulous attention to detail, and a customer-first approach.</p>
      </section>
    </>
  );
}

export default About;
