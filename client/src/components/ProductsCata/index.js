import ProductList from "../ProductList";
import Nav from "../Nav";
import Cart from "../Cart";
import Footer from '../Footer'
import Redirector from "../../utils/redirector"

const ProductCata = () => {
  Redirector.checkTokens();
  const url = window.location.href 
  const action = url.split('/').pop()
    return (
    <>
      <Nav />
      <ProductList action={action}/>
      <Cart /> 
      <br /> 
      <br /> 
      <Footer /> 
    </>
  );
};

export default ProductCata;
