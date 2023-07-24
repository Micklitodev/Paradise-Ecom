import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

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
              <hr />
            </h3>
            {user.orders.length > 0 ? (
              <>
                {" "}
                {user.orders.map((order) => (
                  <div key={order._id} className="my-2">
                    <h3>
                      {new Date(
                        parseInt(order.purchaseDate)
                      ).toLocaleDateString()}
                    </h3>
                    <div className="flex-row">
                      {order.products.map(
                        ({ _id, image, name, price }, index) => (
                          <div key={index} className="card px-1 py-1">
                            <Link to={`/products/${_id}`}>
                              <img
                                alt={name}
                                src={`${image}`}
                                style={{ maxHeight: 100 }}
                              />
                              <p>{name}</p>
                            </Link>
                            <div>
                              <span>${price}</span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}{" "}
              </>
            ) : (
              <>
              <br /> 
              <h2 style={{textAlign: "center"}}> You haven't made an order yet! </h2>
              <br />  
              <br /> 
              </>
            )}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
