import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import Redirector from "../utils/redirector";

function Success() {
  Redirector.checkTokens();
  const [addOrder, { error }] = useMutation(ADD_ORDER);
  const [preError, setPreError] = useState(false);

  useEffect(() => {
    async function saveOrder() {
      try {
        const url = window.location.href;

        const cart = await idbPromise("cart", "get");
        const products = cart.map((item) => ({
          _id: item._id,
          purchaseQuantity: item.purchaseQuantity,
          cloverId: item.cloverId,
        }));

        if (products.length <= 0) {
          setPreError(true);
          return;
        }

        const { data } = await addOrder({ variables: { products, url } });

        if (!data.addOrder.products) {
          return;
        }

        if (error) {
          return;
        }

        const productData = data.addOrder.products;
        productData?.forEach((item) => {
          idbPromise("cart", "delete", item);
        });

        setTimeout(() => {
          window.location.assign("/dashboard");
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    }

    saveOrder();
  }, [addOrder]);

  return (
    <>
      {error || preError ? (
        <Jumbotron>
          <h1 className="mt-40">Session Expired</h1>
        </Jumbotron>
      ) : (
        <>
          <div>
            <Jumbotron>
              <h1 className="mt-20">Success!</h1>
              <br />
              <div className="borderwrap container px-20 py-20 bg-white bg-opacity-10">
                <h2 className="mb-20">
                  Thank You for your purchase with Paradise Hemp Dispensary
                </h2>
                <h4>You will now be redirected to the dashboard...</h4>
              </div>
            </Jumbotron>
          </div>
        </>
      )}
    </>
  );
}

export default Success;
