import Nav from "../components/Nav";
import Auth from "../utils/auth";
// import { useQuery } from '@apollo/client';

const AdminDetail = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);

  const url = window.location.href;
  const id = url.split("/").pop();

  console.log(id);

  if (Auth.isAdmin()) {
    return (
      <>
        <Nav />
        <br />
        <br />
        <br />

        <div></div>
        <div className="borderwrap container">
          <h1> Order #: {id} </h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="center">Err no auth to access this page.</div>
      </>
    );
  }
};

export default AdminDetail;
