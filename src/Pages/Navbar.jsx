import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa'; // Import icons
import './Navbar.css'; // Import CSS

function Navbar() {
  // State to manage the active dropdown
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Function to toggle dropdowns
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="navbar">
      <div className="logo">SoftPulse.</div>
      <ul className="nav-links">
        <li className="dropdown">
          <Link to="/" onClick={() => toggleDropdown('home')} className="active">Home</Link>
          {activeDropdown === 'home' && (
            <ul className="dropdown-menu">
              <li><Link to="/main-home">Main Home</Link></li>
              <li><Link to="/app-landing">App Landing Home</Link></li>
              <li><Link to="/hosting">Hosting Home</Link></li>
              <li><Link to="/startup-agency">Startup Agency Home</Link></li>
              <li><Link to="/metro-showcase">Metro Showcase</Link></li>
              <li><Link to="/marketing">Marketing Home</Link></li>
              <li><Link to="/tech">Tech Home</Link></li>
              <li><Link to="/saas">SaaS Home</Link></li>
              <li><Link to="/digital-agency">Digital Agency</Link></li>
              <li><Link to="/product-presentation">Product Presentation</Link></li>
              <li><Link to="/split-slider">Split Slider Home</Link></li>
              <li><Link to="/app-presentation">App Presentation</Link></li>
            </ul>
          )}
        </li>
        
        <li className="dropdown">
          <Link  onClick={() => toggleDropdown('pages')}>Pages</Link>
          {activeDropdown === 'pages' && (
            <ul className="dropdown-menu">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          )}
        </li>

        <li className="dropdown">
          <Link  onClick={() => toggleDropdown('portfolio')}>Portfolio</Link>
          {activeDropdown === 'portfolio' && (
            <ul className="dropdown-menu">
              <li><Link to="/project1">Project 1</Link></li>
              <li><Link to="/project2">Project 2</Link></li>
              <li><Link to="/project3">Project 3</Link></li>
            </ul>
          )}
        </li>

        <li className="dropdown">
          <Link  onClick={() => toggleDropdown('blog')}>Blog</Link>
          {activeDropdown === 'blog' && (
            <ul className="dropdown-menu">
              <li><Link to="/latest-posts">Latest Posts</Link></li>
              <li><Link to="/categories">Categories</Link></li>
            </ul>
          )}
        </li>

        <li className="dropdown">
          <Link  onClick={() => toggleDropdown('shop')}>Shop</Link>
          {activeDropdown === 'shop' && (
            <ul className="dropdown-menu">
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/sales">Sales</Link></li>
            </ul>
          )}
        </li>

        <li className="dropdown">
          <Link  onClick={() => toggleDropdown('elements')}>Elements</Link>
          {activeDropdown === 'elements' && (
            <ul className="dropdown-menu">
              <li><Link to="/buttons">Buttons</Link></li>
              <li><Link to="/forms">Forms</Link></li>
            </ul>
          )}
        </li>
      </ul>
      <div className="icons">
        <div className="icon cart-icon">
          <FaShoppingCart />
          <span className="cart-badge">0</span>
        </div>
        <FaSearch className="icon" />
        <FaBars className="icon menu-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
