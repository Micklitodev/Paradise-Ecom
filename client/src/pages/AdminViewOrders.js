import React from "react";
import Auth from "../utils/auth";
import Nav from "../components/Nav";
import { useQuery } from "@apollo/client";
import { ADMIN_ORDER_VIEW } from "../utils/queries";

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
        {data.adminOrderView.length > 0 ? (
          <div>
            {data.adminOrderView?.map((order) => (
              <div key={order._id} className="container">
                <a href={"order/" + order._id}>
                  <h3>Order #: {order._id}</h3>
                  <p>
                    {" "}
                    Date:{" "}
                    {new Date(
                      parseInt(order.purchaseDate)
                    ).toLocaleDateString()}
                  </p>
                </a>
                <hr />
              </div>
            ))}
          </div>
        ) : (
          <div className="container borderwrap"> No Orders Yet!!! </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <div className="center">Err no auth to access this page.</div>
      </>
    );
  }
};

export default AdminOrderView;
