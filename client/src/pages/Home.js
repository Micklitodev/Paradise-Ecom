import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Nav from "../components/Nav";
import Auth from "../utils/auth";
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
          src="./images/headerimg.png"
          alt="header of delta 8."
          style={{ width: "100vw", borderRadius: 0, maxHeight: "100vh", opacity: 0.9 }}
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
        <img
          src="./images/headerimg.png"
          alt="header of delta 8."
          style={{ width: "100vw", borderRadius: 0, maxHeight: "100vh", opacity: 0.9 }}
        />
        <h1
        style={{
          textTransform: 'uppercase', 
          textAlign: 'center',
          position: 'relative',
          top: '-77vh',
          fontWeight: 900,
          fontSize: 40
        }}
        > GEORGIA PRIMERE HEMP DISPENSARY </h1>
        <div>
          <CategoryMenu />
          <Cart />
        </div>
        <br /> 
        <Footer /> 
      </>
    );
  }
};

export default Home;
