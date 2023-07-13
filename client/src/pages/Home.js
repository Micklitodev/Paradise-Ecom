import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Nav from "../components/Nav";
import Auth from "../utils/auth";

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
          src="./images/deltaheader.png"
          alt="header of delta 8 chemical structure."
          style={{ width: "100vw", borderRadius: 0 }}
        />
        <div style={{display: "grid", placeItems: "center", marginTop: 200}}>
          <h1 style={{ textTransform: "uppercase", fontSize: 80, fontWeight: 900 }}>
            {" "}
            admin portal{" "}
          </h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Nav />
        <br />
        <br />
        <img
          src="./images/deltaheader.png"
          alt="header of delta 8 chemical structure."
          style={{ width: "100vw", borderRadius: 0 }}
        />
        <div className="container">
          <CategoryMenu />
          <ProductList />
          <Cart />
        </div>
      </>
    );
  }
};

export default Home;
