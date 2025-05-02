import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OfferRide.css';

const OfferRide = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    date: '',
    departureTime: '',
    arrivalTime: '',
    price: '',
    availableSeats: '',
    carModel: '',
    carColor: '',
    description: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const {
    origin,
    destination,
    date,
    departureTime,
    arrivalTime,
    price,
    availableSeats,
    carModel,
    carColor,
    description
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // In a real app, this would be an API call to create a new ride
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard after successful creation
      navigate('/dashboard');
    }, 1000);
  };

  // Get current date in YYYY-MM-DD format for the date input min value
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="offer-ride-page">
      <h1 className="page-title">Offer a Ride</h1>

      <div className="card offer-ride-form-container">
        <form onSubmit={onSubmit} className="offer-ride-form">
          <div className="form-section">
            <h3 className="section-title">Route Information</h3>
            <div className="form-row">
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
                  placeholder="City of departure"
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
                  placeholder="City of arrival"
                  required
                />
              </div>
            </div>
            <div className="form-row">
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
              <div className="form-group">
                <label htmlFor="departureTime" className="form-label">
                  <i className="fas fa-clock"></i> Departure Time
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="departureTime"
                  name="departureTime"
                  value={departureTime}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="arrivalTime" className="form-label">
                  <i className="fas fa-clock"></i> Estimated Arrival
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="arrivalTime"
                  name="arrivalTime"
                  value={arrivalTime}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title">Ride Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price" className="form-label">
                  <i className="fas fa-tag"></i> Price per Seat ($)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={price}
                  onChange={onChange}
                  min="1"
                  step="0.01"
                  placeholder="25.00"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="availableSeats" className="form-label">
                  <i className="fas fa-user-friends"></i> Available Seats
                </label>
                <select
                  className="form-control"
                  id="availableSeats"
                  name="availableSeats"
                  value={availableSeats}
                  onChange={onChange}
                  required
                >
                  <option value="">Select seats</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="carModel" className="form-label">
                  <i className="fas fa-car"></i> Car Model
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="carModel"
                  name="carModel"
                  value={carModel}
                  onChange={onChange}
                  placeholder="e.g. Toyota Camry"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="carColor" className="form-label">
                  <i className="fas fa-palette"></i> Car Color
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="carColor"
                  name="carColor"
                  value={carColor}
                  onChange={onChange}
                  placeholder="e.g. Black"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                <i className="fas fa-info-circle"></i> Ride Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={description}
                onChange={onChange}
                rows="3"
                placeholder="Add details about your ride, stops, luggage space, etc."
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Creating...
                </>
              ) : (
                'Offer Ride'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfferRide; 