import React from "react";
import { Link } from "react-router-dom";

const OrderMap = (props) => {
  const consolidateProducts = (products) => {
    const consolidatedProducts = [];
    const productMap = new Map();

    products.forEach((product) => {
      const { _id, image, name } = product;
      const existingProduct = productMap.get(_id);

      if (existingProduct) {
        existingProduct.qty++;
      } else {
        productMap.set(_id, { _id, image, name, qty: 1 });
      }
    });

    for (const product of productMap.values()) {
      consolidatedProducts.push(product);
    }

    return consolidatedProducts;
  };

  const ordersWithConsolidatedProducts = props.data?.map((order) => ({
    ...order,
    products: consolidateProducts(order.products),
  }));

  return (
    <>
      {ordersWithConsolidatedProducts?.length > 0 ? (
        <>
          {ordersWithConsolidatedProducts.map((order) => (
            <div key={order._id} className="container borderwrap">
              <hr />
              <h3 className="text-2xl font-semibold">Order #: {order._id}</h3>
              <p>Address: {order.address}</p>
              <p>
                Order Date:{" "}
                {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
              </p>
              <a
                href={order.tracking}
                target="_blank"
                rel="noreferrer"
                className="text-green-500 hover:underline"
              >
                Track Shipment
              </a>
              <p>Total: ${parseFloat(order.total / 100)}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {order.products.map(({ _id, image, name, qty }, index) => (
                  <div key={index} className="card px-1 py-1 inline-block">
                    <Link to={`/products/${_id}`} className="block">
                      <img
                        alt={name}
                        src={`${image}`}
                        style={{ maxHeight: "75px", maxWidth: "100px" }}
                      />
                      <div className="ml-2">
                        <p className="text-center w-20">{name}</p>
                        {qty > 1 && (
                          <p className="text-center w-20">Qty: {qty}</p>
                        )}
                      </div>
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
          <h2 className="text-center text-2xl font-semibold">No orders yet!</h2>
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default OrderMap;
