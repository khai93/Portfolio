import React from 'react';
import Space from "./Space.jsx";
import useHashLocation from '../hooks/useHashLocation.jsx';
export default () => {
  const location = useHashLocation();

  const isActive = (name) => name === location ? 'navbar-active' : '';
  
  return (
    <React.Fragment>
      <nav className="navbar">
        <a href="#" className={isActive('')}>Home</a>
        <a href="#projects" className={isActive('projects')}>Projects</a>
        <a href="#about" className={isActive('about')}>About</a>
        <a href="#contact" className={isActive('contact')}>Contact</a>
      </nav>
    </React.Fragment>
  )
}