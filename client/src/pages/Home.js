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
        <div style={{ marginTop: -60 }}>
          <h5
            className="about left-20 p-4 absolute top-72 md:top-96 text-white font-bold text-base text-shadow-2xs bg-black bg-opacity-20 rounded-md border-solid border-grey max-w-55vw max-h-96 md:max-h-96 overflow-auto hidden md:block"
            style={{
              position: "absolute",
              color: "white",
              top: 270,
              fontWeight: 900,
              fontSize: 17,
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              borderRadius: 5,
              maxWidth: "55%",
              maxHeight: "340px",
              overflow: "auto",
            }}
          >
            At Paradise Hemp Dispensary, we believe that nature holds the key to
            well-being, and we are committed to providing our customers with the
            highest quality hemp products available. Founded with a passion for
            natural alternatives, we have curated a diverse selection of premium
            hemp products that cater to the needs of both seasoned enthusiasts
            and newcomers to the world of hemp. From premium CBD oils and
            tinctures to soothing topicals and edibles, our collection is
            thoughtfully crafted to deliver the best that hemp has to offer.
            Paradise Hemp Dispensary is not just a place to buy hemp products;
            it's a community that fosters wellness, sustainability, and a shared
            passion for nature's bountiful offerings. We invite you to
            experience the natural bliss of Paradise Hemp Dispensary. Join us to
            a happier, and more harmonious existence as we embrace the
            incredible potential of hemp together. Your paradise awaits!
          </h5>
          <a className="h-28 w-40 hidden md:block" href="#promotions">
            <div
              style={{
                marginBottom: 30,
                height: 30,
                width: 30,
              }}
              className="scroll-down"
            ></div>
          </a>
        </div>
        <div>
          <div className="mb-20">
            <RecentlyAdded />
          </div>
          <div className="mb-20">
            <CategoryMenu />
          </div>
          <div id="promotions" className="mb-20">
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
