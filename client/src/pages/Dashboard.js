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
  useScrollHelper()

  const { data } = useQuery(QUERY_USER);
  console.log(data);
  return (
    <>
      <Nav />
      <br />
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
      {data ? (
        <>
          {" "}
          <div>
            <OrderHistory data={data} />
            {!Auth.isVerified() ? (
              <div className="borderwrap container">
                {" "}
                <VerifForm data={data} />{" "}
              </div>
            ) : (
              ""
            )}
            <br />
          </div>{" "}
        </>
      ) : (
        <>
          <Jumbotron>
            <h3>
              {" "}
              <a style={{ color: "#6499A4" }} href="/login">
                {" "}
                Login{" "}
              </a>{" "}
              to access this page.{" "}
            </h3>
          </Jumbotron>
        </>
      )}
      <Footer />
    </>
  );
};

export default Dashboard;
