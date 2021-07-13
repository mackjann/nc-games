import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check"></input>
      <div class="nav-header">
        <div class="nav-title">nc-games</div>
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
          <Link to="/">Reviews</Link>
        </li>
        <li>
          <Link to="/">Categories</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Change User</Link>
        </li>
        <li>logged in as: default</li>
      </ul>
    </div>
  );
};
export default Header;
