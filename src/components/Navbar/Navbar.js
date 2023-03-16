
import './Navbar.css'
import { useLocation } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarNew = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Netflix
      </Link>
      <Link to="/" className="navbar-logo">
       {location.pathname==="/"?"Home":"Favorite"}
      </Link>
      <div className="navbar-menu">
        <Link to="/" className="navbar-menu-item">
        Home
        </Link>
        <Link to="/favorite" className="navbar-menu-item">
        Favorite
        </Link>
      </div>
    </nav>
  );
};

export default NavbarNew;