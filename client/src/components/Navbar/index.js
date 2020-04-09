import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

import './navbar.css';

const NavBar = (props) => {
  const handleLogout = () => {
    API.logout().then(res => {
      window.location.assign("/");
    });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        React Todos
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todos">Todos</Link>
          </li>

          {!props.isLoggedIn &&
          <React.Fragment>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </React.Fragment>
          }
          
          {props.isLoggedIn && 
          <li className="nav-item">
            <a className="nav-link" onClick={handleLogout}>Logout</a>
          </li>
          }
          
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
