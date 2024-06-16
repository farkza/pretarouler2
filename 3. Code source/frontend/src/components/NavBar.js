import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../img/pretarouler-logo.png';
import userLogo from '../img/user-logo.svg';
import '../css/navbar.css';

const Navbar = ({ isLoggedIn, userFirstName, handleLogout }) => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/home" className={getNavLinkClass('/home')}>Accueil</Link></li>
          <li><Link to="/catalog" className={getNavLinkClass('/catalog')}>Catalogue</Link></li>
          <li><Link to="/about" className={getNavLinkClass('/about')}>À propos</Link></li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <div className="user-info">
          <img src={userLogo} alt="User Logo" />
          <span onClick={handleLogout}>{userFirstName}</span>
        </div>
      ) : (
        <Link to="/login">
          <button className="login-button">Se connecter</button>
        </Link>
      )}
    </header>
  );
};

export default Navbar;
