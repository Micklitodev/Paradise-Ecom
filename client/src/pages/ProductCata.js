import ProductList from "../components/ProductList";
import Nav from "../components/Nav";
import Cart from "../components/Cart";
import Footer from '../components/Footer'
import Redirector from "../utils/redirector"
import useScrollHelper from "../utils/scrollhelper";

const ProductCata = () => {
  Redirector.checkTokens();
  useScrollHelper()
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
