import React, { useState } from 'react';
import './Portfolio.css';
import portfolioItems from './portfolioItems.json';

const PortfolioItem = ({ item, onImageClick }) => {
  if (item.type === 'image') {
    return (
      <div className="portfolio-item">
        <div className="portfolio-item-image" onClick={() => onImageClick(item)}>
          <img src={item.src} alt={item.alt} />
          <div className="portfolio-item-overlay">
            <span className="view-text">Click to Zoom</span>
          </div>
        </div>
        <div className="portfolio-item-content">
          <p>{item.description}</p>
        </div>
      </div>
    );
  } else if (item.type === 'video') {
    return (
      <div className="portfolio-item">
        <div className="portfolio-item-video">
          <iframe
            src={item.src}
            frameBorder="0"
            allowFullScreen
            title={item.alt}
            width="560" 
            height="315"
          ></iframe>
        </div>
        <div className="portfolio-item-content">
          <p>{item.description}</p>
        </div>
      </div>
    );
  }
  return null;
};

const ImageModal = ({ image, isOpen, onClose }) => {
  if (!isOpen || !image) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <img src={image.src} alt={image.alt} className="image-modal-img" />
        <div className="image-modal-info">
          <h3>{image.category}</h3>
          <p>{image.description}</p>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const groupItemsByCategory = (items) => {
    return items.reduce((acc, item) => {
      const { category } = item;
      acc[category] = acc[category] || [];
      acc[category].push(item);
      return acc;
    }, {});
  };

  const groupedPortfolioItems = groupItemsByCategory(portfolioItems);

  return (
    <div id="portfolio" className="portfolio-container">
      <div className="portfolio-header">
        <h2>Our Portfolio</h2>
        <p className="portfolio-subtitle">Explore our diverse range of construction projects</p>
      </div>
      
      <div className="accordion-container">
        {Object.keys(groupedPortfolioItems).map((category, index) => (
          <div key={category} className="accordion-item">
            <div 
              className={`accordion-header ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === category ? null : category)}
            >
              <div className="accordion-title">
                <h3>{category}</h3>
                <span className="item-count">({groupedPortfolioItems[category].length} projects)</span>
              </div>
              <div className="accordion-arrow">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={activeCategory === category ? 'rotated' : ''}
                >
                  <path 
                    d="M6 9L12 15L18 9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            
            <div className={`accordion-content ${activeCategory === category ? 'expanded' : ''}`}>
              <div className="portfolio-grid">
                {groupedPortfolioItems[category].map((item, itemIndex) => (
                  <PortfolioItem 
                    item={item} 
                    key={itemIndex} 
                    onImageClick={handleImageClick}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageModal 
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Portfolio;
