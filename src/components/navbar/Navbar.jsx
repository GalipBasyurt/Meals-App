import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>
          Meals <small>App</small>
        </h2>
      </div>
      <div className="links">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/categories">
            <li>Categories</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
