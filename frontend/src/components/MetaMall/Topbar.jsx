// Topbar.jsx
import React from 'react';
import './MetaMall.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <input type="text" placeholder="Search NFT, Collection or Artist" />
      <div className="balance">1493 ETH</div>
      <div className="profile">
        <span>👤 Lukman Faruk</span>
      </div>
    </div>
  );
};

export default Topbar;
