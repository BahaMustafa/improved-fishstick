import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { animate } from 'animejs';

function Testimonial({ text, rating, author, image }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
  ));

  return (
    <div className="testimonial">
      <div className="testimonial-image-container">
        {image ? (
          <img src={image} alt={author} className="testimonial-image" />
        ) : (
          <div className="testimonial-image-placeholder">
            <div className="placeholder-icon">👤</div>
            <span className="placeholder-text">Add Photo</span>
          </div>
        )}
      </div>
      <blockquote>"{text}"</blockquote>
      <div className="testimonial-author">- {author}</div>
      <div className="star-rating">{stars}</div>
    </div>
  );
}

function Testimonials() {
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
  const testimonialsData = [
    { 
      text: "Great service, the gentleman knows his craft and he took care of the paperwork.", 
      rating: 5, 
      author: "Yahya Ahmed",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKSHx9W-y42yQL5QSVpamCsOlLZ6thiNrIXaysNBhvvSo2DQry3=w36-h36-p-rp-mo-br100" // Add image path here later
    },
    { 
      text: "I had a great experience with this engineering contracting company. Their professionalism and attention to detail were impressive. The project was completed on time and within budget. Highly recommended.", 
      rating: 5, 
      author: "Salah Shehata",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUNEzrGUtau96co53Xvwr5YyCyAAXI-QzPZcmcUXY311zkCUGjm=w36-h36-p-rp-mo-br100" // Add image path here later
    },
    { 
      text: "Great service. Always on time. Very happy with the outcome of the project. My wife and I pleased with the workmanship. I highly recommend Kal to my friends and anyone looking to do home projects. Thank you again for your commitment to complete the project on time trust and nice work.", 
      rating: 5, 
      author: "Sam Qasem (Aliaa Kassem)",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKbPwuTf0SHQUp4siXAfIWunMVQgy1D0KUSbkIrEVuTrB9_Ew=w36-h36-p-rp-mo-br100" // Add image path here later
    },
    { 
      text: "Kal, is one of the most professional individuals I have hired. The entire project was completed on time without any issues. He always explained what he was doing and how.", 
      rating: 5, 
      author: "Aziz Elattar",
      image: "https://lh3.googleusercontent.com/a/ACg8ocIEvphW7IzHj3mndkVkQf9TFXyMh9kxkBCCVZszQF5SUYO4hw=w36-h36-p-rp-mo-br100" // Add image path here later
    },
    { 
      text: "Their company is excellent, their prices are good and reasonable, and the owner deals with honesty and integrity.", 
      rating: 5, 
      author: "Karim Zlali",
      image: "https://lh3.googleusercontent.com/a/ACg8ocLnurMM9VVZT15TulsGSWgGbtLyL1P_IFezTXm4PL9opw5N8A=w36-h36-p-rp-mo-br100" // Add image path here later
    },
    { 
      text: "Great service honest. He completed the work on time. He uses good product.", 
      rating: 5, 
      author: "Tony Khoury",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKgDkmtZ2JSlqN0KwVvjSjVtDy__qastnjAs-AIWCXzX0lFEw=w36-h36-p-rp-mo-br100" // Add image path here later
    },
    { 
      text: "It might sound easy to build something but in my opinion working with kal showed me he is really the best contractor.", 
      rating: 5, 
      author: "Omar Elghareb",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjW7Z_7FN2EkXHVmRusHKIcjUsDoqcZzzh98kGCzfUVr88AtMRT6RQ=w36-h36-p-rp-mo-br100" // Add image path here later
    },
    { 
      text: "The best contracting company in whole west coast god bless you and thank you for your hard work.", 
      rating: 5, 
      author: "Mowafaq Maraei",
      image: "https://lh3.googleusercontent.com/a/ACg8ocJBTFMS28g_PS5igvdGXMwB7C9dcU8m3YpPPhONcNimKLz0zg=w36-h36-p-rp-mo-br100" // Add image path here later
    },
    { 
      text: "Very good company their work is really nice.", 
      rating: 5, 
      author: "Tarek Aly",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKDyVNh5KXf-hfXw9hw4MaSryn2LkBTD9kTpdtm9sqzgZADQg=w36-h36-p-rp-mo-br100" // Add image path here later
    },
    { 
      text: "I had an amazing experience working with Kal. The work was done on time with attention to details.", 
      rating: 5, 
      author: "Nazem Taxman",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKm8Isxk-M8B8QnQGq6r3FkD6ZBLHPWhR17E81JUdGLwggqww=w36-h36-p-rp-mo-br100" // Add image path here later
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
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
    <section id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p className="character-animation"></p>
        </div>
      </div>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <Testimonial 
            key={index} 
            text={testimonial.text} 
            rating={testimonial.rating}
            author={testimonial.author}
            image={testimonial.image}
          />
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
