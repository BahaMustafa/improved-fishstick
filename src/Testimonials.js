import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Testimonial({ text, rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
  ));

  return (
    <div className="testimonial">
      <blockquote>{text}</blockquote>
      <div className="star-rating">{stars}</div>
    </div>
  );
}

function Testimonials() {
  const testimonialsData = [
    { text: "This is an amazing company!", rating: 5 },
    { text: "The work exceeded our expectations.", rating: 5 },
    { text: "Professional and timely service. Highly recommended!", rating: 5 },
    { text: "They transformed our home beautifully. We're so happy!", rating: 5 },
    { text: "The team was very skilled and detail-oriented.", rating: 5 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: dots => (
      <div style={{ bottom: '20px' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '10px',
          height: '10px',
          background: '#ffc107',
          borderRadius: '50%',
        }}
      />
    ),
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <Testimonial 
            key={index} 
            text={testimonial.text} 
            rating={testimonial.rating}
          />
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
