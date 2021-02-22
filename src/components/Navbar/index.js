import React from "react";

import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="spotifyLogo" src="https://i.imgur.com/lfdTLMk.jpg"></img>
      </div>
      <ul >
          <li className="active">Home</li>
          <li>Search</li>
          <li>Library</li>
      </ul>
      <div className="cokkies">
        <span>Cookies</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
}

export default Navbar;
