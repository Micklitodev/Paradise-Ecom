import { useLazyQuery } from "@apollo/client";
import { SEARCH_QUERY } from "../utils/queries";
import { useEffect } from "react";
import Nav from "../components/Nav";
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";
import Jumbotron from "../components/Jumbotron";
import Cart from "../components/Cart";

const SearchRes = () => {
  Redirector.checkTokens();
  useScrollHelper();

  const [querySearch, { data }] = useLazyQuery(SEARCH_QUERY);
  const url = window.location.href;
  const searchParams = url.split("/").pop();
  const sanitizedParams = searchParams.replace(/%20/g, " ");

  useEffect(() => {
    async function fetchData() {
      await querySearch({
        variables: { search: sanitizedParams },
      });
    }

    fetchData();
  }, [querySearch, sanitizedParams]);

  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h2
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          View Orders
        </h2>
        {data?.querySearch.length > 0 ? (
          <>
            <div>
              {data.querySearch?.map((product) => (
                <div>
                  <ProductItem
                    key={product._id}
                    _id={product._id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                  />
                  <br />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <Jumbotron>
              <h3> No search results found. </h3>
              <p> Please try again </p>
            </Jumbotron>
          </>
        )}
      </div>
      <Cart />
      <Footer />
    </>
  );
};

export default SearchRes;
