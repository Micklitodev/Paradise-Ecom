import OrderHistory from "../components/OrderHistory";
import Nav from "../components/Nav";
import Auth from "../utils/auth";
import VerifForm from "../components/VerifForm";
import Footer from '../components/Footer'

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
          fontSize: 30,
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
          <div className="borderwrap container">
            {" "}
            <VerifForm />{" "}
          </div>
        ) : (
          ""
        )}
        <br/> 
      </div>
      <Footer /> 
    </>
  );
};

export default Dashboard;
