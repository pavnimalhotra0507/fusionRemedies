import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import "./header.scss";

const headerLinks = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Service", url: "/service" },
  { label: "Products", url: "/products" },
  { label: "Contact", url: "/contact" },
];

function Header() {
  const [activeLink, setActiveLink] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggles the menu open/close
  };

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <div className="header-wrapper container">
        <img src={Logo} className="header-logo" alt="Logo" />
        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span
            className={isMenuOpen ? "hamburger-bar open" : "hamburger-bar"}
          ></span>
        </div>
        {/* Navigation Menu */}
        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="header-nav-list">
            {headerLinks.map((link, id) => (
              <li
                className={`header-nav-link ${
                  activeLink === id ? "active" : ""
                }`}
                key={id}
                onClick={() => {
                  setActiveLink(id);
                  setIsMenuOpen(false); // Close the menu when a link is clicked
                }}
              >
                <a className="text-decoration-none" href={link.url}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
