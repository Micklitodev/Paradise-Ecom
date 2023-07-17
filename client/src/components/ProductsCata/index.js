import ProductList from "../ProductList";
import Nav from "../Nav";
import Cart from "../Cart";

const ProductCata = () => {
  const url = window.location.href 
  const action = url.split('/').pop()
    return (
    <>
      <Nav />
      <ProductList action={action}/>
      <Cart /> 
    </>
  );
};

export default ProductCata;
