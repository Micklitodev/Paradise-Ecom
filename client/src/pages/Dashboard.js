import OrderHistory from "../components/OrderHistory";
import Nav from "../components/Nav";
import Auth from "../utils/auth";
import VerifForm from "../components/VerifForm";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <h1
        style={{
          display: "grid",
          placeItems: "center",
          fontSize: 40,
          textTransform: "uppercase",
          fontWeight: 900,
        }}
      >
        {" "}
        dashboard{" "}
      </h1>
      <div>
        <OrderHistory />
        {!Auth.isVerified() ? (
          <div className="borderwrap">
            {" "}
            <VerifForm />{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Dashboard;
