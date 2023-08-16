import React, { useState } from "react";
import Auth from "../utils/auth";
import AdminProdAdd from "../components/AdminProdAdd";
import Jumbotron from "../components/Jumbotron";
import useScrollHelper from "../utils/scrollhelper";
import SearchBar from "../components/Search";

const ManageProducts = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);
  useScrollHelper();
  const [displayModal, setDisplayModal] = useState(false);

  if (Auth.isAdmin() === true) {
    return (
      <>
        <div>
          <h2
            className="mt-20"
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            {" "}
            Manage Products{" "}
          </h2>
          <div
            className="borderwrap bg-white bg-opacity-10 container p-4"
            style={{ maxWidth: "1020px" }}
          >
            <h3 className="text-2xl font-bold"> Update / Delete Product</h3>
            <br />
            <SearchBar />
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-4"> Add Product </h3>
              <button
                onClick={() => {
                  setDisplayModal(true);
                  console.log(displayModal);
                }}
                className="bg-gradient-to-r from-red-400 to-yellow-600 opacity-80 ml-4 px-2 py-2 bg-opacity-80 text-white "
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
        {displayModal ? (
          <>
            <AdminProdAdd displayModal={setDisplayModal} />
          </>
        ) : null}
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
