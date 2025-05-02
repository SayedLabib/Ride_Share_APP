import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, user, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const guestLinks = (
    <>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
    </>
  );

  const authLinks = (
    <>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><a href="#!" onClick={() => { logout(); }}>Logout</a></li>
    </>
  );

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-car"></i> RideShare
        </Link>

        <div className="nav-links-container">
          <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Find Rides</Link></li>
            <li><Link to="/offer-ride">Offer a Ride</Link></li>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 