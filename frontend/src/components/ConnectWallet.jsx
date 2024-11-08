// ConnectWallet.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import './ConnectWallet.css';

const ConnectWallet = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [isConnected, setIsConnected] = useState(false); // Track connection status

  // Function to connect to MetaMask
  const connectMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected to MetaMask:', accounts[0]);
        setIsConnected(true); // Set connected state to true
        navigate('/homepage'); // Redirect to the Homepage after connecting
      } catch (error) {
        console.error('Failed to connect to MetaMask:', error);
        alert('Failed to connect to MetaMask. Please try again.');
      }
    } else {
      alert('MetaMask is not installed. Please install it to connect.');
    }
  };

  // Automatically check for an existing MetaMask connection
  useEffect(() => {
    const checkMetaMaskConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setIsConnected(true);
          navigate('/homepage'); // Redirect if already connected
        }
      }
    };

    checkMetaMaskConnection();
  }, [navigate]);

  return (
    <div className="connect-wallet-container">
      <h2 className="wallet-title">Connect your wallet to proceed</h2>
      <p className="wallet-note">MetaMask is the only wallet that can connect right now.</p>
      <div className="wallet-options">
        <div className="wallet-option" onClick={connectMetaMask}>
          <img src="./images/metamask.png" alt="MetaMask" className="wallet-icon" />
          <span className="wallet-name">MetaMask</span>
          <button className="connect-button">Connect</button>
        </div>
        {/* Other wallet options, disabled for now */}
        <div className="wallet-option" onClick={() => alert('MetaMask is the only wallet that can connect right now.')}>
          <img src="./images/arbitrum.png" alt="Arbitrum" className="wallet-icon" />
          <span className="wallet-name">Arbitrum</span>
          <button className="connect-button" disabled>Connect</button>
        </div>
        <div className="wallet-option" onClick={() => alert('MetaMask is the only wallet that can connect right now.')}>
          <img src="./images/ethereum.png" alt="Ethereum" className="wallet-icon" />
          <span className="wallet-name">Ethereum</span>
          <button className="connect-button" disabled>Connect</button>
        </div>
        <div className="wallet-option" onClick={() => alert('MetaMask is the only wallet that can connect right now.')}>
          <img src="./images/metanexus.png" alt="MetaNexus" className="wallet-icon" />
          <span className="wallet-name">MetaNexus</span>
          <button className="connect-button" disabled>Connect</button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
