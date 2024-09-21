import React from 'react';
import './Banner.css';
import { FaSearch, FaStar } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-left">
                <div className="stars-text">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                    ))}
                    <span>Top-rated course</span>
                </div>

                <h1>Learn Design with Nia Matos</h1>

                <p>
                    Get your blood tests delivered at home, collect samples from the
                    victory of the managements that supply the best design system guidelines ever.
                </p>

                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <span className="search-icon">
                        <FaSearch />
                    </span>
                </div>

                <div className="sponsored">
                    Sponsored by:
                    <span> PayPal </span> <span> Google </span> <span> Dropbox </span>
                </div>
            </div>

            <div className="banner-right"></div>
               <div className="banner-video">
                <video autoPlay loop muted playsInline>
                    <source src="bannerVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
              </div>
        </div>
    );
};

export default Banner;
