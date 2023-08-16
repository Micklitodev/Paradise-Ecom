import Footer from "../components/Footer";
import useScrollHelper from "../utils/scrollhelper";

const LithiumWarn = () => {
  useScrollHelper();
  return (
    <>
      <h1 className="mt-20" style={{ textAlign: "center" }}>
        {" "}
        LITHIUM ION BATTERY WARNING:{" "}
      </h1>
      <div
        className="container borderwrap mb-40 bg-white bg-opacity-10 px-4 py-4"
        style={{ width: "60%" }}
      >
        <h3>LITHIUM ION BATTERY WARNING:</h3>
        <ol>
          <li>
            Do not use batteries if wrapper or insulator appears to be damaged.
          </li>
          <li>
            Do not use batteries with products that operate at a higher
            electrical current.
          </li>
          <li>
            Do not keep or place batteries in pockets, purses, or any containers
            that may allow the batteries to contact metal, or create
            short-circuit conditions.
          </li>
          <li>Lithium batteries may explode or catch fire if mishandled.</li>
          <li>Keep out of reach from children and pets.</li>
          <li>
            Do not disassemble, puncture, crush, cut, incinerate, short-circuit,
            or expose batteries to any fire, water, or extreme heat or cold.
          </li>
          <li>
            Battery manufacturers are not responsible for any personal injury or
            property damage caused by misusing or mishandling this battery.
          </li>
          <li>Advanced User Item. Use at Your Own Risk!</li>
        </ol>
        <br />
        <br />
        <h3>CBD AND DELTA8 WARNING</h3>
        <p>
          By using of a CBD Additive (Cannabidiol Oil), I accept full
          responsibility for any damages or harmful results that may occur as a
          result of said product.
        </p>
        <p>
          I understand that I am relinquishing the right to sue and the rights
          to receive any compensation should any damages and or harmful results
          arise from the use of said product, whether the product is used
          properly or improperly.
        </p>
        <p>
          I further acknowledge that all products created, manufactured, or
          distributed by VAPE BUSINESS are offered on the condition that their
          users accept full responsibility for any ill effects the product may
          cause.
        </p>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default LithiumWarn;
