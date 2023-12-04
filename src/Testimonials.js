import React from 'react';
import './Testimonials.css'; // Make sure to create and import the corresponding CSS file

function Testimonial({ text, rating }) {
  // Create an array of stars based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < rating ? '★' : '☆';
  }).join('');

  return (
    <div className="testimonial">
      <blockquote>{text}</blockquote>
      <div className="star-rating">{stars}</div>
    </div>
  );
}

function Testimonials() {
  // Sample data for testimonials
  const testimonialsData = [
    { text: "This is an amazing company!", rating: 5 },
    { text: "Excellent service and friendly staff.", rating: 4 },
    // ...more testimonials
  ];

  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      {testimonialsData.map((testimonial, index) => (
        <Testimonial key={index} text={testimonial.text} rating={testimonial.rating} />
      ))}
    </section>
  );
}

export default Testimonials;
