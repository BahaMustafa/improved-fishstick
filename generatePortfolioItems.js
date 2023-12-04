// generatePortfolioItems.js

const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '/public/Kitchen & large areas work');
let portfolioItems = [];

fs.readdirSync(directoryPath, { withFileTypes: true }).forEach(categoryDir => {
  if (categoryDir.isDirectory()) {
    const categoryPath = path.join(directoryPath, categoryDir.name);
    fs.readdirSync(categoryPath).forEach(file => {
      portfolioItems.push({
        src: `/Kitchen & large areas work/${categoryDir.name}/${file}`,
        alt: categoryDir.name,
        description: `Description for ${categoryDir.name}`,
        category: categoryDir.name
      });
    });
  }
});

fs.writeFileSync('src/portfolioItems.json', JSON.stringify(portfolioItems, null, 2));
