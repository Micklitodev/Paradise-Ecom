import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";

const ProductCata = () => {
  Redirector.checkTokens();
  useScrollHelper();
  const url = window.location.href;
  const parts = url.split("/");
  const action = parts[parts.length - 1].split("?")[0];
  const description = parts[parts.length - 1].split("?")[1];

  console.log(action);

  return (
    <>
      <br />
      <h2 className="text-center mt-20"> Category - {description} </h2>
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
