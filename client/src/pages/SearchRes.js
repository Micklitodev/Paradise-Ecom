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

  const [querySearch, { data, loading }] = useLazyQuery(SEARCH_QUERY);
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
  }, []);

  return (
    <>
      <Nav />
      <div className="mt-20">
        <h2 className="text-center">Search</h2>
        <hr />
        {!loading && data?.querySearch.length > 0 ? (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              {data.querySearch?.map((product) => (
                <ProductItem
                  key={product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
            </div>
            <br />
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
