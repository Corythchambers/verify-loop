import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        !event.target.closest(".nav") &&
        !event.target.closest(".mobile-menu-toggle")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" data-testid="logo">
            Verify Loop
          </Link>
          <nav
            className={`nav ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
            data-testid="navigation"
            id="mobile-navigation"
            role="navigation"
            aria-label="Main navigation"
          >
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  data-testid="nav-home"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  data-testid="nav-about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={closeMobileMenu}
                  data-testid="nav-services"
                  className={location.pathname === "/services" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  data-testid="nav-contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            data-testid="mobile-menu-toggle"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span aria-hidden="true">☰</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
