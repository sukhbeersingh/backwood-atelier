import React, { useState } from 'react';
import { motion } from "motion/react"
import './Menu.css'; // Optional: Add styles for the menu

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const menuVariants = {
      open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          transition: {
              type: "spring",
              stiffness: 20,
              restDelta: 2,
          },
      }),
      closed: {
          clipPath: "circle(30px at 40px 40px)",
          transition: {
              delay: 0.2,
              type: "spring",
              stiffness: 400,
              damping: 40,
          },
      },
  }

  return (
    <div>
      <button 
      className={`hamburger-button  ${isMenuOpen ? 'open' : ''}`} 
      onClick={toggleMenu}
      >
        <span className='hamburger-text'>{isMenuOpen ? 'Close' : 'Menu'}</span>
        <div className="hamburger-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {isMenuOpen && (
        <motion.div className={`menu-screen ${isMenuOpen ? 'open' : ''}`}
          variants={menuVariants} // Apply animation variants
          animate="open"
          exit="closed"
          key="menu"
       >
          <ul className="menu-items">
            <li>Products</li>
            <li>Services</li>
            <li>Contact us</li>
            <li>Our Story</li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Menu;