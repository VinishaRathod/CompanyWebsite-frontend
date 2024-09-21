import React from 'react';
import { FaPlay, FaStar, FaEye } from 'react-icons/fa';
import './DesignCourse.css'; 
const DesignCourse = () => {
    return (
        <div className="course-list-container" id='how-it-works-container'>
            <h3 className="small-heading">QUALITY FEATURES</h3>
            <h1 className="main-heading">Popular Designing Course</h1>

            <div className="cards-container">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="course-card">
                        <div className="play-button">
                            <FaPlay />
                        </div>

                        <div className="course-details">
                            <div className="rating-section">
                                {/* 5 stars */}
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="star-icon" />
                                ))}
                                <span className="rating">4.8</span>
                                <span className="views">
                                    <FaEye /> 392 views
                                </span>
                                <span className="students">2538 students watched</span>
                            </div>
                            <p className="course-title">
                                Professional graphic design tutorial full course with exercise file
                            </p>
                            <p className="course-description">
                                Get your tutorials delivered at home, collect samples from the victory of the managements.
                            </p>
                        </div>

                        <div className="course-button">
                            7 Video classes | 4 hrs
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesignCourse;
