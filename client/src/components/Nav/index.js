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
import { Slide } from "react-awesome-reveal";

const Nav = () => {
  const [, dispatch] = useStoreContext();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav((prevNav) => !prevNav);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
    window.location.assign("#shoppingCart");
    setNav(false);
  }

  let endpoint = new URL(window.location.href).pathname;

  return (
    <>
      {endpoint === "/" ? null : (
        <>
          <div className="sticky top-0 z-10 w-full ">
            <header className="w-full h-14 drop-shadow-md">
              <div
                className="flex items-center justify-between w-full h-full px-2"
                style={{
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 0 1rem rgba(128, 0, 128, 0.1)",
                  backgroundColor: "rgba(128, 0, 128, 0.07)",
                }}
              >
                {/* site name container */}
                <Link
                  to="/home"
                  className="px-4 text-white hover:text-indigo-200 mb-1"
                >
                  <Slide>
                    <h3>PARADISE</h3>
                  </Slide>
                </Link>

                {/* desktop navigation */}
                <nav>
                  <ul className="hidden space-x-9 md:flex md:items-center mr-16">
                    {Auth.isAdmin() ? (
                      <>
                        <li className="mx-1">
                          <Link to="/Overview" className="text-white">
                            Overview
                          </Link>
                        </li>
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
                          <Slide direction="down">
                            <SearchBar />
                          </Slide>
                        </li>
                        <Slide direction="right">
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
                                <CiBoxList
                                  size={20}
                                  style={{ color: "white" }}
                                />
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
                        </Slide>
                      </>
                    ) : null}
                    {!Auth.loggedIn() ? (
                      <>
                        <li className="absolute mt-4 center ml-10">
                          <Slide direction="down">
                            <SearchBar />
                          </Slide>
                        </li>
                        <Slide direction="right">
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
                              <p
                                className="text-white"
                                style={{ fontSize: 10 }}
                              >
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
                              <p
                                className="text-white"
                                style={{ fontSize: 10 }}
                              >
                                Login
                              </p>
                            </Link>
                          </li>
                        </Slide>
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
                    : "absolute bg-red bg-opacity-10 custom-backdrop-blur w-full px-8 pb-4 md:hidden space-y-2 text-right"
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
                    <li className="h-10">
                      <div className="absolute right-5">
                        <SearchBar />
                      </div>
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
                    <li className="h-10">
                      <div className="absolute right-5">
                        <SearchBar />
                      </div>
                    </li>
                  </>
                ) : null}
              </ul>
            </header>
          </div>
          {Auth.loggedIn() ? Auth.isVerified() ? "" : <NotVerifiedBar /> : null}
        </>
      )}
    </>
  );
};

export default Nav;
