import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './BookRide.css';

// Mock ride data (would come from API in real app)
const mockRides = [
  {
    id: 1,
    driver: {
      id: 101,
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4.8,
      reviewCount: 24,
      memberSince: 'January, 2022',
      verifiedDriver: true
    },
    origin: 'New York',
    destination: 'Boston',
    date: '2023-07-15',
    departureTime: '08:00',
    arrivalTime: '12:30',
    price: 35,
    availableSeats: 3,
    totalSeats: 4,
    car: {
      model: 'Toyota Camry',
      color: 'Black',
      year: '2020'
    },
    description: 'Comfortable ride with good AC and music. One stop for coffee on the way.',
    amenities: ['Air Conditioning', 'Music', 'Pet Friendly'],
    rules: ['No Smoking', 'Mask Required'],
    route: {
      distance: '215 miles',
      duration: '4h 30m'
    }
  }
];

const BookRide = () => {
  const { rideId } = useParams();
  const navigate = useNavigate();
  const [ride, setRide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [seatsToBook, setSeatsToBook] = useState(1);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch ride details
    setTimeout(() => {
      const foundRide = mockRides.find(r => r.id === parseInt(rideId));
      setRide(foundRide);
      setIsLoading(false);
    }, 1000);
  }, [rideId]);

  const handleSeatsChange = (e) => {
    setSeatsToBook(parseInt(e.target.value));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setIsBooking(true);

    // Simulate API call to book the ride
    setTimeout(() => {
      setIsBooking(false);
      setBookingSuccess(true);

      // Redirect to dashboard after successful booking
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    }, 1500);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading">
          <i className="fas fa-spinner fa-spin"></i> Loading ride details...
        </div>
      </div>
    );
  }

  if (!ride) {
    return (
      <div className="not-found-container">
        <div className="not-found">
          <i className="fas fa-exclamation-circle"></i>
          <h2>Ride Not Found</h2>
          <p>The ride you're looking for doesn't exist or has been cancelled.</p>
          <Link to="/search" className="btn btn-primary">Find Other Rides</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="book-ride-container">
      {bookingSuccess ? (
        <div className="booking-success">
          <div className="success-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2>Booking Successful!</h2>
          <p>Your ride has been booked successfully. You'll be redirected to your dashboard shortly.</p>
        </div>
      ) : (
        <>
          <div className="back-link">
            <Link to="/search">
              <i className="fas fa-arrow-left"></i> Back to search results
            </Link>
          </div>

          <div className="ride-overview">
            <div className="route-info">
              <h1>
                {ride.origin} <i className="fas fa-long-arrow-alt-right"></i> {ride.destination}
              </h1>
              <div className="ride-meta">
                <span><i className="fas fa-calendar"></i> {ride.date}</span>
                <span><i className="fas fa-clock"></i> {ride.departureTime} - {ride.arrivalTime}</span>
                <span><i className="fas fa-route"></i> {ride.route.distance}</span>
                <span><i className="fas fa-hourglass-half"></i> {ride.route.duration}</span>
              </div>
            </div>
            <div className="price-tag">
              <div className="price">${ride.price}</div>
              <div className="per-seat">per seat</div>
            </div>
          </div>

          <div className="ride-content">
            <div className="driver-details">
              <div className="card">
                <h2>About the Driver</h2>
                <div className="driver-profile">
                  <img 
                    src={ride.driver.avatar} 
                    alt={ride.driver.name} 
                    className="driver-avatar" 
                  />
                  <div className="driver-info">
                    <div className="driver-name">
                      {ride.driver.name}
                      {ride.driver.verifiedDriver && (
                        <span className="verified-badge" title="Verified Driver">
                          <i className="fas fa-check-circle"></i>
                        </span>
                      )}
                    </div>
                    <div className="driver-rating">
                      <i className="fas fa-star"></i> {ride.driver.rating} ({ride.driver.reviewCount} reviews)
                    </div>
                    <div className="driver-since">
                      <i className="fas fa-user-clock"></i> Member since {ride.driver.memberSince}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2>Vehicle Details</h2>
                <div className="vehicle-info">
                  <div className="info-item">
                    <span className="info-label">Car:</span>
                    <span className="info-value">{ride.car.model}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Color:</span>
                    <span className="info-value">{ride.car.color}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Year:</span>
                    <span className="info-value">{ride.car.year}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="booking-section">
              <div className="card">
                <h2>Book this Ride</h2>
                
                <div className="ride-description">
                  <p>{ride.description}</p>
                </div>

                <div className="ride-details">
                  <div className="detail-section">
                    <h3><i className="fas fa-info-circle"></i> Ride Details</h3>
                    <div className="available-seats">
                      <div className="seat-icons">
                        {[...Array(ride.totalSeats)].map((_, i) => (
                          <i 
                            key={i} 
                            className={`fas fa-user ${i < ride.totalSeats - ride.availableSeats ? 'taken' : ''}`}
                          ></i>
                        ))}
                      </div>
                      <div className="seats-info">
                        <span>{ride.availableSeats} seats available</span> of {ride.totalSeats}
                      </div>
                    </div>
                  </div>

                  {ride.amenities && ride.amenities.length > 0 && (
                    <div className="detail-section">
                      <h3><i className="fas fa-plus-circle"></i> Amenities</h3>
                      <ul className="amenities-list">
                        {ride.amenities.map((amenity, index) => (
                          <li key={index}><i className="fas fa-check"></i> {amenity}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {ride.rules && ride.rules.length > 0 && (
                    <div className="detail-section">
                      <h3><i className="fas fa-exclamation-circle"></i> Rules</h3>
                      <ul className="rules-list">
                        {ride.rules.map((rule, index) => (
                          <li key={index}><i className="fas fa-check"></i> {rule}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <form onSubmit={handleBooking}>
                  <div className="form-group">
                    <label htmlFor="seats" className="form-label">
                      Number of Seats
                    </label>
                    <select
                      id="seats"
                      className="form-control"
                      value={seatsToBook}
                      onChange={handleSeatsChange}
                      disabled={isBooking}
                    >
                      {[...Array(ride.availableSeats)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1} {i === 0 ? 'seat' : 'seats'} (${(i + 1) * ride.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="booking-summary">
                    <div className="summary-row">
                      <span>Price per seat</span>
                      <span>${ride.price}</span>
                    </div>
                    <div className="summary-row">
                      <span>Seats</span>
                      <span>x {seatsToBook}</span>
                    </div>
                    <div className="summary-row total">
                      <span>Total</span>
                      <span>${ride.price * seatsToBook}</span>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block" 
                    disabled={isBooking}
                  >
                    {isBooking ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> Processing...
                      </>
                    ) : (
                      'Book Now'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookRide; 