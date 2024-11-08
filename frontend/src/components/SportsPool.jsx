import React, { useState } from 'react';
import './SportsPool.css';

const SportsPool = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [betAmount, setBetAmount] = useState('');

  const games = [
    { id: 1, name: "DOTA-2 League", time: "10:00 AM", players: ["Max", "Billy", "Magnus"], imageUrl: "https://i.pinimg.com/236x/b0/3a/9a/b03a9ab25a3e9449a6bc4645f97ba213.jpg" },
    { id: 2, name: "Racing League", time: "11:00 AM", players: ["Player 6", "Player 7", "Player 8", "Player 9", "Player 10"], imageUrl: "https://i.pinimg.com/474x/ff/8e/65/ff8e65f546e61bc74615aacd5900af02.jpg" },
    { id: 3, name: "Soccer League", time: "12:00 PM", players: ["Player 11", "Player 12", "Player 13", "Player 14", "Player 15"], imageUrl: "https://i.pinimg.com/236x/d8/de/ce/d8dece7dc0f506ff815075991dec2cb1.jpg" },
    { id: 4, name: "Basketball League", time: "1:00 PM", players: ["Player 16", "Player 17", "Player 18", "Player 19", "Player 20"], imageUrl: "https://i.pinimg.com/474x/95/09/29/950929c87f80f37e49c07e1318a8572e.jpg" },
    { id: 6, name: "Hockey League", time: "3:00 PM", players: ["Player 26", "Player 27", "Player 28", "Player 29", "Player 30"], imageUrl: "https://i.pinimg.com/236x/90/6e/fb/906efbba7f9d0f9bf062b42f4797a76a.jpg" },
    { id: 6, name: "Hockey League", time: "3:00 PM", players: ["Player 26", "Player 27", "Player 28", "Player 29", "Player 30"], imageUrl: "https://i.pinimg.com/474x/8a/4b/14/8a4b14c1cf81ca965499d15074828467.jpg" },
    { id: 7, name: "Tennis League", time: "4:00 PM", players: ["Player 31", "Player 32", "Player 33", "Player 34", "Player 35"], imageUrl: "https://i.pinimg.com/236x/bb/72/e7/bb72e70c48e3c9eea5fa19463cb0414a.jpg" },
    { id: 8, name: "Golf League", time: "5:00 PM", players: ["Player 36", "Player 37", "Player 38", "Player 39", "Player 40"], imageUrl: "https://i.pinimg.com/236x/d4/eb/2d/d4eb2d8ee516f013d3324f317b774305.jpg" },
    { id: 9, name: "Cricket League", time: "6:00 PM", players: ["Player 41", "Player 42", "Player 43", "Player 44", "Player 45"], imageUrl: "https://i.pinimg.com/236x/29/e4/dd/29e4dd23020e2c948f3d10fe4fd7a199.jpg" },
    { id: 11, name: "Boxing League", time: "8:00 PM", players: ["Player 51", "Player 52", "Player 53", "Player 54", "Player 55"], imageUrl: "https://i.pinimg.com/236x/4b/54/bf/4b54bfb11a3eca38c70bc736e808dbb7.jpg" },
    { id: 12, name: "MMA League", time: "9:00 PM", players: ["Player 56", "Player 57", "Player 58", "Player 59", "Player 60"], imageUrl: "https://i.pinimg.com/236x/f4/06/b8/f406b88de5b6e3fd6b79360e32572c19.jpg" },
  ];

  const handleGameClick = (game) => {
    setSelectedGame(game);
    setBetAmount('');
  };

  const handleBet = () => {
    alert(`You placed a bet of ${betAmount} on ${selectedGame.name} for ${selectedGame.selectedPlayer}`);
    setSelectedGame(null);
  };
  
  return (
    <div className="sports-pool">
      <h1>Sports Pool</h1>
      <div className="game-cards">
        {games.map((game) => (
          <div className="game-card" key={game.id} onClick={() => handleGameClick(game)}>
            <h3>{game.name}</h3>
            <p>{game.time}</p>
            <img src={game.imageUrl} alt={game.name} />
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="popup">
          <div className="popup-content">
            <h2>Bet on {selectedGame.name}</h2>
            <h3>Players:</h3>
            {selectedGame.players.map((player) => (
              <div key={player} className="player-option">
                <input
                  type="radio"
                  name="player"
                  value={player}
                  onChange={() => (selectedGame.selectedPlayer = player)}
                />
                <label>{player}</label>
              </div>
            ))}
            <input
              type="number"
              placeholder="Enter bet amount"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
            />
            <button onClick={handleBet}>Place Bet</button>
            <button onClick={() => setSelectedGame(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SportsPool;
