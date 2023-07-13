import React from "react";
import Auth from "../utils/auth";
import Nav from "../components/Nav";
import AdminProdAdd from '../components/AdminProdAdd';
import AdminProdDel from '../components/AdminProdDel';

const ManageProducts = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);

  if (Auth.isAdmin() === true) {
    return (
      <>
        <Nav />
        <br />
        <br />
        <br />
        <div>
          {" "}
          You're authorized to manage products additional checks will be made at
          server level.{" "}
        </div>
        <div>
          <AdminProdAdd />
          <AdminProdDel /> 
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="center"> Err no auth to acess this page. </div>
      </>
    );
  }
};

export default ManageProducts;
