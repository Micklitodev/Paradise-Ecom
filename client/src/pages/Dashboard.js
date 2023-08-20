import OrderHistory from "../components/OrderHistory";
import Auth from "../utils/auth";
import VerifForm from "../components/VerifForm";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Jumbotron from "../components/Jumbotron";
import useScrollHelper from "../utils/scrollhelper";
import Cart from "../components/Cart";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import UserData from "../components/UserData";

const Dashboard = () => {
  Redirector.checkTokens();
  useScrollHelper();

  const { data } = useQuery(QUERY_USER);
  return (
    <>
      <br />
      <Fade>
        <h2 className="mt-20 text-center">Dashboard</h2>
        <div className="ml-4">
          <Link to="/home" className="text-white">
            ← Back to Home
          </Link>
        </div>
        {/* <h3 style={{ textAlign: "center" }}>
          Order History for {data.user?.firstName}{" "}
          {data.user?.lastName}
        </h3> */}
        {data ? (
          <> 
          <UserData props={data}/>
            <div>
              <OrderHistory data={data} />
              {!Auth.isVerified() ? (
                <div className="container">
                  {" "}
                  <VerifForm data={data} /> <br />
                  <br />
                </div>
              ) : null}
              <br />
            </div>
          </>
        ) : (
          <>
            <Jumbotron>
              <h3 className="mt-20">
                <a style={{ color: "#6499A4" }} href="/login">
                  Login{" "}
                </a>{" "}
                to access this page.
              </h3>
            </Jumbotron>
          </>
        )}
      </Fade>
      <Cart />
      <br />
      <Footer />
    </>
  );
};

export default Dashboard;
