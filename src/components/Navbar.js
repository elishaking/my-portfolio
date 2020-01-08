import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ route = "home" }) {
  return (
    <nav className="navbar">
      <h1>King Elisha</h1>

      <ul>
        <Link to="/" className={route === "home" ? "active" : ""}>Home</Link>
        <Link to="/github" className={route === "github" ? "active" : ""}>Github</Link>
        <Link to="/projects" className={route === "projects" ? "active" : ""}>Projects</Link>
      </ul>
    </nav>
  )
}
