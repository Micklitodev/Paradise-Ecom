import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { QUERY_TOP_10 } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import ProductItem from "../ProductItem";

const arrowStyle = {
  color: "rgba(160, 160, 160, 0.8)",
  fontSize: "30px",
  marginLeft: "-2%",
  marginRight: "-2%",
};

const RecentlyAdded = () => {
  const { data, loading } = useQuery(QUERY_TOP_10);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3 className="text-center py-2">New Items</h3>
      <hr className="border-t border-gray-200 my-4 mx-7" />
      <div style={{ maxWidth: "80vw", position: "relative", left: "9%" }}>
        <Slide
          prevArrow={
            <div style={{ ...arrowStyle }} onClick={console.log("hit")}>
              &lt;
            </div>
          }
          nextArrow={<div style={{ ...arrowStyle }}>&gt;</div>}
          responsive={[
            {
              breakpoint: 1300, // Large-sized screens (desktop)
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 950, // Medium-sized screens (desktop)
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 600, // Small screens (desktop)
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 400, // Small screens (mobile)
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {data.queryNewProducts.map((slideProduct, index) => (
            <div key={index}>
              <div className="flex justify-center rounded-10 mb-4">
                <ProductItem
                  key={slideProduct._id}
                  _id={slideProduct._id}
                  image={slideProduct.image}
                  name={slideProduct.name}
                  price={slideProduct.price}
                  quantity={slideProduct.quantity}
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default RecentlyAdded;
