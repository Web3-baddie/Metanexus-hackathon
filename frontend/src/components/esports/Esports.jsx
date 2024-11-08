import React, { useState } from 'react';
import './Esports.css';

const tournaments = [
    {
        id: 1,
        name: "Tournament 1",
        time: "10:00 AM",
        image: "https://i.pinimg.com/236x/d8/de/ce/d8dece7dc0f506ff815075991dec2cb1.jpg" // Replace with actual image URL
    },
    {
        id: 2,
        name: "Tournament 2",
        time: "12:00 PM",
        image: "https://i.pinimg.com/236x/d4/eb/2d/d4eb2d8ee516f013d3324f317b774305.jpg" // Replace with actual image URL
    },
    {
        id: 3,
        name: "Tournament 3",
        time: "2:00 PM",
        image: "https://i.pinimg.com/236x/90/6e/fb/906efbba7f9d0f9bf062b42f4797a76a.jpg" // Replace with actual image URL
    },
    {
        id: 4,
        name: "Tournament 4",
        time: "4:00 PM",
        image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
        id: 5,
        name: "Tournament 5",
        time: "6:00 PM",
        image: "https://i.pinimg.com/236x/29/e4/dd/29e4dd23020e2c948f3d10fe4fd7a199.jpg" // Replace with actual image URL
    },
    {
        id: 6,
        name: "Tournament 6",
        time: "8:00 PM",
        image: "https://i.pinimg.com/236x/f4/06/b8/f406b88de5b6e3fd6b79360e32572c19.jpg" // Replace with actual image URL
    }
];

const Esports = () => {
    const [selectedTournament, setSelectedTournament] = useState(null);
    const [userType, setUserType] = useState('');
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [showPayment, setShowPayment] = useState(false);
    const [joinLink, setJoinLink] = useState('');

    const handleTournamentClick = (tournament) => {
        setSelectedTournament(tournament);
    };

    const handleUserTypeSelect = (type) => {
        setUserType(type);
    };

    const handleCloseModal = () => {
        setSelectedTournament(null);
        setUserType('');
        setUserName('');
        setUserDescription('');
        setShowPayment(false);
        setJoinLink('');
    };

    const handleDetailsSubmit = (e) => {
        e.preventDefault();
        setShowPayment(true);
    };

    const handlePayment = () => {
        // Implement payment logic here
        setJoinLink("https://your-game-link.com"); // Replace with actual game link
        alert('Payment successful! You can now join the tournament.');
    };

    return (
        <div className="esports-section">
            <h2>Esports Tournaments</h2>
            <div className="tournament-list">
                {tournaments.map(tournament => (
                    <div key={tournament.id} className="tournament-card">
                        <img src={tournament.image} alt={tournament.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                        <h3>{tournament.name}</h3>
                        <p>{tournament.time}</p>
                        <button onClick={() => handleTournamentClick(tournament)}>Join Tournament</button>
                    </div>
                ))}
            </div>

            {selectedTournament && (
                <div className="user-type-modal">
                    <h2>{selectedTournament.name}</h2>
                    <p>Are you a Gamer or a Streamer?</p>
                    <button onClick={() => handleUserTypeSelect('gamer')}>Gamer</button>
                    <button onClick={() => handleUserTypeSelect('streamer')}>Streamer</button>
                    <button onClick={handleCloseModal}>Close</button>
                    
                    {userType === 'streamer' && (
                        <div>
                            <p>You can stream for $2!</p>
                            <a href="https://your-streaming-url.com" target="_blank" rel="noopener noreferrer">Click here to stream!</a>
                        </div>
                    )}

                    {userType === 'gamer' && (
                        <div>
                            <form onSubmit={handleDetailsSubmit}>
                                <input 
                                    type="text" 
                                    value={userName} 
                                    onChange={(e) => setUserName(e.target.value)} 
                                    placeholder="Enter your name" 
                                    required 
                                />
                                <textarea
                                    value={userDescription}
                                    onChange={(e) => setUserDescription(e.target.value)}
                                    placeholder="Enter a description"
                                    required
                                />
                                <button type="submit">Submit</button>
                            </form>

                            {showPayment && (
                                <div>
                                    <p>You need to pay $5 to join the tournament.</p>
                                    <button onClick={handlePayment}>Pay Now</button>
                                </div>
                            )}

                            {joinLink && (
                                <div>
                                    <p>Click the link below to join the tournament:</p>
                                    <a href={joinLink} target="_blank" rel="noopener noreferrer">{joinLink}</a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Esports;
