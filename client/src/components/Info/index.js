import Jumbotron from "../Jumbotron";

const Info = () => {
  return (
    <>
      <div className="container mx-auto">
        <h3 className="text-center text-uppercase">Promotions</h3>
        <hr className="border-t border-gray-300 my-4" />
        <div className="container borderwrap ">
          <h4> Earn points on orders over $50</h4>
          <p
            className="text-center "
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              maxWidth: "750px",
              marginBottom: "10px",
              padding: "15px",
            }}
          >
            Earn and Redeem Points Towards Your Next Purchase: Earn valuable
            points equivalent to 10 cents per dollar spent on eligible
            purchases. You can accumulate points at a rate of 1 point per dollar
            spent, and these points will be securely saved to your account,
            providing you with the flexibility to redeem them at your
            convenience. For qualifying purchases with a subtotal over $50 and
            without point redemption, points will be earned. However, please
            note that points are not accrued on purchases that utilize points or
            have a subtotal below $50. It is important to remember that once
            points are redeemed, they are non-refundable. Start earning and
            using your points to enhance your shopping experience with us!
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
