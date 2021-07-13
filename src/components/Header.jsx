import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check"></input>
      <div class="nav-header">
        <div class="nav-title">
          <Link to="/">nc-games</Link>
        </div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <ul class="nav-links">
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/change-user">Change User</Link>
        </li>
        <li>logged in as: default</li>
      </ul>
    </div>
  );
};
export default Header;
