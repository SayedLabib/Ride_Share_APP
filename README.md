# RideShare - Ride Sharing Web Application

A modern web application for ride sharing built with React, allowing users to find and offer rides, create accounts, and manage their profiles.

## Features

- User authentication (login/register)
- Find available rides by searching for origin, destination, and date
- Offer rides as a driver
- User profiles with personal and vehicle information
- Responsive design for all device sizes
- Dashboard for managing your rides and requests

## Tech Stack

- React 18.x
- React Router DOM 6.x for navigation
- Axios for API requests
- CSS3 with custom styling
- Font Awesome icons
- Responsive design principles

## Application Structure

The application is organized as follows:

```
src/
├── components/
│   ├── auth/          # Authentication components (Login, Register)
│   ├── dashboard/     # Dashboard components for user activity
│   ├── layout/        # Layout components (Navbar, Footer)
│   ├── pages/         # Page components (Home, RideSearch, OfferRide)
│   ├── profile/       # Profile management components
│   └── rides/         # Ride-related components (BookRide)
├── App.js             # Main App component with routing configuration
├── App.css            # Main application styles
├── index.js           # Entry point with React 18 createRoot
└── index.css          # Global styles
```

## Component Functionality

- **Auth Components**: Handle user registration and login processes
- **Layout Components**: Provide consistent UI structure with navigation and footer
- **Pages Components**: 
  - Home: Landing page with search functionality and app benefits
  - RideSearch: Advanced search for available rides
  - OfferRide: Form for drivers to offer new rides
- **Profile Components**: Manage user information and preferences
- **Rides Components**: Handle the ride booking process

## Prerequisites

- Node.js 16.x or higher (Node 20+ requires special configuration - see Troubleshooting)
- npm 6.x or higher

## Installation and Setup

1. Clone the repository:
```
git clone https://github.com/yourusername/ride-share-app.git
cd ride-share-app
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Running in Development Mode

The application will run in development mode with the above commands, providing:
- Hot module reloading for instant feedback
- Error reporting in browser console
- Development server at localhost:3000

## Troubleshooting

### Node.js 17+ Compatibility Issue

If you're using Node.js version 17 or higher, you might encounter an OpenSSL-related error:
```
Error: error:0308010C:digital envelope routines::unsupported
```

To resolve this, use one of these methods:

**Option 1**: Set Node options before starting the app (Windows Command Prompt):
```
set NODE_OPTIONS=--openssl-legacy-provider && npm start
```

**Option 2**: Set Node options before starting the app (Windows PowerShell):
```
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start
```

**Option 3**: Downgrade to Node.js 16.x which is fully compatible with React Scripts 3.0.1

## Application Flow

1. User arrives at the Home page and can:
   - Search for rides directly from the hero section
   - Learn about the application's benefits
   - Navigate to Login/Register if not authenticated

2. Authentication:
   - New users can register with email/password
   - Existing users can log in
   - Authentication state is managed with React Context

3. Finding Rides:
   - Users can search by origin, destination, and date
   - Results display available rides with driver information
   - Users can request to book a ride

4. Offering Rides:
   - Drivers can create ride offers specifying route, time, and available seats
   - Manage ride offers through the dashboard

5. Dashboard:
   - View rides you've booked
   - Manage rides you're offering as a driver
   - Update profile information

## Future Enhancements

- Backend integration with Node.js and Express
- Real-time notifications for ride requests and confirmations
- In-app messaging between passengers and drivers
- Payment integration
- Reviews and ratings system
- Map integration for route visualization



## For windows command Prompt

set NODE_OPTIONS=--openssl-legacy-provider && npm start

## For windows PowerShell
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start


## License

MIT

## Acknowledgements

- Images from [Unsplash](https://unsplash.com)
- User avatars from [RandomUser](https://randomuser.me)

