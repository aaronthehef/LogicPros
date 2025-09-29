import React from 'react';

export const Logo = ({ className = "logo-img" }) => {
  return (
    <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <img 
        src="/logicpros-new-logo.png" 
        alt="LogicPros" 
        className={className}
      />
    </a>
  );
};