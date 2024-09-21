import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-columns">
                <div className="footer-column">
                    <h3 className="footer-heading">About Us</h3>
                    <ul className="footer-list">
                        <li>Our Story</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Testimonials</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Our Information</h3>
                    <ul className="footer-list">
                        <li>Blog</li>
                        <li>Resources</li>
                        <li>FAQs</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">My Account</h3>
                    <ul className="footer-list">
                        <li>Profile</li>
                        <li>Orders</li>
                        <li>Wishlist</li>
                        <li>Settings</li>
                        <li>Logout</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Policies</h3>
                    <ul className="footer-list">
                        <li>Return Policy</li>
                        <li>Terms of Service</li>
                        <li>Shipping Policy</li>
                        <li>Payment Methods</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
