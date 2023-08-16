import Footer from "../components/Footer";
import useScrollHelper from "../utils/scrollhelper";

const PointsPolicy = () => {
  useScrollHelper();
  return (
    <>
      <h1 className="text-center mt-20"> POINTS POLICY </h1>
      <div
        className="container borderwrap bg-white bg-opacity-10 px-2 py-2 mb-20 "
        style={{ width: "60%" }}
      >
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
        <br />
        <p>
          By participating in our points program, customers agree to abide by
          these terms and conditions. Paradise Hemp reserves the right to modify
          or terminate this points program at any time at its discretion, with
          or without notice. Any changes to the program will be communicated to
          the customers in a timely manner.
        </p>
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default PointsPolicy;
