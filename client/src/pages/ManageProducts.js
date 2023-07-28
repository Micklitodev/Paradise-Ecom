import React from "react";
import Auth from "../utils/auth";
import Nav from "../components/Nav";
import AdminProdAdd from "../components/AdminProdAdd";
import AdminProdDel from "../components/AdminProdDel";
import Jumbotron from "../components/Jumbotron";
import useScrollHelper from "../utils/scrollhelper";

const ManageProducts = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);
  useScrollHelper()
  

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
        <div className="container">
          <AdminProdAdd />
          <AdminProdDel />
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
