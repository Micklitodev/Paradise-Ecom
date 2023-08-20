import React from "react";
import OrderMap from "../OrderMap";

function OrderHistory(props) {
  return (
    <>
      <div className="container my-1">
        {props ? (
          <>
            <br />
            <br />
            <h3> Order History </h3>
            <hr />
            <OrderMap data={props.data?.user?.orders} />
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
