import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";

function Detail() {
  Redirector.checkTokens();
  useScrollHelper();

  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  return (
    <>
      <br />
      {currentProduct && cart ? (
        <div className="container mx-auto my-8 px-4 max-w-md mt-20">
          <Link to="/home" className="hover:underline text-white">
            ← Back to Products
          </Link>

          <div className="bg-white box-shadow-custom mt-2 rounded-md bg-opacity-10 py-1 px-10">
            <h2 className="text-2xl font-bold my-4">{currentProduct.name}</h2>

            <p>{currentProduct.description}</p>

            <p className="text-lg font-bold mt-4">
              <strong>Price:</strong> ${currentProduct.price}{" "}
              <button
                className="bg-gradient-to-r from-red-400 to-yellow-600 opacity-80 h-15 mt-2"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </p>

            <img
              src={`${currentProduct.image}`}
              alt={currentProduct.name}
              className="my-4 rounded-lg shadow-md"
            />
          </div>
        </div>
      ) : null}
      {loading ? (
        <div className="text-center mt-40">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}
      <Cart />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Detail;
