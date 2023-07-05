import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Nav from '../components/Nav'


const Home = () => {
  return (
    <> 
    <Nav />
    <br /> 
    <br />
    <img src='./images/deltaheader.png' style={{width: '100vw', borderRadius: 0}} /> 
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
    </>
  );
};

export default Home;
