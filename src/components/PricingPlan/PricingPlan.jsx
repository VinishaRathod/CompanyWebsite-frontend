import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa'; 
import './PricingPlan.css'; 

const PricingPlan = () => {
    return (
        <div className="pricing-plan-container">
            <h3 className="orange-heading">PRICING PLAN</h3>
            <h1 className="main-heading">Choose your privacy policy</h1>
            <button className='Monthly-plan'>Monthly Plan</button>
            <button className='Annual-plan'>Annual Plan</button>
            <div className="plans-container">
                <div className="plan-card free-plan">
                    <h2>FREE PLAN</h2>
                    <p>For small teams or offices</p>

                    <ul className="plan-features">
                        <li><FaCheck className="check-icon" /> Access to all features</li>
                        <li><FaCheck className="check-icon" /> Unlimited users</li>
                        <li><FaCheck className="check-icon" /> Basic support</li>
                        <li><FaTimes className="cross-icon" /> Advanced analytics</li>
                        <li><FaTimes className="cross-icon" /> Premium support</li>
                    </ul>

                    <div className="button-container">
                        <button className="plan-button">Start Free Trial</button>
                    </div>
                </div>

                <div className="plan-card premium-plan">
                    <div className="price-info">
                        <h2>PREMIUM PLAN</h2>
                        <span>Starting from</span>
                    </div>
                    <div className="price-info">
                        <p>For startup enterprise</p>
                        <span className="price">$49.99/mo</span>
                    </div>

                    <ul className="plan-features">
                        <li><FaCheck className="check-icon" /> Access to all features</li>
                        <li><FaCheck className="check-icon" /> Unlimited users</li>
                        <li><FaCheck className="check-icon" /> Advanced support</li>
                        <li><FaCheck className="check-icon" /> Advanced analytics</li>
                        <li><FaCheck className="check-icon" /> Premium support</li>
                    </ul>

                    <div className="button-container">
                        <button className="plan-button">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlan;
