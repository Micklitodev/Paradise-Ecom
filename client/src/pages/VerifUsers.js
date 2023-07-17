import React from "react";
import Auth from "../utils/auth";
import Nav from "../components/Nav";
import { useQuery, useMutation } from "@apollo/client";
import { USER_VERIF_ADMIN } from "../utils/mutations";
import { QUERY_USER_ADMIN } from "../utils/queries";

const VerifUsers = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);

  const [userVerifAdmin] = useMutation(USER_VERIF_ADMIN);

  let filteredUser;

  const { data } = useQuery(QUERY_USER_ADMIN);

  if (data) {
    let user = data.queryUserAdmin;
    filteredUser = user.filter((u) => u.idFront && !u.isVerified);
  }

  const handleAccept = (e) => {
    if (window.confirm("Are you sure you want to reject this user?")) {
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
        <div>
          {" "}
          You're authorized to view all orders additional checks will be made at
          server level.{" "}
        </div>
        <div className="borderwrap container">
          {!filteredUser?.length ? (
            <div> No users to verify now. </div>
          ) : (
            filteredUser?.map((user, index) => (
              <div key={index} value={user._id}>
                <h1>
                  {" "}
                  {user.firstName} {user.lastName}{" "}
                </h1>
                <p> {user._id} </p>
                <img src={user.idFront} alt="" style={{ maxHeight: 200 }} />
                <img src={user.idBack} alt="" style={{ maxHeight: 200 }} />
                <br />
                <button onClick={handleReject}> Reject </button>
                <button onClick={handleAccept}> Accept </button>
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
        <div className="center"> Err no auth to acess this page. </div>
      </>
    );
  }
};

export default VerifUsers;
