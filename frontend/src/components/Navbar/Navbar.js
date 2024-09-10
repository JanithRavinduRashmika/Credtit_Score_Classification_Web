import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ backgroundColor }) => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (page) => {
    switch (page) {
      case 'About':
        navigate('/article');
        break;
      case 'Products':
        navigate('/predict');
        break;
      case 'Home':
        navigate('/')
        break;
      default:
        break;
    }
  };

  return (
    <div className="navbar" style={{ backgroundColor: backgroundColor }}>
      <ul>
        <li onClick={() => handleNavClick('Home')}>CrediDecode</li>

      </ul>

      <ul>
        <li onClick={() => handleNavClick('Home')}>Home</li>
        <li onClick={() => handleNavClick('About')}>About</li>
        <li onClick={() => handleNavClick('Products')}>Products</li>
        <li>Insights</li>
        <li onClick={() => scrollToSection('contacts')}>Contacts</li>
      </ul>

      <ul>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </div>
  );
};

export default Navbar;