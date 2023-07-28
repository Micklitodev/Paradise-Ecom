import React from "react";
import Auth from "../utils/auth";
import Nav from "../components/Nav";
import { useQuery, useMutation } from "@apollo/client";
import { USER_VERIF_ADMIN } from "../utils/mutations";
import { QUERY_USER_ADMIN } from "../utils/queries";
import Jumbotron from "../components/Jumbotron";
import useScrollHelper from '../utils/scrollhelper'

const VerifUsers = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);
  useScrollHelper()

  const [userVerifAdmin] = useMutation(USER_VERIF_ADMIN);

  let filteredUser;

  const { data } = useQuery(QUERY_USER_ADMIN);

  if (data) {
    let user = data.queryUserAdmin;
    filteredUser = user.filter((u) => u.idFront && !u.isVerified);
  }

  const handleAccept = (e) => {
    if (window.confirm("Are you sure you want to accept this user?")) {
      const target = e.target.parentNode;
      try {
        console.log("accepted user:", target.getAttribute("value"));

        const id = target.getAttribute("value");
        const { data } = userVerifAdmin({
          variables: {
            action: "accept",
            id: id,
          },
        });
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        window.location.assign("/verifusers");
      }
    }
  };

  const handleReject = (e) => {
    if (window.confirm("Are you sure you want to reject this user?")) {
      const target = e.target.parentNode;
      try {
        console.log("rejected user:", target.getAttribute("value"));
        const id = target.getAttribute("value");
        const { data } = userVerifAdmin({
          variables: {
            action: "reject",
            id: id,
          },
        });
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        window.location.assign("/verifusers");
      }
    }
  };

  if (Auth.isAdmin() === true) {
    return (
      <>
        <Nav />
        <br />
        <br />
        <br />
        <br />
        <h2 style={{ textAlign: "center" }}> Verify Users</h2>

        {filteredUser?.length ? (
          <div style={{ textAlign: "center" }}>
            {filteredUser.length} user(s) to verify.
          </div>
        ) : null}

        <div className="borderwrap container">
          {!filteredUser?.length ? (
            <>
              <br />
              <br />
              <br />
              <div style={{ height: "20vh" }}> 
              <h3> All done! </h3> 
              </div>
            </>
          ) : (
            filteredUser?.map((user, index) => (
              <div style={{ textAlign: "center" }} key={index} value={user._id}>
                <br />
                <h3>
                  {" "}
                  {user.firstName} {user.lastName}{" "}
                </h3>
                <p> {user._id} </p>
                <img src={user.idFront} alt="" style={{ maxHeight: 200 }} />
                <img src={user.idBack} alt="" style={{ maxHeight: 200 }} />
                <br />

                <button onClick={handleReject}> Reject </button>
                <button onClick={handleAccept}> Accept </button>
                <br />
                <br />
                <hr />
              </div>
            ))
          )}

          <br />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="center">
          <Jumbotron>
            <h2> Err no auth to access this page.</h2>
          </Jumbotron>
        </div>
      </>
    );
  }
};

export default VerifUsers;
