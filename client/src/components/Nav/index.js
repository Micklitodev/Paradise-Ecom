import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.isAdmin()) {
      return (
        <ul className="flex-row center">
          <li className="mx-1">
            <Link to="/adminorderview">View Orders</Link>
          </li>
          <li className="mx-1">
            <Link to="/manageproducts">Manage Products</Link>
          </li>
          <li className="mx-1">
            <Link to="/verifusers">Verify Users</Link>
          </li>
          <li className="mx-1">
            <Link to="/" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </li>
        </ul>
      );
    } else if (Auth.loggedIn() && !Auth.isAdmin()) {
      return (
        <ul className="flex-row center">
          <li className="mx-1">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mx-1">
            <Link href="/" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </li>
        </ul>
      );
    } else if (!Auth.loggedIn()) {
      return (
        <ul className="flex-row center">
          <li className="mx-2">
            <Link to="/signup" className="leftnav">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/home">Paradise</Link>
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
