// TrendingCollections.jsx
import React from 'react';
import './MetaMall.css';

const TrendingCollections = () => {
  return (
    <div className="trending-collections">
      <h3>Trending Collections</h3>
      <div className="collections-grid">
        {/* Map through collection items */}
        <div className="collection-item">Collection 1</div>
        <div className="collection-item">Collection 2</div>
        <div className="collection-item">Collection 3</div>
      </div>
    </div>
  );
};

export default TrendingCollections;
