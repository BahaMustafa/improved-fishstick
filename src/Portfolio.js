import React, { useState } from 'react';
import './Portfolio.css';
import portfolioItems from './portfolioItems.json';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(null);

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
      <h2>Portfolio</h2>
      {Object.keys(groupedPortfolioItems).map((category) => (
        <div key={category} className="portfolio-category">
          <h3
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(activeCategory === category ? null : category)}
          >
            {category}
          </h3>
          {activeCategory === category && (
            <div className="portfolio-grid">
              {groupedPortfolioItems[category].map((item, index) => (
                <div className="portfolio-item" key={index} onClick={() => {/* Function to open modal or lightbox */}}>
                  <img src={item.src} alt={item.alt} />
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;