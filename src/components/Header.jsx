import React from "react";
import { Link } from "react-router-dom";
import ChangeUser from "./ChangeUser";
import { UserContext } from "../contexts/User";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div class="nav">
      <input type="checkbox" id="nav-check"></input>
      <div class="nav-header">
        <div id="nav-title-id" class="nav-title">
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
      <div className="nav-links-box">
        <ul class="nav-links" id="nav-links-id">
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Logged in as {user.username}</li>
          <ChangeUser />
        </ul>
      </div>
    </div>
  );
};
export default Header;
