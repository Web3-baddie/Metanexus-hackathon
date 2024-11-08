import React from 'react';
import './MetaMall.css';

const MetaMall = () => {
  return (
    <div className="metaMall-page">
      {/* Top Bar */}
      <div className="top-bar">
        <h1>METAMALL</h1>
        <input type="text" className="search-bar" placeholder="Search NFTs or Creators..." />
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="User" />
          <span>Username</span>
        </div>
      </div>

      <div className="main-container">
        {/* Left Container */}
        <div className="container-left">
          <h2 className="sidebar-heading">Marketplace</h2>
          <ul>
            <li>🏠 Dashboard</li>
            <li>🛒 NFT Store</li>
            <li>❤️ My Favorites</li>
            <li>🔨 Active Bids</li>
            <li>⚙️ Settings</li>
            <li>💰 Wallet</li>
            <li>📦 My Collectibles</li>
          </ul>
        </div>

        {/* Middle Container with two equal parts */}
        <div className="container-middle">
          {/* Discover Section */}
          <div className="discover-section">
            <div className="discover-content">
              <h2>Discover, Earn, Create, and Sell Your Own NFTs</h2>
              <button className="discover-button">Discover</button>
            </div>
          </div>

          {/* Trending Collections Section */}
          <div className="trending-collections">
            <h3 className="trending-title">Trending Collections</h3>
            <div className="collections-grid">
              <div className="collection-card">Art</div>
              <div className="collection-card">Collectibles</div>
              <div className="collection-card">Gaming</div>
              <div className="collection-card">Music</div>
            </div>
          </div>
        </div>

        {/* Right Container with multiple profiles */}
        <div className="container-right">
          <div className="profile-section trending-collectors">
            <h4>Trending Collectors</h4>
            <div className="user-profile">
              <img src="https://via.placeholder.com/40" alt="John Doe" />
              <h5>John Doe</h5>
              <button className="follow-button">Follow</button>
            </div>
            <div className="user-profile">
              <img src="https://via.placeholder.com/40" alt="Alex Kim" />
              <h5>Alex Kim</h5>
              <button className="follow-button">Follow</button>
            </div>
            <div className="user-profile">
              <img src="https://via.placeholder.com/40" alt="Chris Lee" />
              <h5>Chris Lee</h5>
              <button className="follow-button">Follow</button>
            </div>
          </div>

          <div className="profile-section top-creators">
            <h4>Top Creators</h4>
            <div className="user-profile">
              <img src="https://via.placeholder.com/40" alt="Jane Smith" />
              <h5>Jane Smith</h5>
              <button className="follow-button">Follow</button>
            </div>
            <div className="user-profile">
              <img src="https://via.placeholder.com/40" alt="Emily Tan" />
              <h5>Emily Tan</h5>
              <button className="follow-button">Follow</button>
            </div>
            <div className="user-profile">
              <img src="https://via.placeholder.com/40" alt="Michael Brown" />
              <h5>Michael Brown</h5>
              <button className="follow-button">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaMall;
