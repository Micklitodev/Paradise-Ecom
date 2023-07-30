import { Link } from "react-router-dom";

const OrderMap = (props) => {
  return (
<>
  {props.data?.length > 0 ? (
    <>
      {props.data?.map((order) => (
        <div key={order._id} className="container borderwrap">
          <hr />
          <h3 className="text-2xl font-semibold">Order #: {order._id}</h3>
          <p>
            Order Date:{" "}
            {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
          </p>
          <p> Address: {order.address}</p>
          <a
            href={order.tracking}
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:underline"
          >
            Track Shipment
          </a>
          <p> Total: ${parseFloat(order.total / 100)} </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {order.products.map(({ _id, image, name }, index) => (
              <div
                key={index}
                className="card px-1 py-1 inline-block"
              >
                <Link to={`/products/${_id}`} className="block">
                  <img
                    alt={name}
                    src={`${image}`}
                    style={{ maxHeight: "75px", maxWidth: "100px" }}
                  />
                  <p className="text-center">{name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  ) : (
    <>
      <br />
      <h2 className="text-center text-2xl font-semibold"> No orders yet! </h2>
      <br />
      <br />
    </>
  )}
</>

  );
};

export default OrderMap;
