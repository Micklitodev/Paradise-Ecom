import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [error, setError] = useState(false);
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      try {
        const url = window.location.href;

        const cart = await idbPromise("cart", "get");
        const products = cart.map((item) => item._id);

        if (!products.length) {
          setError(true);
          return;
        }

        const { data } = await addOrder({ variables: { products, url } });

        if (!data.addOrder.products) {
          setError(true);
          return;
        }

        setError(false);
        const productData = data.addOrder.products;
        productData?.forEach((item) => {
          idbPromise("cart", "delete", item);
        });

        setTimeout(() => {
          window.location.assign('/dashboard');
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    }

    saveOrder();
  }, [addOrder]);

  return (
    <>
      {error ? (
        <Jumbotron>
          <h2>Session Expired</h2>
        </Jumbotron>
      ) : (
        <>
          <div>
            <Jumbotron>
              <h1>Success!</h1>
              <br />
              {/* <img className='center' src="./images/thankyou.gif" alt="thank you gif" /> */}
              <br />
              <br />
              <h2>You will now be redirected to the home page...</h2>
            </Jumbotron>
          </div>
        </>
      )}
    </>
  );
}

export default Success;
