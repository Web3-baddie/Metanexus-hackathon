import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
    useEffect(() => {
        // Reset background on component mount
        document.body.style.backgroundImage = 'none';
    }, []);

    const walletBalance = 34; // Example wallet balance

    return (
        <div className="home-page">
            <nav className="nav-bar">
                <div className="logo-container">
                    <img src="https://export-download.canva.com/0MUZI/DAGSLX0MUZI/15/0/0001-6744582908197500255.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20241001%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241001T210422Z&X-Amz-Expires=59616&X-Amz-Signature=4283a3ecaee177f22d424ee7da0cdaddcf05622c47c7d340d9d3b74952410858&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Meta-nexus.png&response-expires=Wed%2C%2002%20Oct%202024%2013%3A37%3A58%20GMT" alt="Meta Nexus Logo" className="logo" />
                    <span className="company-name">Meta Nexus</span>
                </div>

                <div className="wallet-info">
                    <div className="balance">
                        <span className="balance-amount">{walletBalance} SB</span>
                    </div>
                </div>

                <input type="text" className="search-bar" placeholder="Search..." />
                <Link to="/esports" className="nav-button">Esports</Link>
                <Link to="/playtoken" className="nav-button">Playtoken</Link>
                <Link to="/sportspool" className="nav-button">Sportspool</Link>
                <Link to="/metamall" className="nav-button">Metamall</Link>
                <Link to="/Wallet" className="nav-button">Wallet</Link>
            </nav>

            <div className="main-content">
                <section className="features">
                    <h2>Featured Offers</h2>
                    <div className="offer-cards">
                        <div className="offer-card">
                            <img src="https://play-lh.googleusercontent.com/BWtxT42vx4_MEBI8Fzus_Wzp0UMKOmfUYkeaGNh-D4NlrBCcgBA5gqN7jgM2mhnTkg" alt="Slots Rush" className="offer-image" />
                            <h3>Slots Rush - Android Only</h3>
                            <p>Earn 800 SB</p>
                            <button className="discover-button">Discover</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://ucontent.prdg.io/pimages/59/59e7100b-b662-46fd-9c4a-bc643a5ce58d.jpg" alt="Drone League" className="offer-image" />
                            <h3>Drone league!</h3>
                            <p>Earn 1 SB</p>
                            <button className="discover-button">Discover</button>
                        </div>
                    
                        
                    </div>
                </section>

                <section className="trusted-partners">
                    <h2>Trusted Partners</h2>
                    <div className="partner-cards">
                        <div className="offer-card">
                            <img src="https://ucontent.prdg.io/img/offerwalls/icon/wall-120.jpg?v=480803" alt="Drone League" className="offer-image" />
                            <h3>RevU</h3>
                            <p>Earn upto 800 ICP</p>
                            <button className="discover-button">Earn</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://ucontent.prdg.io/img/offerwalls/icon/wall-791.jpg?v=522141" alt="Drone League" className="offer-image" />
                            <h3>My Chips</h3>
                            <p>Earn upto 300 ICP</p>
                            <button className="discover-button">Earn</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://ucontent.prdg.io/img/offerwalls/icon/sb-wall-833.jpg?v=524455" alt="Drone League" className="offer-image" />
                            <h3>lootably</h3>
                         <p>Earn upto 600 ICP</p>
                            <button className="discover-button">Earn</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://ucontent.prdg.io/img/offerwalls/icon/wall-140.jpg?v=480909" alt="Drone League" className="offer-image" />
                            <h3>Torox</h3>
                            <p>Earn upto 1000 ICP</p>
                            <button className="discover-button">Earn</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://ucontent.prdg.io/img/offerwalls/icon/wall-138.jpg?v=480909" alt="Drone League" className="offer-image" />
                            <h3>Adscend media</h3>
                            <p>Earn upto 4000 ICP</p>
                            <button className="discover-button">Earn</button>
                        </div>
                        <div className="offer-card">
                            <img src="https://ucontent.prdg.io/img/offerwalls/icon/wall-239.jpg?v=497708" alt="Drone League" className="offer-image" />
                            <h3>Wannads</h3>
                            <p>Earn upto 3400 ICP</p>
                            <button className="discover-button">earn</button>
                        </div>
                    </div>
                </section>

                <aside className="dashboard">
                    <h3>Dashboard</h3>
                    <ul>
                        <li><a href="#link1">Featured</a></li>
                        <li><a href="#link2">Content Discovery</a></li>
                        <li><a href="#link3">Sign Ups</a></li>
                        <li><a href="#link4">Free Offers</a></li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};
export default HomePage;
