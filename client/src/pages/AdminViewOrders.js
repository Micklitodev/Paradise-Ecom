import React from "react";
import Auth from "../utils/auth";
import Nav from "../components/Nav";
import { useQuery } from "@apollo/client";
import { ADMIN_ORDER_VIEW } from "../utils/queries";

const AdminOrderView = () => {
  const { loading, data } = useQuery(ADMIN_ORDER_VIEW);

  if (loading) {
    return <div>Loading...</div>;
  } 
 
  // if(data) {
  // console.log(data.adminOrderView.map((order) => console.log(order.firstName)))
  // } 
  if (Auth.isAdmin()) {
    return (
      <>
        <Nav />
        <br />
        <br />
        <br />

        <div>

          {data.adminOrderView.map((order) => (
            <div key={order._id}>
              <h3>Order ID: {order._id}</h3>
              <p>Purchase Date: {order.purchaseDate}</p>
              <p>User: {order.firstName} {order.lastName}</p>
              <hr />
            </div>
          ))}
        </div>
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