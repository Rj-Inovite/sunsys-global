
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

// --- Inline SVG Icon Definitions (Replacing react-icons/fa) ---
const HomeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const InfoIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
  </svg>
);

const QuestionIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>
  </svg>
);

const EnvelopeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

const UserIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

// --- Theme Toggle Icons ---
const SunIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

const MoonIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

// --- Hamburger Menu Icon ---
const HamburgerIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

/**
 * Note: For the sophisticated hover highlight animation, pure inline styles are insufficient.
 * We are embedding a standard <style> tag within the component's return block.
 * In a production app, this CSS should be in a separate Navbar.css file.
 */

const navLinks = [
  { name: 'Home', icon: HomeIcon, href: '/' },
  { name: 'About', icon: InfoIcon, href: '/about' },
  { name: 'Why Us', icon: QuestionIcon, href: '/why-us' },
  { name: 'Contact', icon: EnvelopeIcon, href: '/contact' },
  { name: 'Login', icon: UserIcon, href: '/login' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Theme Variables ---
  const NAVY_BLUE = '#000080';
  const WHITE = '#FFFFFF';
  const HIGHLIGHT_BLUE = '#0000A0';

  // --- Inline Styles for Structure (Static properties) ---
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2px 40px',
    backgroundColor: WHITE,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoCircleStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: NAVY_BLUE,
    color: WHITE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const linkListStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  };

  const linkItemStyle = {
    marginLeft: '30px',
  };

  return (
    <>
      {/* This is the embedded CSS for the complex hover animation and link styling.
        It uses standard CSS selectors for the :hover and ::after pseudo-elements.
        In a real project, this should be moved to a CSS file.
      */}
      <style>
        {`
        .nav-link {
          text-decoration: none;
          color: #000000;
          font-weight: 600;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease;
          border-radius: 5px; /* For the login button styling */
        }

        .nav-icon {
          margin-right: 8px;
        }

        /* Highlight Animation Setup */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background-color: ${HIGHLIGHT_BLUE};
          transition: all 0.3s ease-out;
          transform: translateX(-50%);
        }

        /* Hover Effect */
        .nav-link:hover {
          color: ${HIGHLIGHT_BLUE};
        }
        
        /* Expand the underline on hover */
        .nav-link:hover::after {
          width: 100%;
        }

        /* Special Styling for the Login Link */
        .navbar-links li:last-child .nav-link {
          transition: all 0.3s ease;
          border: 2px solid ${NAVY_BLUE}; /* Border for definition */
        }

        /* Login Hover: Full background highlight */
        .navbar-links li:last-child .nav-link:hover {
          color: ${WHITE};
          background-color: ${NAVY_BLUE};
        }

        /* Remove underline animation for Login button */
        .navbar-links li:last-child .nav-link::after {
          display: none;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .navbar {
            padding: 2px 20px;
          }

          .navbar-links {
            display: flex; /* Always flex, but positioned off-screen */
            position: fixed;
            top: 0;
            right: -250px; /* Off-screen to the right */
            width: 250px;
            height: 100vh;
            background-color: ${WHITE};
            flex-direction: column;
            padding: 60px 20px 20px 20px; /* Top padding to account for navbar */
            box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transition: right 0.3s ease;
          }

          .navbar-links.show {
            right: 0; /* Slide in from right */
          }

          .navbar-links li {
            margin-left: 0;
            margin-bottom: 15px;
          }

          .nav-link {
            padding: 10px 0;
          }

          /* Hamburger Menu Button */
          .hamburger {
            display: block;
            background: none;
            border: none;
            font-size: 24px;
            color: ${NAVY_BLUE};
            cursor: pointer;
          }
        }

        /* Hide hamburger on desktop */
        @media (min-width: 769px) {
          .hamburger {
            display: none;
          }
        }
        `}
      </style>

      <nav style={navbarStyle}>
        {/* 1. Logo (Circular) */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={logoCircleStyle}>
            <img src={logo} alt="Website Logo" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* 2. Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul className={`navbar-links ${isMenuOpen ? 'show' : ''}`} style={linkListStyle}>
            {navLinks.map((link) => (
              <li key={link.name} style={linkItemStyle}>
                <Link to={link.href} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  {/* Symbol/Icon */}
                  {/* Now using the local SVG component */}
                  <link.icon className="nav-icon" />
                  {/* Text */}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Button */}
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              color: NAVY_BLUE,
              cursor: 'pointer',
              marginLeft: '20px',
            }}
          >
            <HamburgerIcon />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
