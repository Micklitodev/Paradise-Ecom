import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { QUERY_TOP_10 } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import ProductItem from "../ProductItem";

const divStyle = {
  display: "flex",
  justifyContent: "center",
  borderRadius: "10px",
};

const arrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "rgba(0, 0, 0, 0.8)",
  fontSize: "35px",
  cursor: "pointer",
  marginLeft: "3%",
  marginRight: "3%",
};

const RecentlyAdded = () => {
  const { data, loading } = useQuery(QUERY_TOP_10);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" mx-auto">
        <h3 className="text-center">New Items</h3>
        <hr className="border-t border-gray-300 my-4" />

        <div>
          <div id="certs">
            <br />
            <br />
            <Slide
              prevArrow={<div style={{ ...arrowStyle }}>&lt;</div>}
              nextArrow={<div style={{ ...arrowStyle }}>&gt;</div>}
              slidesToShow={3} // Show 3 items per slide
            >
              {data.queryNewProducts.map((slideProduct, index) => (
                <div key={index}>
                  <div style={{ ...divStyle }}>
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
        </div>
      </div>
    </>
  );
};

export default RecentlyAdded;
