import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setAuthenticate }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const menuList = [
    'Women',
    'Men',
    'Baby',
    'Kids',
    'H&M HOME',
    'Sport',
    'Sale',
    '지속가능성',
  ];

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const search = (e) => {
    if (e.key === 'Enter') {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="navbar-main">
        <button
          className="navbar-hamburger"
          onClick={() => setSideMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="login-button" onClick={handleLoginClick}>
          <FontAwesomeIcon icon={faUser} />
          {isAuthenticated ? (
            <div onClick={() => setAuthenticate(false)}>로그아웃</div>
          ) : (
            <div onClick={() => setAuthenticate(true)}>로그인</div>
          )}
        </div>
      </div>

      <div className="nav-section" onClick={handleHomeClick}>
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
        />
      </div>

      <div className="menu-area desktop">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            className="search-bar-input"
            type="text"
            placeholder="Search..."
            onKeyPress={(e) => search(e)}
          />
        </div>
      </div>

      {/* Side menu for mobile */}
      <div className={`side-menu${sideMenuOpen ? ' open' : ''}`}>
        <button
          className="side-menu-close"
          onClick={() => setSideMenuOpen(false)}
        >
          ×
        </button>
        <ul className="side-menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
      </div>
      {sideMenuOpen && (
        <div
          className="side-menu-overlay"
          onClick={() => setSideMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
