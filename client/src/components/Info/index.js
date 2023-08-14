import { Link } from "react-router-dom";
const Info = () => {
  return (
    <>
      <div className="container mx-auto">
        <h3 className="text-center text-uppercase py-2" style={{textTransform: 'uppercase'}}>Promotions</h3>
        <div className="container  bg-white bg-opacity-10 borderwrap">
        <br /> 
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
          <em className="py-2 px-2" style={{ fontSize: 13 }}>
            For more info visit our points policy by clicking
            <Link className="text-red-500 opacity-80" to="/pointspolicy">
              {" "}
              Here
            </Link>
          </em>

          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Info;
