import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function ProductList(props) {
  const [state, dispatch] = useStoreContext();

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedData, setSortedData] = useState([]);

  let { currentCategory } = state;

  currentCategory = props.action;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  const handleSort = async () => {
    const sortedProducts = [...state.products];

    if (sortOrder === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
      setSortOrder("desc");
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
      setSortOrder("asc");
    }

    setSortedData(sortedProducts);
  };

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    if (sortedData.length) {
      return sortedData.filter(
        (product) => product.category._id === currentCategory
      );
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      {state.products.length ? (
        <>
          <div className="text-center mb-4">
            <button className="text-white bg-red-400" onClick={handleSort}>
              Sort Price High to Low
            </button>
          </div>
          <div className="flex flex-wrap justify-center">
            {filterProducts().map((product) => (
              <ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                cloverId={product.cloverId}
                description={product.description}
                category={product.category}
              />
            ))}
          </div>
        </>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? (
        <div className="text-center mt-40">
          {" "}
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>{" "}
        </div>
      ) : null}
    </div>
  );
}

export default ProductList;
