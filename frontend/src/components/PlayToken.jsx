import React from 'react';
import './PlayToken.css';

const games = [
  {
    name: 'Magnet Miner',
    image: 'https://static.offertoro.com/uploads/offers_image/baf949f2acb713832fb155f53286a7bb79ddc437b6d1b713720743063c741585.jpeg?v=530104', // Replace with actual image URL
    description: 'Puzzle Game',
    price: 'Free',
  },
  {
    name: 'Pinata Fiesta',
    image: 'https://static.offertoro.com/uploads/offers_image/334871aeb8dc0f9fc1dea408d25541b2e16eba2e8a28b29df0241dc5dd3e1b57.png?v=529964', // Replace with actual image URL
    description: 'Puzzle Game',
    price: 'For Testing',
  },
  {
    name: 'Garden Blocks',
    image: 'https://static.offertoro.com/uploads/offers_image/f3460c7f6da66dd7022fec4237c713182bbe98d96e93aae0eefbd9a8369ca0f5.jpg?v=529914', // Replace with actual image URL
    description: 'Casual Game',
    price: '2 Tokens',
  },
  {
    name: 'Marble Blast',
    image: 'https://static.offertoro.com/uploads/offers_image/948f14880b7552c6d30a5654ad5cb7cd2763c9dcbd67bd2fdbac6f7f3e89128f.jpg?v=529880', // Replace with actual image URL
    description: 'Casual Game',
    price: 'Free',
  },
  {
    name: 'Dungeons hunters',
    image: 'https://static.offertoro.com/uploads/offers_image/1ef312374696235dca4a6d71fd7897474d7563a6f0abef9546378c9e477b7581.png?v=529652', // Replace with actual image URL
    description: '3D TPS shooting game',
    price: '3 Tokens',
  },
  {
    name: 'pirates treassure',
    image: 'https://static.offertoro.com/uploads/offers_image/4fa05154cc006ffef79b0cd74e76ce2c986e4dfecd181f53d98b305ad1af4d1a.jpeg?v=529571', // Replace with actual image URL
    description: 'Survival Horror Game',
    price: '5 Tokens',
  },
  {
    name: 'Block jewel',
    image: 'https://static.offertoro.com/uploads/offers_image/b7ad74d518c7c52eb4be6bd401e33260177fa24cd6693b55c045371d7e6f3b45.jpg?v=529880', // Replace with actual image URL
    description: 'Fantasy Adventure Game',
    price: 'Free',
  },
  {
    name: 'Chaos cruiser',
    image: 'https://static.offertoro.com/uploads/offers_image/785d4510c0c0c3b62bbb079546bfe4c3db2313dbd23ccc790a588a5a5f3a1771.jpeg?v=528875', // Replace with actual image URL
    description: 'Action Adventure Game',
    price: '1 Token',
  },
  {
    name: 'Diamond Race',
    image: 'https://static.offertoro.com/uploads/offers_image/a40a0fdc9567e1e98c3a0494e90bb5884c0618250138932de145b434400b6b72.png?v=523796', // Replace with actual image URL
    description: 'Racing Game',
    price: '2 Tokens',
  },
  {
    name: 'Candy match',
    image: 'https://static.offertoro.com/uploads/offers_image/263bafe6ffa55332a98e6abaa12b3f38683bb991cf65181cf0351651209d355f.png?v=529761', // Replace with actual image URL
    description: 'Strategy Game',
    price: '4 Tokens',
  },
  {
    name: 'Garden Gnome',
    image: 'https://static.offertoro.com/uploads/offers_image/4eba53821cdbe5ce0408d1ede95e355fffd0176c416ec642fb61f7d14d2be1a3.png?v=528901', // Replace with actual image URL
    description: 'Action Adventure Game',
    price: '1 Token',
  },
  {
    name: 'North tower',
    image: 'https://static.offertoro.com/uploads/offers_image/259fcd26336131bf9b4e3ead334d69eee9543ecec31179dff00d0784033e8c87.png?v=530058', // Replace with actual image URL
    description: 'strategy game',
    price: '2 Tokens',
  },
  {
    name: 'Blossom blocks',
    image: 'https://static.offertoro.com/uploads/offers_image/948f14880b7552c6d30a5654ad5cb7cd2763c9dcbd67bd2fdbac6f7f3e89128f.jpg?v=529880', // Replace with actual image URL
    description: 'Strategy Game',
    price: '4 Tokens',
  },
];

const PlayToken = () => {
  return (
    <div className="play-token">
      <h2>You May Like</h2>
      <div className="offer-cards">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <img src={game.image} alt={game.name} />
            <h3>{game.name}</h3>
            <p>{game.description}</p>
            <p>{game.price}</p>
            <button className="play-button">Play</button>
          </div>
        ))}
      </div>

      <h2>Recommended Games</h2>
      <div className="offer-cards">
      <div className="offer-card">
                            <img src="https://main-p.agmcdn.com/ofR6WcL6rxIsuYr0Uo2hNjim6EqppeCc09NyvT9g.gif" alt="Drone League" className="offer-image" />
                            <h3>Diamond City</h3>
                            <p>Earn upto 300 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://main-p.agmcdn.com/BfYwCB2uhR1QOrmhNdlECiF6EPAtLkOIIipKPYRf.webp" alt="Drone League" className="offer-image" />
                            <h3>Parking Jam</h3>
                         <p>Earn upto 600 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://main-p.agmcdn.com/pkH1Igx62ickU12WRcNiyPtZX8zlz8YQ3WBlx42i.gif" alt="Drone League" className="offer-image" />
                            <h3>Donalds</h3>
                            <p>Earn upto 300 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                       
                        
        
      </div>

      <h2>Hotlist</h2>
      <div className="offer-cards">
      
                        <div className="offer-card">
                            <img src="https://main-p.agmcdn.com/offers/808536-QWIPavND.jpg" alt="Drone League" className="offer-image" />
                            <h3>Monopoly Go</h3>
                            <p>Earn upto 60 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://api.lootably.com/api/offerwall/image/59-19629255" alt="Drone League" className="offer-image" />
                            <h3>Puzzle Panda</h3>
                            <p>Earn upto 300 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9c/60/13/9c6013e6-6789-bf0f-b845-2e0a539e2e7e/AppIcon-1x_U007emarketing-0-10-0-0-85-220-0.png/512x512bb.jpg" alt="Drone League" className="offer-image" />
                            <h3>War Path</h3>
                         <p>Earn upto 600 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://api.lootably.com/api/offerwall/image/67-1432230" alt="Drone League" className="offer-image" />
                            <h3>Jack Potland</h3>
                            <p>Earn upto 1000 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://main-p.agmcdn.com/offers/1545019-6Urfmh9D.jpg" alt="Drone League" className="offer-image" />
                            <h3>Jack POtland</h3>
                            <p>Earn upto 4 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://api.lootably.com/api/offerwall/image/67-1054976" alt="Drone League" className="offer-image" />
                            <h3>Battle night</h3>
                            <p>Earn upto 3 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://main-p.agmcdn.com/fSyOfey6516IWTrYbBB9AX5RHPfukgiTTzvCwgYV.gif" alt="Drone League" className="offer-image" />
                            <h3>Gold and Goblins</h3>
                         <p>Earn upto 600 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/08/8e/5b/088e5bc9-278f-641b-1859-e6ec69713dc7/AppIcon-1x_U007emarketing-0-6-0-85-220-0.png/512x512bb.jpg" alt="Drone League" className="offer-image" />
                            <h3>Dugeon Hunters</h3>
                            <p>Earn upto 10 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://main-p.agmcdn.com/IkdCzv6pKilgAslgNpsklHHelV7igHTodMac4d7x.gif" alt="Drone League" className="offer-image" />
                            <h3>Water Colors </h3>
                            <p>Earn upto 4 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://main-p.agmcdn.com/gEt9k0wI5xFR1loq9CFLjgCvclporTsRvweho91k.gif" alt="Drone League" className="offer-image" />
                            <h3>Black Jack 21</h3>
                            <p>Earn upto 3 ICP</p>
                            <button className="discover-button">Play</button>
                        </div>
                    </div>
        
        
          </div>
      
    

  );
};

export default PlayToken;
