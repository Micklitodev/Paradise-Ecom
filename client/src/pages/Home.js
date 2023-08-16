import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Auth from "../utils/auth";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";
import Info from "../components/Info";
import RecentlyAdded from "../components/RecentlyAdded";
import ThreeHeader from "../components/ThreeHeader";
import Overlay from "../components/Overlay";

const Home = () => {
  Redirector.checkTokens();
  useScrollHelper();

  if (Auth.isAdmin()) {
    return (
      <>
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

        <div
          style={{
            opacity: 0.999,
          }}
        >
          <Overlay>
            <ThreeHeader />
          </Overlay>
        </div>
        <div>
          <div id="recentlyadded" className="mb-40 mt-20">
            <RecentlyAdded />
          </div>
          <div className="mb-40">
            <CategoryMenu />
          </div>
          <div className="mb-40">
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
