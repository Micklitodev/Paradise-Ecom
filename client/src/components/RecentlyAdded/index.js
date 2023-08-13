import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { QUERY_TOP_10 } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import ProductItem from "../ProductItem";

const arrowStyle = {
  color: "rgba(230, 230, 230, 0.8)",
  fontSize: "35px",
  marginLeft: "-5%",
  marginRight: "-5%",
  zIndex: 1,
};

const RecentlyAdded = () => {
  const { data, loading } = useQuery(QUERY_TOP_10);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className="text-center py-2" style={{ fontWeight: 900 }}>
        New Items
      </h2>
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
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 950, // Medium-sized screens (desktop)
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600, // Small screens (desktop)
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 400, // Small screens (mobile)
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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
