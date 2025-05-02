import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import Home from './components/pages/Home';
import RideSearch from './components/pages/RideSearch';
import OfferRide from './components/pages/OfferRide';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/profile/Profile';
import Dashboard from './components/dashboard/Dashboard';
import BookRide from './components/rides/BookRide';

function App() {
  // State to track user authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Mock login function (in real app would connect to backend)
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Mock logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <div className="App">
      <Navbar isAuthenticated={isAuthenticated} user={user} logout={logout} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<RideSearch />} />
          <Route path="/offer-ride" element={<OfferRide />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/book/:rideId" element={<BookRide />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 