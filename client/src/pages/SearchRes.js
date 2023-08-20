import { useLazyQuery } from "@apollo/client";
import { SEARCH_QUERY } from "../utils/queries";
import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";
import Jumbotron from "../components/Jumbotron";
import Cart from "../components/Cart";
import Auth from "../utils/auth";
import Search from "../components/Search";

const SearchRes = () => {
  Redirector.checkTokens();
  useScrollHelper();

  const [querySearch, { data, loading }] = useLazyQuery(SEARCH_QUERY);
  const url = window.location.href;
  const searchParams = url.split("/").pop();
  const sanitizedParams = searchParams.replace(/%20/g, " ");

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedData, setSortedData] = useState([]);

  const handleSort = async () => {
    const sortedProducts = [...data?.querySearch];

    if (sortOrder === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
      setSortOrder("desc");
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
      setSortOrder("asc");
    }

    setSortedData(sortedProducts);
  };

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
      <br />
      <div className="mt-20">
        <h2 className="text-center">Search</h2>
        <hr />
        <div className="text-center">
          <button
            onClick={handleSort}
            className="rounded-md bg-red-400 text-white bg-opacity-80x mt-10"
          >
            Sort by Price {sortOrder === "asc" ? "Low to High" : "High to Low"}
          </button>
        </div>
        {!loading && (sortedData.length > 0 || data?.querySearch.length > 0) ? (
          <>
            <div className="mt-10 mb-60">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                {sortedData.length ? (
                  <>
                    {sortedData?.map((product) => (
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
                  </>
                ) : (
                  <>
                    {" "}
                    {data.querySearch?.map((product) => (
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
                    ))}{" "}
                  </>
                )}
              </div>
              <br />
            </div>
          </>
        ) : (
          <>
            <Jumbotron>
              <h3>No search results found.</h3>
              <p>Please try again</p>
              {Auth.isAdmin() ? (
                <>
                  <div className="absolute center ml-8 mt-40">
                    {" "}
                    <Search />{" "}
                  </div>
                </>
              ) : null}
            </Jumbotron>
          </>
        )}
      </div>
      <Cart />
      <br />
      <Footer />
    </>
  );
};

export default SearchRes;
