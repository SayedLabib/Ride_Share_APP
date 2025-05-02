import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { toast } from 'react-toastify';

// Mock data - would come from an API in a real app
const mockUpcomingRides = [
  {
    id: 101,
    type: 'driver',
    origin: 'New York',
    destination: 'Boston',
    date: '2023-07-15',
    time: '08:00',
    passengers: 2,
    price: 35
  },
  {
    id: 102,
    type: 'passenger',
    origin: 'Boston',
    destination: 'New York',
    date: '2023-07-20',
    time: '10:30',
    driver: 'Sarah Johnson',
    price: 30
  }
];

const mockPastRides = [
  {
    id: 103,
    type: 'driver',
    origin: 'New York',
    destination: 'Philadelphia',
    date: '2023-06-28',
    time: '09:00',
    passengers: 3,
    price: 25
  },
  {
    id: 104,
    type: 'passenger',
    origin: 'Philadelphia',
    destination: 'New York',
    date: '2023-06-25',
    time: '14:00',
    driver: 'Michael Brown',
    price: 28
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for user data in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    } else {
      // Redirect to login if no user data is found
      toast.error('Please log in to access the dashboard');
      navigate('/login');
    }
    setIsLoading(false);
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading">
          <i className="fas fa-spinner fa-spin"></i> Loading dashboard...
        </div>
      </div>
    );
  }

  if (!userData) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="user-welcome">
          <h1>Welcome back, {userData.name}!</h1>
          <p>Manage your rides and account information</p>
        </div>
        <Link to="/offer-ride" className="btn btn-primary">
          <i className="fas fa-plus"></i> Offer a Ride
        </Link>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-route"></i>
          </div>
          <h3>12</h3>
          <p>Total Rides</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-user-friends"></i>
          </div>
          <h3>28</h3>
          <p>Passengers</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <h3>$340</h3>
          <p>Money Saved</p>
        </div>
      </div>

      <div className="dashboard-rides">
        <div className="rides-section">
          <div className="section-header">
            <h2>Upcoming Rides</h2>
            <Link to="/search" className="btn">Find Rides</Link>
          </div>

          {mockUpcomingRides.length > 0 ? (
            <div className="rides-list">
              {mockUpcomingRides.map(ride => (
                <div className="dashboard-ride-card" key={ride.id}>
                  <div className="ride-badge">
                    {ride.type === 'driver' ? (
                      <span className="badge driver">
                        <i className="fas fa-car"></i> Driver
                      </span>
                    ) : (
                      <span className="badge passenger">
                        <i className="fas fa-user"></i> Passenger
                      </span>
                    )}
                  </div>
                  <div className="ride-info">
                    <div className="ride-route">
                      {ride.origin} <i className="fas fa-long-arrow-alt-right"></i> {ride.destination}
                    </div>
                    <div className="ride-details">
                      <span><i className="fas fa-calendar"></i> {ride.date}</span>
                      <span><i className="fas fa-clock"></i> {ride.time}</span>
                      {ride.type === 'driver' ? (
                        <span><i className="fas fa-users"></i> {ride.passengers} passengers</span>
                      ) : (
                        <span><i className="fas fa-user"></i> Driver: {ride.driver}</span>
                      )}
                      <span><i className="fas fa-tag"></i> ${ride.price}</span>
                    </div>
                  </div>
                  <div className="ride-actions">
                    <Link to={`/ride/${ride.id}`} className="btn btn-sm">
                      <i className="fas fa-eye"></i> View
                    </Link>
                    {ride.type === 'driver' && (
                      <button className="btn btn-sm btn-danger">
                        <i className="fas fa-times"></i> Cancel
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-rides">
              <p>You don't have any upcoming rides.</p>
              <div className="no-rides-actions">
                <Link to="/search" className="btn btn-primary">Find a Ride</Link>
                <Link to="/offer-ride" className="btn">Offer a Ride</Link>
              </div>
            </div>
          )}
        </div>

        <div className="rides-section">
          <div className="section-header">
            <h2>Past Rides</h2>
          </div>

          {mockPastRides.length > 0 ? (
            <div className="rides-list">
              {mockPastRides.map(ride => (
                <div className="dashboard-ride-card past" key={ride.id}>
                  <div className="ride-badge">
                    {ride.type === 'driver' ? (
                      <span className="badge driver">
                        <i className="fas fa-car"></i> Driver
                      </span>
                    ) : (
                      <span className="badge passenger">
                        <i className="fas fa-user"></i> Passenger
                      </span>
                    )}
                  </div>
                  <div className="ride-info">
                    <div className="ride-route">
                      {ride.origin} <i className="fas fa-long-arrow-alt-right"></i> {ride.destination}
                    </div>
                    <div className="ride-details">
                      <span><i className="fas fa-calendar"></i> {ride.date}</span>
                      <span><i className="fas fa-clock"></i> {ride.time}</span>
                      {ride.type === 'driver' ? (
                        <span><i className="fas fa-users"></i> {ride.passengers} passengers</span>
                      ) : (
                        <span><i className="fas fa-user"></i> Driver: {ride.driver}</span>
                      )}
                      <span><i className="fas fa-tag"></i> ${ride.price}</span>
                    </div>
                  </div>
                  <div className="ride-actions">
                    <Link to={`/ride/${ride.id}`} className="btn btn-sm">
                      <i className="fas fa-eye"></i> View
                    </Link>
                    {ride.type === 'passenger' && !ride.isRated && (
                      <button className="btn btn-sm btn-primary">
                        <i className="fas fa-star"></i> Rate
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-rides">
              <p>You don't have any past rides.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;