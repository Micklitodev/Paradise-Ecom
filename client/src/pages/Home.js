import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Nav from "../components/Nav";
import Auth from "../utils/auth";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";
import Info from "../components/Info";
import RecentlyAdded from "../components/RecentlyAdded";
import ThreeHeader from "../components/ThreeHeader";

const Home = () => {
  Redirector.checkTokens();
  useScrollHelper();

  if (Auth.isAdmin()) {
    return (
      <>
        <Nav />
        <div style={{ display: "grid", placeItems: "center", marginTop: 50 }}>
          <br />
          <h1
            style={{
              textTransform: "uppercase",
              fontSize: 80,
              fontWeight: 900,
            }}
            className="mt-40"
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
        <div
          style={{
            width: "100vw",
            borderRadius: 0,
            maxHeight: "100vh",
            opacity: 0.8,
          }}
        >
          <ThreeHeader />
        </div>
        <h1
          className="left-60  hidden md:block"
          style={{
            textTransform: "uppercase",
            position: "absolute",
            top: "20vh",
            fontWeight: 900,
            fontSize: 30,
            color: "white",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            borderRadius: 5,
          }}
        ></h1>
        <div>
          <div id="recentlyadded" className="mb-20 mt-20">
            <RecentlyAdded />
          </div>
          <div className="mb-20">
            <CategoryMenu />
          </div>
          <div className="mb-20">
            <Info />
          </div>
          <Cart />
        </div>
        <br />
        <Footer />
      </>
    );
  }
};

export default Home;
