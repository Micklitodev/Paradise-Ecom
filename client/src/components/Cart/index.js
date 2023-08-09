import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { CiShoppingCart } from "react-icons/ci";
import { QUERY_USER, QUERY_CHECKOUT, CALC_SHIP } from "../../utils/queries";
import { ADD_SHIP_INFO } from "../../utils/mutations";
import spinner from "../../assets/spinner.gif";
import "./style.css";

const stripeapi = process.env.REACT_APP_STRIPE_CLIENT_API;
const stripePromise = loadStripe(stripeapi);

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [displayForm, setDisplayForm] = useState(false);
  const [pointValue, setPointValue] = useState(0);
  const [checkLoad, setCheckLoad] = useState(false);

  const [shippingAddress, setShippingAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const [addShipInfo] = useMutation(ADD_SHIP_INFO);
  const [getCheckout, { data, error }] = useLazyQuery(QUERY_CHECKOUT);
  const { loading, data: data2, refetch: refetchUser } = useQuery(QUERY_USER);

  const cartInt = [];
  state.cart.forEach((item) => {
    cartInt.push(item.purchaseQuantity);
  });

  let num = cartInt.reduce((accumulator, currVal) => {
    return accumulator + currVal;
  }, 0);

  let productInt = Math.abs(num);

  const {
    loading: load,
    data: rate,
    refetch: refetchShip,
  } = useQuery(CALC_SHIP, {
    variables: { productInt },
  });

  let user;

  if (!loading) {
    user = data2?.user;
  }
  if (displayForm) {
    user = "";
  }

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
    let lowestRate = 0;

    if (!load && rate) {
      lowestRate = rate.calcShip?.rate;
    }

    let shipTotal = parseFloat(lowestRate);
    let sum = 0;

    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });

    let completeTotal = shipTotal + sum;

    const prices = [completeTotal, shipTotal, sum];
    return prices;
  }

  const pricing = calculateTotal();

  async function submitCheckout() {
    if (!Auth.isVerified()) {
      return alert("Your Account must be verified first.");
    }

    if (!user.street) {
      return alert("Please enter in a shipping address");
    }

    while (load || loading) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: {
        products: productIds,
        shipPrice: pricing[1],
        points: pointValue,
      },
    });

    setCheckLoad(true);
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

  const handlePointInput = (event) => {
    const inputValue = parseInt(event.target.value);
    const maxAllowed = parseInt(user.points);
    const newValue = Math.min(inputValue, maxAllowed);
    const minVal = 50;
    event.target.value = newValue;

    if (inputValue / 10 > pricing[2].toFixed(2)) {
      return alert(`
      You cannot use more points than the subtotals worth. Points are valued at $0.10 per point.  
      `);
    }

    if (inputValue > maxAllowed) {
      return alert(
        `You cannot use more than the ${maxAllowed} points that you have.`
      );
    }

    if (inputValue < minVal) {
      return alert(`Minimum points able to use is 50.`);
    }

    setPointValue(inputValue);
  };

  if (!state.cartOpen) {
    return (
      <div id="shoppingCart" className="cart-closed" onClick={toggleCart}>
        <CiShoppingCart
          size={23}
          style={{ marginLeft: 7, marginTop: 6, color: "white" }}
        />
        <p
          style={{
            textAlign: "center",
            position: "relative",
            top: 0,
            fontSize: 10,
            color: "white",
          }}
        >
          Cart
        </p>
      </div>
    );
  }

  return (
    <div className="cart" id="shoppingCart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      <br />
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <br />
          {Auth.loggedIn() && Auth.isVerified() ? (
            <>
              <hr />
              <div className="container">
                Shipping Address:
                {user?.street ? (
                  <div>
                    <p style={{ color: "#6499A4" }}>
                      {user.street} <br /> {user.city}, {user.state} {user.zip}
                    </p>
                    <button
                      className="upShip text-green-300 opacity-80"
                      onClick={toggleForm}
                    >
                      Update Shipping Address{" "}
                    </button>

                    <br />
                    <br />

                    {user?.points ? (
                      <>
                        {/* <hr style={{width: '118%', marginLeft: '-9%' }} />  */}
                        <hr />
                        Point Balance:
                        <p style={{ color: "#6499A4" }}>
                          {" "}
                          {user.points} points{" "}
                        </p>
                        Use{" "}
                        <input
                          style={{
                            textAlign: "center",
                            maxWidth: "fit-content",
                          }}
                          type="number"
                          pattern="^[0-9]+$"
                          label="points"
                          name="points"
                          defaultValue={0}
                          max={parseInt(user.points)}
                          min={50}
                          onInput={handlePointInput}
                        />
                        Points.
                      </>
                    ) : null}
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
                      list="statesList"
                      autoComplete="off"
                      value={shippingAddress.state}
                      onChange={handleInputChange}
                    />
                    <datalist id="statesList">
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </datalist>
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
                      className="text-white"
                      onClick={() => setDisplayForm(false)}
                      width="w-fit"
                    >
                      Close
                    </button>
                    <button
                      className="text-green-300 opacity-80"
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
                    <br /> <br />
                  </form>
                )}
              </div>
            </>
          ) : null}

          <hr />

          <div className="flex-row space-between">
            <div>
              <strong> Subtotal: ${pricing[2].toFixed(2)}</strong>
              {Auth.loggedIn() ? (
                <>
                  <br />
                  <strong> Shipping: ${pricing[1].toFixed(2)}</strong>
                  <br />
                  <strong> Total: ${pricing[0].toFixed(2)}</strong>
                  <br />
                  {error ? (
                    <div>
                      <p className="error-text">{error.message}</p>
                    </div>
                  ) : null}
                </>
              ) : null}
            </div>
            {Auth.loggedIn() ? (
              <>
                {checkLoad && !error ? (
                  <>
                    <div>
                      <p> Loading Cart </p>
                      <img src={spinner} alt="load spin" />
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <button
                      className="bg-green-300 bg-opacity-70 text-black h-15 mt-2"
                      onClick={submitCheckout}
                    >
                      Checkout
                    </button>
                  </>
                )}
              </>
            ) : (
              <a href="/login"> (log in to check out) </a>
            )}
          </div>
        </div>
      ) : (
        <>
          <h3>You dont have anything in your cart yet!</h3>
          <br />
        </>
      )}
    </div>
  );
};

export default Cart;
