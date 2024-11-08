// TrendingCollectors.jsx
import React from 'react';
import './TrendingCollector.css'; // Import the CSS file

const TrendingCollectors = () => {
  const collectors = [
    {
      name: "Henry Danger",
      username: "henrydanger",
      profilePic: "path/to/profilePic1.jpg", // Replace with actual image path
      isVerified: true
    },
    {
      name: "Umar Gana",
      username: "umargana",
      profilePic: "path/to/profilePic2.jpg",
      isVerified: true
    },
    {
      name: "Nurudeen Faruk",
      username: "nurudeenfaruk",
      profilePic: "path/to/profilePic3.jpg",
      isVerified: true
    },
    {
      name: "Lukman Faruk",
      username: "lukmanfaruk",
      profilePic: "path/to/profilePic4.jpg",
      isVerified: false
    },
    {
      name: "Imran Umar",
      username: "imranumar",
      profilePic: "path/to/profilePic5.jpg",
      isVerified: true
    }
  ];

  return (
    <div className="collectors-container">
      <h3 className="collectors-heading">Trending Collectors</h3>
      {collectors.map((collector, index) => (
        <div key={index} className="collector-item">
          <img
            src={collector.profilePic}
            alt={collector.name}
            className="collector-profile-pic"
          />
          <div className="collector-info">
            <div className="collector-name">
              {collector.name} 
              {collector.isVerified && <span className="verified-icon">✔</span>}
            </div>
            <div className="collector-username">@{collector.username}</div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default TrendingCollectors;
