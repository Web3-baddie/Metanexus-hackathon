// BrowseCategories.jsx
import React from 'react';
import './MetaMall.css';

const BrowseCategories = () => {
  return (
    <div className="browse-categories">
      <h3>Browse Categories</h3>
      <div className="categories-grid">
        <div className="category-item">Art</div>
        <div className="category-item">Music</div>
        <div className="category-item">Sport</div>
        <div className="category-item">Photo</div>
      </div>
    </div>
  );
};

export default BrowseCategories;
