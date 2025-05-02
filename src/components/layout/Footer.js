import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-title">RideShare</h3>
            <p>
              Connect with fellow travelers and share rides to save money,
              reduce carbon emissions, and make new friends along the way.
            </p>
            <div className="social-links">
              <a href="#!"><i className="fab fa-facebook"></i></a>
              <a href="#!"><i className="fab fa-twitter"></i></a>
              <a href="#!"><i className="fab fa-instagram"></i></a>
              <a href="#!"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          <div className="footer-section links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Find Rides</Link></li>
              <li><Link to="/offer-ride">Offer a Ride</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="contact-list">
              <li><i className="fas fa-map-marker-alt"></i> 123 Main St, Any City</li>
              <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-envelope"></i> support@rideshare.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} RideShare. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 