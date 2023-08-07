import ProductList from "../components/ProductList";
import Nav from "../components/Nav";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";

const ProductCata = () => {
  Redirector.checkTokens();
  useScrollHelper();
  const url = window.location.href;
  const action = url.split("/").pop();
  return (
    <>
      <Nav />
      <br />
      <h2 className="text-center mt-20"> Detailed Category </h2>
      <hr />
      <div className="mx-10">
        <ProductList action={action} />
      </div>
      <br />
      <br />
      <Cart />
      <Footer />
    </>
  );
};

export default ProductCata;
