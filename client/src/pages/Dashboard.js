import OrderHistory from "../components/OrderHistory";
import Nav from "../components/Nav";
import Auth from "../utils/auth";
import VerifForm from "../components/VerifForm";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Jumbotron from "../components/Jumbotron";
import useScrollHelper from "../utils/scrollhelper";

const Dashboard = () => {
  Redirector.checkTokens();
  useScrollHelper();

  const { data } = useQuery(QUERY_USER);
  console.log(data);
  return (
    <>
      <Nav />
      <h2
        className="mt-20"
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        Dashboard
      </h2>
      {data ? (
        <>
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
      <Footer />
    </>
  );
};

export default Dashboard;
