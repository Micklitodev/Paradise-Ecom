import { Link } from "react-router-dom";

const OrderMap = (props) => {
  return (
    <>
      {props.data?.length > 0 ? (
        <>
          {props.data?.map((order) => (
            <div key={order._id} className="container">
            <hr/> 
              <h3>Order #: {order._id}</h3>
              <p>
                Date:{" "}
                {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
              </p>
              <p> Address: {order.address}</p>
              <a href={order.tracking} target="_blank" rel="noreferrer">
                {" "}
                Track Shipment{" "}
              </a>
              <p> Total: ${parseFloat(order.total / 100)} </p>
              {order.products.map(({ _id, image, name }, index) => (
            
                <div
                  key={index}
                  className="card px-1 py-1"
                  style={{ display: "inline-block" }}
                >
                  <Link to={`/products/${_id}`}>
                    <img
                      alt={name}
                      src={`${image}`}
                      style={{ maxHeight: "75px", maxWidth: "100px" }}
                    />
                    <p>{name}</p>
                  </Link>
                  <div></div>
                </div>
              ))}
            </div>
          ))}
        </>
      ) : (
        <>
          <br />
          <h2 style={{ textAlign: "center" }}> No orders yet! </h2>
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default OrderMap;
