import React from "react";
import Auth from "../../utils/auth";
import NotVerifiedBar from "../NotVerifiedBar";
import SearchBar from "../Search";
import { Link } from "react-router-dom";
import { CiLogin, CiLogout, CiGrid42 } from "react-icons/ci";
import { GoHome } from "react-icons/go";

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
            <Link to="/home" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </li>
        </ul>
      );
    } else if (Auth.loggedIn() && !Auth.isAdmin()) {
      return (
        <>
          <ul className="flex-row center" style={{ marginLeft: "20%" }}>
            <li
              className="mx-2 "
              style={{ marginTop: 30, position: "relative", left: "-50%" }}
            >
              <SearchBar />
            </li>
            <li className="mx-2">
              <Link to="/dashboard">
                <div>
                  <CiGrid42 size={28} style={{ marginLeft: 6 }} />
                  <p
                    style={{
                      textAlign: "center",
                      position: "relative",
                      top: -5,
                    }}
                  >
                    dash
                  </p>
                </div>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="/home" onClick={() => Auth.logout()}>
                <div>
                  <CiLogout size={27} style={{ marginLeft: 4 }} />
                  <p
                    style={{
                      textAlign: "center",
                      position: "relative",
                      top: -5,
                    }}
                  >
                    logout
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </>
      );
    } else if (!Auth.loggedIn()) {
      return (
        <ul className="flex-row center">
          <li className="mx-2" style={{ marginTop: 30 }}>
            <SearchBar />
          </li>
          <li className="mx-2">
            <Link to="/login">
              <div>
                <CiLogin size={29} />
                <p
                  style={{
                    textAlign: "center",
                    position: "relative",
                    top: -9,
                  }}
                >
                  login
                </p>
              </div>
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <>
      <header className="flex-row px-1">
        <h1 style={{ marginTop: 2 }}>
          <Link to="/home">
            <GoHome size={29} />
            <p
              style={{
                textAlign: "center",
                position: "relative",
                top: -9,
                marginLeft: 10,
              }}
            >
              login
            </p>
          </Link>
        </h1>

        <nav>{showNavigation()}</nav>
        {console.log(`
            "We only have room
            for one specimen,       "Let us take the small,
            Dtlxvr. Which shall      low-decible one, Ftxbp.
                we take?"               I like peace."
                           _.-'~~~~'-._   /
                .       .-~            ~-.         .
                     .-~   (oo)  (oo)    ~-.
                    (______//~~//~~ ||_______)
                _.-~"                         "~-._
               |O=O=O=O=O=O=O=O=O=O=O=O=O=O=O=O=O=O|    *
              |_____________________________________|
                          x x x x x x x
                .  *       x_x_x_x_x_x.                  
                              
                             DEV: ML.                       
                                                             `)}
      </header>
      {Auth.loggedIn() ? Auth.isVerified() ? "" : <NotVerifiedBar /> : null}
    </>
  );
}

export default Nav;
