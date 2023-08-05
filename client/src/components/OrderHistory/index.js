import React from "react";
import { Link } from "react-router-dom";
import OrderMap from "../OrderMap";

function OrderHistory(props) {
  return (
    <>
      <div className="container my-1">
        <Link to="/home">← Back to Home</Link>
        {props ? (
          <>
            <br />
            <br />
            <h3 style={{ textAlign: "center" }}>
              Order History for {props.data?.user?.firstName} {props.data?.user?.lastName}
            </h3>
            <hr /> 
            <OrderMap data={props.data?.user?.orders} />
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
