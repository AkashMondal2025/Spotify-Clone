import React from "react";
import logo from "../assets/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="img">
        <img src={logo} />
      </div>
      <div className="header-home">
        <div className="home-icon">
          <i className="fa-solid fa-house"></i>
        </div>
        <div className="home-input">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="What do you want to play?" />
        </div>
      </div>
      <div className="last-premium">
        <button type="button" className="badge">
          <i className="fa-solid fa-download"></i>Install App
        </button>
        <button type="button" className="noti-icon button">
          <i className="fa-solid fa-bell"></i>
        </button>

        <button type="button" className="user-icon button">
          <i className="fa-solid fa-user"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
