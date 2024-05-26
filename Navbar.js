import React from 'react';
import './Navbar.css';
import images from '../asset/images.jpg'; // Adjust the path as needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={images} alt="Logo" />
        <span>My Portfolio</span>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Me</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
