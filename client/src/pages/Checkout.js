import Cart from "../components/Cart";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector"
import useScrollHelper from '../utils/scrollhelper'
const Checkout = () => {
  Redirector.checkTokens()
  useScrollHelper()
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <div className="container borderwrap bg-black bg-opacity-40 px-4 py-4 mb-20">
        <Cart CheckoutPage={true} />{" "}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
