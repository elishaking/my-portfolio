import React from "react";
import { Link } from "react-router-dom";
import Github from "./icons/Github";
import Dribbble from "./icons/Dribbble";
import Medium from "./icons/Medium";
import DevTo from "./icons/DevTo";
import Linkedin from "./icons/Linkedin";

export default function Navbar({ route = "home" }) {
  return (
    <nav className="navbar">
      <h1>King Elisha</h1>

      <ul className="svg">
        <div>
          <a
            href="https://github.com/elishaking"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://github.com/elishaking"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Dribbble />
          </a>
          <a
            href="https://github.com/elishaking"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/elishaking"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Medium />
          </a>
          <a
            href="https://github.com/elishaking"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DevTo />
          </a>
          <a
            href="https://github.com/elishaking"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Medium alt />
          </a>
        </div>
      </ul>

      <ul>
        <Link to="/" className={`text ${route === "home" ? "active" : ""}`}>
          Home
        </Link>
        <Link
          to="/projects"
          className={`text ${route === "projects" ? "active" : ""}`}
        >
          Projects
        </Link>
        <Link
          to="/about"
          className={`text ${route === "about" ? "active" : ""}`}
        >
          About
        </Link>
        <a
          href="https://github.com/elishaking"
          target="_blank"
          rel="noopener noreferrer"
          className="text"
        >
          Github
        </a>
      </ul>
    </nav>
  );
}
