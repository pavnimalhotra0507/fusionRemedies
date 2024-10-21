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

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <div className="header-wrapper container">
        <img src={Logo} className="header-logo" />
        <div className="header-nav">
          <ul className="header-nav-list d-flex">
            {headerLinks.map((link, id) => (
              <li
                className={`header-nav-link ${
                  activeLink === id ? "active" : ""
                }`}
                key={id}
              >
                <a className="text-decoration-none" href={link.url}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
