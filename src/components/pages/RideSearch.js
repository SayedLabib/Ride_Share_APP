import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './RideSearch.css';

// Mock ride data (would come from API in real app)
const mockRides = [
  {
    id: 1,
    driver: {
      id: 101,
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4.8
    },
    origin: 'New York',
    destination: 'Boston',
    date: '2023-07-15',
    departureTime: '08:00',
    arrivalTime: '12:30',
    price: 35,
    availableSeats: 3,
    car: 'Toyota Camry, Black',
    description: 'Comfortable ride with good AC and music. One stop for coffee on the way.'
  },
  {
    id: 2,
    driver: {
      id: 102,
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 4.9
    },
    origin: 'New York',
    destination: 'Boston',
    date: '2023-07-15',
    departureTime: '09:30',
    arrivalTime: '14:00',
    price: 30,
    availableSeats: 2,
    car: 'Honda Civic, Silver',
    description: 'Direct route, no stops. Luggage space available.'
  },
  {
    id: 3,
    driver: {
      id: 103,
      name: 'Mike Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      rating: 4.6
    },
    origin: 'New York',
    destination: 'Boston',
    date: '2023-07-15',
    departureTime: '12:00',
    arrivalTime: '16:30',
    price: 28,
    availableSeats: 4,
    car: 'Ford Focus, Blue',
    description: 'Relaxed drive with occasional stops if needed. Pet friendly.'
  },
  {
    id: 4,
    driver: {
      id: 104,
      name: 'Emily Turner',
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      rating: 4.7
    },
    origin: 'New York',
    destination: 'Boston',
    date: '2023-07-16',
    departureTime: '07:00',
    arrivalTime: '11:30',
    price: 40,
    availableSeats: 1,
    car: 'Mazda 3, Red',
    description: 'Early morning ride. Coffee lovers welcome!'
  }
];

const RideSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [searchData, setSearchData] = useState({
    origin: queryParams.get('origin') || '',
    destination: queryParams.get('destination') || '',
    date: queryParams.get('date') || ''
  });

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const { origin, destination, date } = searchData;

  // Handle search when component mounts or query params change
  useEffect(() => {
    if (origin && destination && date) {
      handleSearch();
    }
  }, [origin, destination, date]);

  const onChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    // Update URL with new search params
    navigate(`/search?origin=${origin}&destination=${destination}&date=${date}`);
    
    handleSearch();
  };

  const handleSearch = () => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Filter mock rides based on search criteria
      const results = mockRides.filter(
        ride => 
          ride.origin.toLowerCase().includes(origin.toLowerCase()) &&
          ride.destination.toLowerCase().includes(destination.toLowerCase()) &&
          ride.date === date
      );
      
      setSearchResults(results);
      setIsLoading(false);
    }, 800);
  };

  // Get current date in YYYY-MM-DD format for the date input min value
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="ride-search-page">
      <h1 className="page-title">Find Available Rides</h1>
      
      <div className="search-container">
        <div className="search-form card">
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
                <i className="fas fa-search"></i> Search Rides
              </button>
            </div>
          </form>
        </div>
        
        <div className="search-results">
          {isLoading ? (
            <div className="loading">
              <i className="fas fa-spinner fa-spin"></i> Searching for rides...
            </div>
          ) : (
            <>
              {searchResults.length > 0 ? (
                <div className="results-count">
                  Found {searchResults.length} rides matching your criteria
                </div>
              ) : (
                origin && destination && date && (
                  <div className="no-results">
                    <i className="fas fa-exclamation-circle"></i>
                    <p>No rides found for your search criteria.</p>
                    <p>Try different dates or locations, or <Link to="/offer-ride">offer a ride</Link> yourself!</p>
                  </div>
                )
              )}
              
              <div className="rides-list">
                {searchResults.map(ride => (
                  <div className="ride-card" key={ride.id}>
                    <div className="ride-details">
                      <div className="ride-route">
                        {ride.origin} <i className="fas fa-long-arrow-alt-right"></i> {ride.destination}
                      </div>
                      <div className="ride-info">
                        <span><i className="fas fa-calendar"></i> {ride.date}</span>
                        <span><i className="fas fa-clock"></i> {ride.departureTime} - {ride.arrivalTime}</span>
                        <span><i className="fas fa-user-friends"></i> {ride.availableSeats} seats available</span>
                      </div>
                      <div className="ride-description">
                        <p>{ride.description}</p>
                      </div>
                      <div className="driver-info">
                        <img src={ride.driver.avatar} alt={ride.driver.name} className="driver-avatar" />
                        <div>
                          <div className="driver-name">{ride.driver.name}</div>
                          <div className="driver-rating">
                            <i className="fas fa-star"></i> {ride.driver.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ride-action">
                      <div className="ride-price">${ride.price}</div>
                      <Link to={`/book/${ride.id}`} className="btn btn-primary">
                        Book Seat
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RideSearch;