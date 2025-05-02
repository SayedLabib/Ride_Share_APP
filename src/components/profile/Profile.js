import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

// Mock data - in a real app, this would come from API
const mockUserData = {
  id: 101,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(555) 123-4567',
  location: 'New York, NY',
  bio: 'Software developer who loves to travel and meet new people. Always up for a road trip!',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  memberSince: 'January 2022',
  vehicle: {
    model: 'Toyota Camry',
    year: '2020',
    color: 'Black',
    licensePlate: 'ABC123'
  },
  rating: 4.8,
  reviewCount: 24
};

const Profile = ({ user }) => {
  // If user prop is available, use it, otherwise use mock data
  const userData = user || mockUserData;

  const [isEditMode, setIsEditMode] = useState(false);
  const [profile, setProfile] = useState(userData);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      // Handle nested object (vehicle properties)
      const [parentKey, childKey] = name.split('.');
      setProfile({
        ...profile,
        [parentKey]: {
          ...profile[parentKey],
          [childKey]: value
        }
      });
    } else {
      // Handle top-level properties
      setProfile({
        ...profile,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setIsEditMode(false);
    }, 1000);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="page-title">My Profile</h1>
        {!isEditMode && (
          <button 
            className="btn btn-primary" 
            onClick={() => setIsEditMode(true)}
          >
            <i className="fas fa-edit"></i> Edit Profile
          </button>
        )}
      </div>

      <div className="profile-content">
        <div className="profile-sidebar card">
          <div className="profile-avatar-container">
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className="profile-avatar" 
            />
            {isEditMode && (
              <div className="avatar-edit">
                <i className="fas fa-camera"></i>
                <span>Change Photo</span>
              </div>
            )}
          </div>
          
          <div className="profile-info">
            <h2 className="profile-name">{profile.name}</h2>
            <div className="user-rating">
              <span className="stars">
                <i className="fas fa-star"></i> {profile.rating}
              </span>
              <span className="review-count">
                ({profile.reviewCount} reviews)
              </span>
            </div>
            <p className="member-since">
              <i className="fas fa-user-clock"></i> Member since {profile.memberSince}
            </p>
          </div>
          
          <div className="profile-actions">
            <Link to="/dashboard" className="btn">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </Link>
          </div>
        </div>

        <div className="profile-details card">
          {isEditMode ? (
            <form onSubmit={handleSubmit}>
              <div className="profile-section">
                <h3 className="section-title">Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={profile.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={profile.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={profile.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="form-control"
                      value={profile.location}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="bio" className="form-label">Bio</label>
                  <textarea
                    id="bio"
                    name="bio"
                    className="form-control"
                    value={profile.bio}
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="profile-section">
                <h3 className="section-title">Vehicle Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="vehicle.model" className="form-label">Car Model</label>
                    <input
                      type="text"
                      id="vehicle.model"
                      name="vehicle.model"
                      className="form-control"
                      value={profile.vehicle.model}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vehicle.year" className="form-label">Year</label>
                    <input
                      type="text"
                      id="vehicle.year"
                      name="vehicle.year"
                      className="form-control"
                      value={profile.vehicle.year}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="vehicle.color" className="form-label">Color</label>
                    <input
                      type="text"
                      id="vehicle.color"
                      name="vehicle.color"
                      className="form-control"
                      value={profile.vehicle.color}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vehicle.licensePlate" className="form-label">License Plate</label>
                    <input
                      type="text"
                      id="vehicle.licensePlate"
                      name="vehicle.licensePlate"
                      className="form-control"
                      value={profile.vehicle.licensePlate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn" 
                  onClick={() => setIsEditMode(false)}
                  disabled={isSaving}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Saving...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="profile-section">
                <h3 className="section-title">Personal Information</h3>
                <div className="info-group">
                  <div className="info-label">
                    <i className="fas fa-envelope"></i> Email
                  </div>
                  <div className="info-value">{profile.email}</div>
                </div>
                <div className="info-group">
                  <div className="info-label">
                    <i className="fas fa-phone"></i> Phone
                  </div>
                  <div className="info-value">{profile.phone}</div>
                </div>
                <div className="info-group">
                  <div className="info-label">
                    <i className="fas fa-map-marker-alt"></i> Location
                  </div>
                  <div className="info-value">{profile.location}</div>
                </div>
                <div className="info-group">
                  <div className="info-label">
                    <i className="fas fa-user"></i> About Me
                  </div>
                  <div className="info-value bio">{profile.bio}</div>
                </div>
              </div>

              <div className="profile-section">
                <h3 className="section-title">Vehicle Information</h3>
                <div className="info-group">
                  <div className="info-label">
                    <i className="fas fa-car"></i> Car Model
                  </div>
                  <div className="info-value">{profile.vehicle.model}</div>
                </div>
                <div className="info-group">
                  <div className="info-label">
                    <i className="fas fa-calendar-alt"></i> Year
                  </div>
                  <div className="info-value">{profile.vehicle.year}</div>
                </div>
                <div className="info-group">
                  <div className="info-label">
                    <i className="fas fa-palette"></i> Color
                  </div>
                  <div className="info-value">{profile.vehicle.color}</div>
                </div>
                <div className="info-group">
                  <div className="info-label">
                    <i className="fas fa-id-card"></i> License Plate
                  </div>
                  <div className="info-value">{profile.vehicle.licensePlate}</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile; 