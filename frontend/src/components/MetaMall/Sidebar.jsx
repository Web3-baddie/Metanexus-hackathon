// Sidebar.jsx
import React from 'react';
import './MetaMall.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>NFT Collection</h2>
      <ul>
        <li>Dashboard</li>
        <li>NFT Store</li>
        <li>Active Bids</li>
        <li>Favorites</li>
        <li>Wallet</li>
        <li>My Collectibles</li>
        <li>Settings</li>
        <li className="logout">Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
