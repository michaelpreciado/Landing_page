import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Blog' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            <span className="brand-text">MP</span>
          </Link>

          {/* Desktop nav */}
          <div className="navbar-desktop">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line className="ham-line line1" x1="4" y1="8" x2="20" y2="8" />
              <line className="ham-line line2" x1="4" y1="14" x2="20" y2="14" />
              <line className="ham-line line3" x1="4" y1="20" x2="20" y2="20" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Backdrop overlay */}
      <div className={`mobile-backdrop ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <nav className="mobile-nav">
          {navItems.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              className="mobile-nav-link"
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
