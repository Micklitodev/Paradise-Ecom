import React, { useState } from "react";
import Auth from "../../utils/auth";
import NotVerifiedBar from "../NotVerifiedBar";
import SearchBar from "../Search";
import { Link } from "react-router-dom";
import {
  CiLogin,
  CiLogout,
  CiBoxList,
  CiMaximize1,
  CiMinimize1,
  CiCirclePlus,
} from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { TOGGLE_CART } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";

const Nav = () => {
  const [, dispatch] = useStoreContext();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav((prevNav) => !prevNav);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
    window.location.assign("#shoppingCart");
    setNav(false);
  }

  return (
    <>
      <div className="sticky top-0 z-10 w-full ">
        <header className="w-full h-14 drop-shadow-md">
          <div
            className="flex items-center justify-between w-full h-full px-2"
            style={{
              boxShadow: "0 0 1rem rgba(5,5, 5, 0.2)",
              backgroundColor: "rgba(5, 5, 5, 0.09)",
            }}
          >
            {/* site name container */}
            <Link
              to="/home"
              className="px-4 text-white hover:text-indigo-200 mb-1"
            >
              <h3>PARADISE</h3>
            </Link>

            {/* desktop navigation */}
            <nav>
              <ul className="hidden space-x-9 md:flex md:items-center mr-16">
                {Auth.isAdmin() ? (
                  <>
                    <li className="mx-1">
                      <Link to="/adminorderview" className="text-white">
                        View Orders
                      </Link>
                    </li>
                    <li className="mx-1">
                      <Link to="/manageproducts" className="text-white">
                        Manage Products
                      </Link>
                    </li>
                    <li className="mx-1">
                      <Link to="/verifusers" className="text-white">
                        Verify Users
                      </Link>
                    </li>
                    <li className="mx-1">
                      <Link
                        to="/home"
                        className="text-white"
                        onClick={() => Auth.logout()}
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                ) : null}
                {Auth.loggedIn() && !Auth.isAdmin() ? (
                  <>
                    <li className="absolute mt-4 center ml-10">
                      <SearchBar />
                    </li>

                    <li>
                      <Link
                        to="/home"
                        className="px-4 text-slate-100 hover:text-indigo-200 mb-1"
                      >
                        <GoHome style={{ color: "white" }} size={19} />
                        <p
                          className="text-white"
                          style={{ marginLeft: -3, fontSize: 10 }}
                        >
                          Home
                        </p>
                      </Link>
                    </li>

                    <li style={{ position: "relative", top: -0 }}>
                      <Link to="/dashboard">
                        <div>
                          <CiBoxList size={20} style={{ color: "white" }} />
                          <p
                            className="text-white"
                            style={{ marginLeft: -2, fontSize: 10 }}
                          >
                            Dash
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li style={{ position: "relative", top: -0 }}>
                      <Link href="/home" onClick={() => Auth.logout()}>
                        <div>
                          <CiLogout
                            size={20}
                            style={{ marginLeft: 1, color: "white" }}
                          />
                          <p
                            className="text-white"
                            style={{ marginLeft: -3, fontSize: 10 }}
                          >
                            Logout
                          </p>
                        </div>
                      </Link>
                    </li>
                  </>
                ) : null}
                {!Auth.loggedIn() ? (
                  <>
                    <li className="absolute mt-4 center ml-10">
                      <SearchBar />
                    </li>
                    <li>
                      <Link
                        to="/home"
                        className="px-4 text-slate-100 hover:text-indigo-200 mb-1"
                      >
                        <GoHome style={{ color: "white" }} size={19} />
                        <p
                          className="text-white"
                          style={{ marginLeft: -3, fontSize: 10 }}
                        >
                          Home
                        </p>
                      </Link>
                    </li>

                    <li style={{ position: "relative", top: -1 }}>
                      <Link
                        className="px-4 text-slate-100 hover:text-indigo-200"
                        to="/signup"
                      >
                        <CiCirclePlus
                          style={{ color: "white", marginLeft: 5 }}
                          size={20}
                        />
                        <p className="text-white" style={{ fontSize: 10 }}>
                          Signup
                        </p>
                      </Link>
                    </li>

                    <li style={{ position: "relative", top: -1 }}>
                      <Link
                        className="px-4 text-slate-100 hover:text-indigo-200"
                        to="/login"
                      >
                        <CiLogin style={{ color: "white" }} size={20} />
                        <p className="text-white" style={{ fontSize: 10 }}>
                          Login
                        </p>
                      </Link>
                    </li>
                  </>
                ) : null}
              </ul>
            </nav>

            {/* mobile menu button */}
            <div className="md:hidden" onClick={handleClick}>
              {!nav ? (
                <CiMaximize1 size={21} className="w-8 text-white" />
              ) : (
                <CiMinimize1 size={22} className="w-8 text-white" />
              )}
            </div>
          </div>

          {/* mobile navigation */}
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute bg-yellow-600 bg-opacity-40 opacity-90 w-full px-8 pb-4 md:hidden space-y-2 text-right"
            }
          >
            <li>
              <Link
                to="/home"
                className="px-4 text-slate-100 hover:text-indigo-200"
              >
                <p style={{ marginLeft: -8 }}>Home</p>
              </Link>
            </li>
            <hr />
            {Auth.isAdmin() ? (
              <>
                <li className=" px-1 py-1">
                  <Link to="/adminorderview">
                    {" "}
                    <p> View Orders</p>
                  </Link>
                </li>
                <hr />
                <li className=" px-1 py-1">
                  <Link to="/manageproducts">
                    <p>Manage Products </p>
                  </Link>
                </li>
                <hr />
                <li className=" px-1 py-1">
                  <Link to="/verifusers">
                    <p> Verify Users</p>
                  </Link>
                </li>
                <hr />
                <li className="px-1 py-1">
                  <Link to="/home" onClick={() => Auth.logout()}>
                    <p>Logout</p>
                  </Link>
                </li>
              </>
            ) : null}
            {Auth.loggedIn() && !Auth.isAdmin() ? (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="px-4 text-slate-100 hover:text-indigo-200"
                  >
                    <p>Dashboard</p>
                  </Link>
                </li>

                <hr />
                <li>
                  <Link
                    className="px-4 text-slate-100 hover:text-indigo-200"
                    href="/home"
                    onClick={() => Auth.logout()}
                  >
                    <p>Logout</p>
                  </Link>
                </li>
                <hr />

                <li>
                  <Link
                    className="px-4 text-slate-100 hover:text-indigo-200"
                    onClick={toggleCart}
                  >
                    <p>Cart</p>
                  </Link>
                </li>
                <hr />
                <li>
                  <SearchBar />
                </li>
              </>
            ) : null}
            {!Auth.loggedIn() ? (
              <>
                <li style={{ position: "relative", top: -10 }}>
                  <Link
                    className="px-4 text-slate-100 hover:text-indigo-200"
                    to="/login"
                  >
                    <p>Login</p>
                  </Link>
                </li>
                <hr />
                <li>
                  <SearchBar />
                </li>
              </>
            ) : null}
          </ul>
        </header>
      </div>
      {Auth.loggedIn() ? Auth.isVerified() ? "" : <NotVerifiedBar /> : null}
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
    </>
  );
};

export default Nav;
