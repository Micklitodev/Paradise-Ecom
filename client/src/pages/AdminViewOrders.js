import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { ADMIN_ORDER_VIEW } from "../utils/queries";
import Jumbotron from "../components/Jumbotron";
import OrderMap from "../components/OrderMap";
import useScrollHelper from "../utils/scrollhelper";

const AdminOrderView = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);
  useScrollHelper();

  const { loading, data } = useQuery(ADMIN_ORDER_VIEW);

  if (loading) {
    return (
      <div className="text-center mt-40">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (Auth.isAdmin()) {
    return (
      <>
        <h2
          className="mt-20"
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          View Orders
        </h2>
        <OrderMap data={data.adminOrderView} />
        <br />
      </>
    );
  } else {
    return (
      <>
        <div className="center mt-20 ">
          <Jumbotron>
            <h2> Err no auth to access this page.</h2>
          </Jumbotron>
        </div>
      </>
    );
  }
};

export default AdminOrderView;
