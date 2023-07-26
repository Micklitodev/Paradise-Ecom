import React from "react";
import Auth from "../utils/auth";
import Nav from "../components/Nav";
import { useQuery } from "@apollo/client";
import { ADMIN_ORDER_VIEW } from "../utils/queries";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom"

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
        {data.adminOrderView.length > 0 ? (
          <div>
            {data.adminOrderView?.map((order) => (
              <div key={order._id} className="container">
                {/* <a href={"order/" + order._id}> */}
                  <h3>Order #: {order._id}</h3>
                  <p>
                    {" "}
                    Date:{" "}
                    {new Date(
                      parseInt(order.purchaseDate)
                    ).toLocaleDateString()}
                  </p>
                  <p> Address: {order.address}</p>
                  <p> Total: ${parseFloat(order.total / 100)} </p>
                      { console.log(order.products)}
                  {order.products.map(({ _id, image, name }, index) => (
                    <div key={index} className="card px-1 py-1" style={{display: 'inline-block'}}>
                      <Link to={`/products/${_id}`}>
                        <img
                          alt={name}
                          src={`${image}`}
                          style={{ maxHeight: "75px", maxWidth:'100px'}}
                        />
                        <p>{name}</p>
                      </Link>
                      <div>
                      </div>
                    </div>
                  ))}
                {/* </a> */}
                <hr />
              </div>
            ))}
          </div>
        ) : (
          <div className="container borderwrap" style={{ height: "30vh" }}>
            <h3> No orders yet. </h3>
          </div>
        )}
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
