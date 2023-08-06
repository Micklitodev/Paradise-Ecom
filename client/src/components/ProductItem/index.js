import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { DEL_PRODUCT } from "../../utils/mutations";
import AdminUpdateForm from "../AdminUpdateForm";

function ProductItem(item) {
  const [displayModal, setDisplayModal] = useState();

  const [delProduct] = useMutation(DEL_PRODUCT);

  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity, description, cloverId, category } =
    item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  const handleDelete = async (id) => {
    if (
      window.confirm(
        "Deleting this product deletes it everywhere. Are you sure you want to delete this product?"
      )
    ) {
      try {
        await delProduct({
          variables: { id },
        });

        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  if (Auth.isAdmin()) {
    return (
      <div className="card px-1 py-1">
        <Link to={`/products/${_id}`}>
          <img
            style={{ height: 220, width: 260 }}
            alt={name}
            src={`${image}`}
          />
          <p className="text-white">{name}</p>
        </Link>
        <div>
          <div>
            {quantity} {pluralize("item", quantity)} in stock
          </div>
          <span>${price}</span>
        </div>

        <button
          className="bg-red-400 text-white rounded hover:bg-blue-500"
          onClick={() => {
            handleDelete(_id);
          }}
        >
          Delete
        </button>

        <button
          className="bg-blue-400 text-white rounded hover:bg-blue-500"
          onClick={() => {
            setDisplayModal(true);
          }}
        >
          Update
        </button>

        {displayModal ? (
          <AdminUpdateForm
            displayModal={setDisplayModal}
            id={_id}
            name={name}
            cloverId={cloverId}
            category={category}
            description={description}
            image={image}
            price={price}
            quantity={quantity}
          />
        ) : (
          console.log("display: false")
        )}
      </div>
    );
  } else {
    return (
      <>
        <div className="card px-2 mx-1 py-1 borderwrap bg-black bg-opacity-50">
          <Link to={`/products/${_id}`}>
            <img
              style={{ height: 220, width: 260 }}
              alt={name}
              src={`${image}`}
            />
            <p>{name}</p>
          </Link>
          <div>
            <div>
              {quantity} {pluralize("item", quantity)} in stock
            </div>
            <span>${price}</span>
          </div>
          <button
            className="bg-green-400 bg-opacity-80 text-black h-15 mt-2"
            onClick={addToCart}
          >
            Add to cart
          </button>
        </div>
      </>
    );
  }
}

export default ProductItem;
