import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";
const Checkout = () => {
  Redirector.checkTokens();
  useScrollHelper();
  return (
    <>
      <br />
      <br />
      <br />
      <div className="container borderwrap bg-white bg-opacity-10 px-4 py-4 mb-40">
        <Cart CheckoutPage={true} />{" "}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
