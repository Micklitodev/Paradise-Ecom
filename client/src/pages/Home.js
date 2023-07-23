import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Nav from "../components/Nav";
import Auth from "../utils/auth";
import NotVerifiedBar from "../components/NotVerifiedBar";
import Footer from "../components/Footer";

const Home = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);

  if (Auth.isAdmin()) {
    return (
      <>
        <Nav />
        <br />
        <br />
        <img
          src="./images/header.png"
          alt="header of delta 8."
          style={{ width: "100vw", borderRadius: 0, maxHeight: "100vh" }}
        />
        <div style={{ display: "grid", placeItems: "center", marginTop: 50 }}>
          <br />
          <h1
            style={{
              textTransform: "uppercase",
              fontSize: 80,
              fontWeight: 900,
            }}
          >
            {" "}
            admin portal{" "}
          </h1>
        </div>
        <br />
        <br />
        <br />
      </>
    );
  } else {
    return (
      <>
        <Nav />
        <br />
        <br />
        {Auth.loggedIn() ? Auth.isVerified() ? "" : <NotVerifiedBar /> : null}
        <img
          src="./images/header.png"
          alt="header of delta 8."
          style={{ width: "100vw", borderRadius: 0, maxHeight: "100vh" }}
        />
        <div>
          <br />
          <CategoryMenu />
          <Cart />
        </div>
        <Footer /> 
      </>
    );
  }
};

export default Home;
