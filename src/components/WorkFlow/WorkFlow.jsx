import React from 'react';
import './WorkFlow.css'; 

const WorkFlow = () => {
    return (
        <div className="how-it-works-container">
            <h5 className="section-title">WHAT'S THE FUNCTION</h5>
            <p className="section-subtitle">Let’s see how it works</p>

            <div className="steps-container">
                <div className="step">
                    <div className="circle">01</div>
                    <h3>Set disbursement Instructions</h3>
                    <p>Get your blood tests delivered at home, collect a sample from your blood tests.</p>
                </div>

                <div className="designer-arrow">→</div>

                <div className="step">
                    <div className="circle">02</div>
                    <h3>Set disbursement Instructions</h3>
                    <p>Get your blood tests delivered at home, collect a sample from your blood tests.</p>
                </div>

                <div className="designer-arrow">→</div>

                <div className="step">
                    <div className="circle">03</div>
                    <h3>Set disbursement Instructions</h3>
                    <p>Get your blood tests delivered at home, collect a sample from your blood tests.</p>
                </div>

                <div className="designer-arrow">→</div>

                <div className="step">
                    <div className="circle">04</div>
                    <h3>Set disbursement Instructions</h3>
                    <p>Get your blood tests delivered at home, collect a sample from your blood tests.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkFlow;
