import React from 'react'; // Import CSS for styling
import './Landing.css'; // Import the CSS file for styling
const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <img src="/logo-bia.png" alt="Backwood Logo" className="logo" />
            </header>
            <div className="content">
                <h1 className="roboto-h1">Backwood Interiors</h1>
                <h1 className="roboto-h1 sub-heading">Atelier</h1>
                {/* <h2 className="roboto-h2">In The Heart Of A Quaint Small Town Nestled At The Serene Foothills Of Kumaon</h2> */}
            </div>
        </div>
    );
};

export default LandingPage;
