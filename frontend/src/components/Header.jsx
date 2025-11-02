import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <Link to="/" aria-label="Travel Booking Home" className="brand-link">
            <img src="/logo.svg" alt="Travel Booking logo" className="site-logo" />
            <span className="logo-text">Travel Booking</span>
          </Link>
        </div>
        <nav>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/search" activeClassName="active">Search</NavLink>
          <NavLink to="/flights" activeClassName="active">Flights</NavLink>
          <NavLink to="/buses" activeClassName="active">Buses</NavLink>
          <NavLink to="/trains" activeClassName="active">Trains</NavLink>
          <NavLink to="/tours" activeClassName="active">Tours</NavLink>
          <NavLink to="/book" activeClassName="active">Book</NavLink>
          <NavLink to="/bookings" activeClassName="active">Bookings</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;