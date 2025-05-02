import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    origin: '',
    destination: '',
    date: ''
  });

  const { origin, destination, date } = searchData;

  const onChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    // Navigate to search page with query params
    navigate(`/search?origin=${origin}&destination=${destination}&date=${date}`);
  };

  // Get current date in YYYY-MM-DD format for the date input min value
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Travel Together, Save Together</h1>
            <p>
              Share rides with trusted drivers and passengers heading your way.
              Save money, reduce carbon emissions, and make new connections.
            </p>
            <div className="search-form">
              <form onSubmit={onSubmit}>
                <div className="search-inputs">
                  <div className="form-group">
                    <label htmlFor="origin" className="form-label">
                      <i className="fas fa-map-marker-alt"></i> Origin
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="origin"
                      name="origin"
                      value={origin}
                      onChange={onChange}
                      placeholder="From where?"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="destination" className="form-label">
                      <i className="fas fa-map-marker"></i> Destination
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="destination"
                      name="destination"
                      value={destination}
                      onChange={onChange}
                      placeholder="To where?"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">
                      <i className="fas fa-calendar"></i> Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={date}
                      onChange={onChange}
                      min={today}
                      required
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-search"></i> Find Rides
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose RideShare?</h2>
          <div className="grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-coins"></i>
              </div>
              <h3>Save Money</h3>
              <p>Share travel costs and save up to 75% compared to other transportation options.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Travel Safely</h3>
              <p>Verified profiles, ratings and reviews ensure a safe journey with trustworthy companions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Go Green</h3>
              <p>Reduce your carbon footprint by sharing rides and contributing to a cleaner environment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Search for a Ride</h3>
              <p>Enter your origin, destination and travel date to find available rides.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Book Your Seat</h3>
              <p>Choose the ride that best suits your needs and book your seat instantly.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Travel Together</h3>
              <p>Meet your driver and fellow passengers at the pickup location and enjoy the journey.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Rate Your Experience</h3>
              <p>After the ride, leave a review to help others in the community make informed choices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 