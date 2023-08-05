import Nav from "../components/Nav";
import Footer from "../components/Footer";
import useScrollHelper from "../utils/scrollhelper";

const PointsPolicy = () => {
  useScrollHelper();
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <div className="container" style={{ width: "60%" }}>
        <br />
        <h1 style={{ textAlign: "center" }}> POINTS POLICY </h1>
        <br />

        <h3>Points Accumulation and Redemption: </h3>
        <br />
        <ol>
          <li>
            <h4> Points Accumulation: </h4>
            <p>
              {" "}
              Customers can earn points at a rate of 1 point per dollar spent on
              the subtotal of their order. These points will be securely stored
              in their account for future use, providing them with the
              flexibility to redeem them at their convenience. Please note that
              points are not earned on purchases made using already accrued
              points.
            </p>
          </li>
          <br />
          <li>
            <h4> Points Redemption: </h4>
            <p>
              {" "}
              Once accumulated points are redeemed, they become non-refundable.
              Customers are encouraged to use their redeemed points solely for
              enhancing their shopping experience with us at Paradise Hemp.
            </p>
          </li>
          <br />
          <li>
            <h4> Points Validity: </h4>
            <p>
              Points earned through this program are only valid for use at
              Paradise Hemp and cannot be exchanged for legal tender or any
              other currency.
            </p>
          </li>
        </ol>
        <br />
        <h3> Agreement: </h3>
        <p>
          By participating in our points program, customers agree to abide by
          these terms and conditions. Paradise Hemp reserves the right to modify
          or terminate this points program at any time at its discretion, with
          or without notice. Any changes to the program will be communicated to
          the customers in a timely manner.
        </p>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default PointsPolicy;
