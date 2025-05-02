import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Gari Lagbe</h2>
          <p>
            Gari Lagbe is a revolutionary ride-sharing platform that connects drivers and passengers in a seamless, 
            eco-friendly, and cost-effective way. Our mission is to transform urban transportation by making it more 
            accessible, sustainable, and convenient for everyone.
          </p>
          
          <h3>Our Vision</h3>
          <p>
            We envision a future where transportation is not just a means to an end, but a positive experience that 
            contributes to environmental sustainability and community building. By reducing the number of single-occupancy 
            vehicles on the road, we're helping to decrease traffic congestion and carbon emissions.
          </p>

          <h3>What Sets Us Apart</h3>
          <ul>
            <li>Eco-friendly approach to transportation</li>
            <li>Advanced safety features and driver verification</li>
            <li>Flexible ride options for different needs</li>
            <li>Community-driven platform with user feedback</li>
            <li>Competitive pricing and transparent fare structure</li>
          </ul>

          <h3>Our Commitment</h3>
          <p>
            At Gari Lagbe, we're committed to providing a safe, reliable, and enjoyable ride-sharing experience. 
            Our platform is built on the principles of trust, transparency, and environmental responsibility. 
            We continuously work to improve our services and implement new features that benefit both drivers and passengers.
          </p>
        </div>
        
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Ride Sharing Community" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 