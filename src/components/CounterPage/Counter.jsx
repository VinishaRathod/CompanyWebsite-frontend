import React from 'react';
import './Counter.css';

const Counter = () => {
    return (
        <div className="container">
            <div className="boxes">
                <div className="box box1">
                    <h3>30K+</h3>
                    <p>We have more than students</p>
                </div>
                <div className="box box2">
                    <h3>150K+</h3>
                    <p>Free Online Tutorials</p>
                </div>
                <div className="box box3">
                    <h3>200K+</h3>
                    <p>Courses Available</p>
                </div>
                <div className="box box4">
                    <h3>100K+</h3>
                    <p>Certified Instructors</p>
                </div>
            </div>
            <div className="content">
                <h2 className="subheading">Core Features</h2>
                <p className="bold">Smart Jackpots that you may love this anytime & anywhere</p>
                <p>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
                <button className="explore-button">Explore Details</button>
                <a href='#how-it-works-container'><div className="designer-arrow">↓</div></a>
            </div>
        </div>
    );
};

export default Counter;