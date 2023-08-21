import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { ADMIN_ORDER_VIEW } from "../utils/queries";
import Jumbotron from "../components/Jumbotron";
import LineChart from "../components/AdminChart";
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

  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth();
  const startOfMonth = new Date(Date.UTC(currentYear, currentMonth, 1));
  const endOfMonth = new Date(Date.UTC(currentYear, currentMonth + 1, 1));

  const orders = data.adminOrderView.filter((order) => {
    const purchaseDate = new Date(order.purchaseDate * 1);
    return purchaseDate >= startOfMonth && purchaseDate < endOfMonth;
  });

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
          Overview
        </h2>
        <br />
        <div>
          <p className="text-center">
            {`${startOfMonth.toLocaleString("default", {
              month: "short",
            })} ${startOfMonth.getDate()}, ${startOfMonth.getFullYear()} - 
          ${endOfMonth.toLocaleString("default", {
            month: "short",
          })} ${endOfMonth.getDate()}, ${endOfMonth.getFullYear()}`}
          </p>
          <LineChart orders={orders} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="center mt-20">
          <Jumbotron>
            <h2> Err no auth to access this page.</h2>
          </Jumbotron>
        </div>
      </>
    );
  }
};

export default AdminOrderView;
