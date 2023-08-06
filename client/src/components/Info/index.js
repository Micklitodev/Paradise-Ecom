import { Link } from "react-router-dom";
const Info = () => {
  return (
    <>
      <div className="container mx-auto">
        <h3 className="text-center text-uppercase">Promotions</h3>
        <div className="container bg-black bg-opacity-40 borderwrap">
          <h4> Earn Points on Your Purchase: </h4>
          <p
            className="text-center "
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              maxWidth: "750px",
              marginBottom: "10px",
              padding: "15px",
              fontSize: 15,
            }}
          >
            <br />
            You can accumulate points at a rate of 1 point per dollar spent to
            the subtotal of the order. These points will be securely saved to
            your account, providing you with the flexibility to redeem them at
            your convenience. However, please note that points are not accrued
            on purchases that utilize points. It is important to remember that
            once points are redeemed, they are non-refundable. Points are only
            valid at Paradise Hemp and cannot be exchanged for legal tender.
            Start earning and using your points to enhance your shopping
            experience with us!
          </p>
          <br />
          <p>
            For more info visit our points policy by clicking
            <Link style={{ color: "#6499A4" }} to="/pointspolicy">
             {" "} Here
            </Link>
          </p>

          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Info;
