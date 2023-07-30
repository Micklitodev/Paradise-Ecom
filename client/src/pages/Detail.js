import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Nav from '../components/Nav'

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
import spinner from "../assets/spinner.gif";
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
    }
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    else if (!loading) {
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

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };

  return (
<>
<Nav /> 
<br /> 
<br /> 
  {currentProduct && cart ? (
    <div className="container mx-auto my-8 px-4 max-w-md">
      <Link to="/home" className=" hover:underline">
        ← Back to Products
      </Link>

      <h2 className="text-2xl font-bold my-4">{currentProduct.name}</h2>

      <p className="text-gray-600">{currentProduct.description}</p>

      <p className="text-lg font-bold mt-4">
        <strong>Price:</strong> ${currentProduct.price}{" "}
        <button
        className="bg-blue-400 text-white h-15 mt-2"
          onClick={addToCart}
         
        >
          Add to Cart
        </button>
        <button
          disabled={!cart.find((p) => p._id === currentProduct._id)}
          onClick={removeFromCart}
          className="bg-red-400 text-white h-15 mt-2"
  
        >
          Remove from Cart
        </button>
      </p>

      <img
        src={`${currentProduct.image}`}
        alt={currentProduct.name}
        className="my-4 rounded-lg shadow-md"
      />
    </div>
  ) : null}
  {loading ? (
    <img src={spinner} alt="loading" className="mx-auto my-8" />
  ) : null}
  <Cart />
  <br />
  <br />
  <Footer />
</>

  );
}

export default Detail;
