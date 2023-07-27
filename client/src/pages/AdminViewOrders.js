import React from "react";
import Auth from "../utils/auth";
import Nav from "../components/Nav";
import { useQuery } from "@apollo/client";
import { ADMIN_ORDER_VIEW } from "../utils/queries";
import Jumbotron from "../components/Jumbotron";
import OrderMap from "../components/OrderMap";

const AdminOrderView = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);

  const { loading, data } = useQuery(ADMIN_ORDER_VIEW);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (Auth.isAdmin()) {
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
          View Orders
        </h2>
        <OrderMap data={data.adminOrderView} />
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

export default AdminOrderView;
