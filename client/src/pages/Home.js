import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Nav from "../components/Nav";
import Auth from "../utils/auth";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";
import Info from '../components/Info'

const Home = () => {
  Redirector.checkTokens();
  useScrollHelper();

  if (Auth.isAdmin()) {
    return (
      <>
        <Nav />
        <br />
        <br />
        <img
          src="./images/headerimg.jpeg"
          alt="header of delta 8."
          style={{
            width: "100vw",
            borderRadius: 0,
            maxHeight: "60vh",
            opacity: 0.9,
          }}
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
          src="./images/headerimg.jpeg"
          alt="header of delta 8."
          style={{
            width: "100vw",
            borderRadius: 0,
            maxHeight: "60vh",
            opacity: 0.9,
          }}
        />
        <h1
        className="center ml-5"
          style={{
            textTransform: "uppercase",
            position: "absolute",
            top: "20vh",
            fontWeight: 900,
            fontSize: 30,
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", 
            backgroundColor: "white",
            borderRadius: 5
        
          }}
        >
          {" "}
          GEORGIA PRIMERE HEMP DISPENSARY{" "}
        </h1>
        <br /> 
        <div>
        <br /> 
          <Info /> 
        <br /> 
        <br /> 
          <CategoryMenu />
          <Cart />
        </div>
        <br />
        <br />
        <Footer />
      </>
    );
  }
};

export default Home;
