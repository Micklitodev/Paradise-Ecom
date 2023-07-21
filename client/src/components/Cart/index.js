import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { CiShoppingCart } from "react-icons/ci";
import { QUERY_USER } from "../../utils/queries";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { ADD_SHIP_INFO } from "../../utils/mutations";
import { CALC_SHIP } from "../../utils/queries";
import "./style.css";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [displayForm, setDisplayForm] = useState(false);

  const [shippingAddress, setShippingAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const { loading, data: data2, refetch: refetchUser } = useQuery(QUERY_USER);

  const {
    loading: load,
    data: rate,
    refetch: refetchShip,
  } = useQuery(CALC_SHIP);

  let user;

  if (!loading) {
    user = data2?.user;
  }

  if (displayForm) {
    user = "";
  }

  const [addShipInfo] = useMutation(ADD_SHIP_INFO);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let lowestRate = { rate: 0 }; 

    
  
    if (!load) {
      const rates = rate?.calcShip.rates;
  
      if (rates && rates.length > 0) {
  
        lowestRate = rates.reduce((minRate, currentRate) => {
          const minRateValue = parseFloat(minRate.rate);
          const currentRateValue = parseFloat(currentRate.rate);
  
          if (currentRateValue < minRateValue) {
            return currentRate;
          } else {
            return minRate;
          }
        });
      }
    }
  
    let shipTotal = parseFloat(lowestRate.rate);
  
    let sum = 0;
  
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
  
    let completeTotal = shipTotal + sum;
  
    return completeTotal.toFixed(2);
  }
  
  function submitCheckout() {
    if (!Auth.isVerified()) {
      return alert("Your Account must be verified first.");
    }

    if (!user.street) {
      return alert("Please enter in a shipping address");
    }

    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  const toggleForm = () => {
    user = null;
    setDisplayForm(true);
    const upShipBtn = document.querySelector(".upShip");
    upShipBtn.style.cssText = "display: none";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (shippingAddress.street) {
      try {
        await addShipInfo({
          variables: {
            street: shippingAddress.street,
            city: shippingAddress.city,
            state: shippingAddress.state,
            zip: parseInt(shippingAddress.zip),
          },
        });
      } catch (err) {
        console.error(err);
      } finally {
        setShippingAddress({
          street: "",
          city: "",
          state: "",
          zip: "",
        });
        setDisplayForm(false);
        refetchUser().then(() => {
          refetchShip();
        });
      }
    }
  };

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <CiShoppingCart style={{ color: "white", marginLeft: 4 }} />
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <br />

          {Auth.loggedIn() ? (
            <div className="container">
              <p>Shipping Address:</p>
              {user?.street ? (
                <div>
                  <p style={{ color: "#6499A4" }}>
                    {user.street} <br /> {user.city}, {user.state} {user.zip}
                  </p>
                  <button className="upShip" onClick={toggleForm}>
                    Update Shipping Address{" "}
                  </button>

                  <br />
                  <br />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="container">
                  <input
                    className="formInput"
                    label="street"
                    name="street"
                    placeholder="112 test street"
                    value={shippingAddress.street}
                    onChange={handleInputChange}
                  />
                  <br />
                  <input
                    className="formInput"
                    label="city"
                    name="city"
                    placeholder="Atlanta"
                    value={shippingAddress.city}
                    onChange={handleInputChange}
                  />
                  <br />
                  <input
                    className="formInput"
                    label="state"
                    name="state"
                    placeholder="Georgia"
                    value={shippingAddress.state}
                    onChange={handleInputChange}
                  />
                  <br />
                  <input
                    className="formInput"
                    label="zip"
                    name="zip"
                    placeholder="30041"
                    value={shippingAddress.zip}
                    onChange={handleInputChange}
                  />
                  <br />
                  <button
                    disabled={
                      !shippingAddress.street ||
                      !shippingAddress.city ||
                      !shippingAddress.state ||
                      !shippingAddress.zip
                    }
                    type="submit"
                    variant="success"
                    width="w-fit"
                  >
                    Update
                  </button>
                  <button onClick={() => setDisplayForm(false)} width="w-fit">
                    Close
                  </button>
                  <br /> <br />
                </form>
              )}
            </div>
          ) : null}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>You have not added anything to your cart yet!</h3>
      )}
    </div>
  );
};

export default Cart;
