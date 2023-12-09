import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Services.css';

function Service({ title, children, className }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  // Combine the general service class, animation trigger, and specific class name
  const serviceClassName = `service ${inView ? 'service-animate' : ''} ${className}`;

  return (
    <div ref={ref} className={serviceClassName}>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <Service title="Kitchen Remodeling" className="kitchen-remodeling">
        Transform your kitchen into a modern, functional space with our custom kitchen remodeling services. From cabinets to countertops, we handle every aspect to create your dream kitchen.
      </Service>
      <Service title="Bathroom Remodeling" className="bathroom-remodeling">
        Upgrade your bathroom with our expert remodeling services. Whether it's a luxury spa-like retreat or a sleek, contemporary design, we craft spaces that blend style with functionality.
      </Service>
      <Service title="Flooring Solutions" className="flooring-solutions">
        Discover a range of flooring options with us. From classic hardwood to modern tiles, we provide high-quality flooring that complements the aesthetics of your home or office.
      </Service>
      <Service title="Concrete Slab Construction" className="concrete-slab-construction">
        Our team specializes in concrete slab construction for various applications, ensuring durability and precision in every project, be it for foundations or outdoor spaces.
      </Service>
      {/* Add more content or additional services as needed */}
    </section>
  );
}

export default Services;
