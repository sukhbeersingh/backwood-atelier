import React from 'react'; // Import CSS for styling
import './Landing.css'; // Import the CSS file for styling
import IntroProducts from './IntroProducts';

const LandingPage = () => {
    return (
    <>
        <div className="landing-page">
            <header className="landing-header">
                <img src="/logo-bia.png" alt="Backwood Logo" className="logo" />
            </header>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <div className="roboto-h1 flex items-center justify-center">Backwood Interiors</div>
                <div className="roboto-h1 flex items-center justify-center">Atelier</div>
            </div>
            
        </div>
        <div className="w-full h-screen flex flex-col items-center justify-center bg[#C4CDD3] p-10">
                <div className="text-center">
                    <p className="roboto-h2 text-lg mb-1">In The Heart Of A Quaint Small Town Nestled At The Serene Foothills Of Kumaon</p>
                </div>
                <div className="text-center">
                    <p className="roboto-p text-lg">Backwood Interiors offers a curated range of sustainable teakwood and indian Rosewood furniture, thoughtfully crafted to blend seamlessly with the ever-changing generational palettes, providing a personalized experience and lasting legacies.</p>
                </div>
            </div>
            <IntroProducts />
        </>
    );
};

export default LandingPage;
