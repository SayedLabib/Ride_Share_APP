import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    origin: '',
    destination: '',
    date: ''
  });

  const { origin, destination, date } = searchData;

  useEffect(() => {
    // Initialize Swiper after component mounts
    if (window.Swiper) {
      const swiper = new window.Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        },
      });
    }
  }, []);

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

      {/* Vehicle Types Section */}
      <section className="vehicle-types">
        <div className="container">
          <h2 className="section-title">Vehicle Options</h2>
          <p className="section-subtitle">Choose from a variety of vehicle types to match your preferences</p>
          
          <div className="vehicle-grid">
            <div className="vehicle-card">
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2670&auto=format&fit=crop"
                alt="Economy car" 
                className="vehicle-image"
              />
              <h3>Economy</h3>
              <p>Compact & efficient cars for everyday travel</p>
            </div>
            <div className="vehicle-card">
              <img 
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2670&auto=format&fit=crop"
                alt="SUV" 
                className="vehicle-image"
              />
              <h3>SUV</h3>
              <p>Spacious vehicles perfect for groups & luggage</p>
            </div>
            <div className="vehicle-card">
              <img 
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2574&auto=format&fit=crop"
                alt="Premium car" 
                className="vehicle-image"
              />
              <h3>Premium</h3>
              <p>Luxury vehicles for a comfortable journey</p>
            </div>
            <div className="vehicle-card">
              <img 
                src="https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=2574&auto=format&fit=crop"
                alt="Electric car" 
                className="vehicle-image"
              />
              <h3>Electric</h3>
              <p>Eco-friendly electric vehicles for zero emissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="payment-methods">
        <div className="container">
          <h2 className="section-title">Secure Payment Options</h2>
          <p className="section-subtitle">Multiple ways to pay for your ride, safely and securely</p>
          
          <div className="payment-logos">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
              alt="Visa" 
              className="payment-logo"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
              alt="Mastercard" 
              className="payment-logo"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
              alt="PayPal" 
              className="payment-logo"
            />
            <img 
              src="https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg" 
              alt="bKash" 
              className="payment-logo"
            />
            <img 
              src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" 
              alt="Nagad" 
              className="payment-logo"
            />
          </div>
          
          <div className="payment-info">
            <div className="payment-feature">
              <i className="fas fa-lock"></i>
              <h4>Secure Transactions</h4>
              <p>All payments are encrypted and processed securely</p>
            </div>
            <div className="payment-feature">
              <i className="fas fa-shield-alt"></i>
              <h4>Fraud Protection</h4>
              <p>Advanced systems to protect your payment information</p>
            </div>
            <div className="payment-feature">
              <i className="fas fa-money-bill-wave"></i>
              <h4>No Hidden Fees</h4>
              <p>Transparent pricing with no surprise charges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-sm text-gray-500 font-medium text-center block mb-2">TESTIMONIALS</span>
            <h2 className="text-4xl text-center font-bold text-gray-900">What Our Happy Users Say!</h2>
          </div>
          
          {/* Slider wrapper */}
          <div className="swiper mySwiper">
            <div className="swiper-wrapper w-max">
              <div className="swiper-slide">
                <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-primary-500 hover:shadow-sm slide_active:border-primary">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500">
                      <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                      </svg>
                      <span className="text-base font-semibold text-primary-500">4.9</span>
                    </div>
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                      "I've been using RideShare for my daily commute for 3 months now. It's saved me money and I've made some great connections with fellow commuters!"
                    </p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                    <img className="rounded-full h-10 w-10 object-cover" src="https://randomuser.me/api/portraits/women/43.jpg" alt="Sarah M." />
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Sarah M.</h5>
                      <span className="text-sm leading-4 text-gray-500">New York</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="swiper-slide">
                <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-primary-500 slide_active:border-primary hover:shadow-sm">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500">
                      <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                      </svg>
                      <span className="text-base font-semibold text-primary-500">4.8</span>
                    </div>
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                      "As a driver, I've been able to offset my travel costs significantly. The platform is easy to use and the customer support is excellent when needed."
                    </p>
                  </div>
                  <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                    <img className="rounded-full h-10 w-10 object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="James L." />
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">James L.</h5>
                      <span className="text-sm leading-4 text-gray-500">Chicago</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="swiper-slide">
                <div className="flex justify-between flex-col lg:w-full group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto slide_active:border-primary hover:border-primary-500 hover:shadow-sm">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500">
                      <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                      </svg>
                      <span className="text-base font-semibold text-primary-500">5.0</span>
                    </div>
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                      "I was skeptical at first, but RideShare has completely changed how I travel between cities. It's reliable, affordable, and eco-friendly!"
                    </p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                    <img className="rounded-full h-10 w-10 object-cover" src="https://randomuser.me/api/portraits/women/67.jpg" alt="Emma R." />
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Emma R.</h5>
                      <span className="text-sm leading-4 text-gray-500">Boston</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="swiper-slide">
                <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto slide_active:border-primary hover:border-primary-500 hover:shadow-sm">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500">
                      <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                      </svg>
                      <span className="text-base font-semibold text-primary-500">4.9</span>
                    </div>
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                      "The RideShare app is intuitive and makes finding rides so easy. I've saved thousands on transportation costs this year alone!"
                    </p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                    <img className="rounded-full h-10 w-10 object-cover" src="https://randomuser.me/api/portraits/men/68.jpg" alt="Michael T." />
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Michael T.</h5>
                      <span className="text-sm leading-4 text-gray-500">San Francisco</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="swiper-slide">
                <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500 w-full mx-auto slide_active:border-primary hover:border-primary-500 hover:shadow-sm">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500">
                      <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                      </svg>
                      <span className="text-base font-semibold text-primary-500">4.7</span>
                    </div>
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                      "The verification system makes me feel safe as a female traveler. I've had nothing but positive experiences with drivers and fellow passengers."
                    </p>
                  </div>
                  <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                    <img className="rounded-full h-10 w-10 object-cover" src="https://randomuser.me/api/portraits/women/45.jpg" alt="Jessica K." />
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">Jessica K.</h5>
                      <span className="text-sm leading-4 text-gray-500">Denver</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-preview py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
              <h2 className="section-title">About GariLaGBE</h2>
              <p className="mb-6">
                GariLaGBE is a community-driven ridesharing platform designed to connect drivers with empty seats to passengers 
                traveling the same way. We're on a mission to make travel more affordable, sociable, and sustainable.
              </p>
              <p className="mb-6">
                Founded in 2022, our platform has already helped thousands of people share rides, reduce carbon emissions, 
                and build new connections across the country.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop" 
                alt="GariLaGBE Team" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help & Support Section */}
      <section className="help-support-preview py-16">
        <div className="container">
          <h2 className="section-title text-center">Need Help?</h2>
          <p className="text-center section-subtitle mb-12">
            We're here to support you every step of the way
          </p>
          
          <div className="grid-3">
            <div className="help-card">
              <div className="help-icon">
                <i className="fas fa-question-circle"></i>
              </div>
              <h3>Frequently Asked Questions</h3>
              <p>Find answers to common questions about our ridesharing service.</p>
              <Link to="/help" className="help-link">
                View FAQs <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            
            <div className="help-card">
              <div className="help-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <h3>User Guides</h3>
              <p>Detailed guides on how to use our platform effectively.</p>
              <Link to="/help" className="help-link">
                Read Guides <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            
            <div className="help-card">
              <div className="help-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Contact Support</h3>
              <p>Get in touch with our friendly support team for personalized assistance.</p>
              <Link to="/help" className="help-link">
                Contact Us <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;