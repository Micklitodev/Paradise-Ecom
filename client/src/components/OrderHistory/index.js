import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import OrderMap from "../OrderMap";

function OrderHistory() {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);

  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/home">← Back to Home</Link>
        {user ? (
          <>
            <br />
            <br />
            <h3 style={{ textAlign: "center" }}>
              Order History for {user.firstName} {user.lastName}
            </h3>
            <OrderMap data={user.orders} />
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
