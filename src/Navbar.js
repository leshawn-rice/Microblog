import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-Title">
        <NavLink exact to="/">Clowd</NavLink>
      </div>
      <div className="Navbar-Links">
        <NavLink exact to="/">Blog</NavLink>
        <NavLink exact to="/new">Add a new post</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;