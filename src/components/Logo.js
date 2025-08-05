import React from 'react';
import logo from '../assets/LogoForDarkBackgroundnoTagline.png';

export const Logo = ({ className = "logo-img" }) => {
  return (
    <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <img 
        src={logo} 
        alt="LogicPros" 
        className={className}
      />
    </a>
  );
};