import React from "react";
import Auth from "../utils/auth";
import Nav from "../components/Nav";
import AdminProdAdd from "../components/AdminProdAdd";
import Jumbotron from "../components/Jumbotron";
import useScrollHelper from "../utils/scrollhelper";
import SearchBar from "../components/Search";

const ManageProducts = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);
  useScrollHelper();

  if (Auth.isAdmin() === true) {
    return (
      <>
        <Nav />
        <br />
        <br />
        <br />
        <br />
        <h2
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          {" "}
          Manage Products{" "}
        </h2>

        <div
          className="borderwrap container p-4"
          style={{ maxWidth: "1020px" }}
        >
          <h3 className="text-2xl font-bold"> Update / Delete Product</h3>
          <br />
          <SearchBar />
        </div>
        <div className="container">
          <AdminProdAdd />
        </div>
        <br />
      </>
    );
  } else {
    return (
      <>
        <div className="center">
          <Jumbotron>
            <h2> Err no auth to access this page.</h2>
          </Jumbotron>
        </div>
      </>
    );
  }
};

export default ManageProducts;
