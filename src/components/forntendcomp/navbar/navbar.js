import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo-link">Logo</Link>
        </div>
        <div className="nav-links">
          <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/mens" className="nav-link">Men</Link></li>
            <li><Link to="/womens" className="nav-link">Women</Link></li>
            <li><Link to="/kids" className="nav-link">Kids</Link></li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="search-btn">Search</button>
          <button className="cart-btn">Cart</button>
          <button className="login-btn">Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
