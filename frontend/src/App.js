// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ConnectWallet from './components/ConnectWallet';
import HomePage from './components/HomePage';
import MetaMall from './components/MetaMall/MetaMall'; // Specify the exact file
import Esports from './components/esports/Esports';
import PlayToken from './components/PlayToken';
import SportsPool from './components/SportsPool';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/metamall" element={<MetaMall />} /> {/* Route for MetaMall */}
        <Route path="/esports" element ={ < Esports/>}/>
        <Route path="/Playtoken" element ={<PlayToken/>}/>
        <Route path ="/Sportspool"element ={<SportsPool/>}/>
      </Routes>
    </Router>
  );
};

export default App;
