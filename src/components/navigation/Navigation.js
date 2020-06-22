import React from "react";
import { Link } from "react-router-dom";
import { MdLibraryMusic } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import logo from "../../images/logo.png";

import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav-top">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <h1>Boombox</h1>
        <a href="https://shrouded-reef-81516.herokuapp.com/">
          <button> Login </button>
        </a>
      </div>
      <div className="main-nav-bottom">
        <Link to="/">
          <TiHome className=" nav-home-icon" />
        </Link>
        <Link to="/search">
          <FaSearch className=" nav-search-icon" />
        </Link>
        <Link to="/playlists">
          <MdLibraryMusic className=" nav-library-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
