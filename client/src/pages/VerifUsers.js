import React from "react";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { USER_VERIF_ADMIN } from "../utils/mutations";
import { QUERY_USER_ADMIN } from "../utils/queries";
import Jumbotron from "../components/Jumbotron";
import useScrollHelper from "../utils/scrollhelper";

const VerifUsers = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);
  useScrollHelper();

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
        <h2 className="text-center mt-20">Verify Users</h2>
        {filteredUser?.length ? (
          <div className="text-center">
            {filteredUser.length} user(s) to verify.
          </div>
        ) : null}

        <div className="borderwrap bg-white bg-opacity-10 container mx-auto">
          {!filteredUser?.length ? (
            <>
              <div className="mt-20" style={{ height: "20vh" }}>
                <h3>All done!</h3>
              </div>
            </>
          ) : (
            filteredUser?.map((user, index) => (
              <div className="text-center" key={index} value={user._id}>
                <br />
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <p>{user._id}</p>

                <img
                  className="inline-block mx-1"
                  src={user.idFront}
                  alt=""
                  style={{ maxHeight: 200 }}
                />
                <img
                  className="inline-block mx-1"
                  src={user.idBack}
                  alt=""
                  style={{ maxHeight: 200 }}
                />
                <br />
                <br />
                <button
                  className="bg-red-400 text-white py-1 px-20 mx-14"
                  onClick={handleReject}
                >
                  Reject
                </button>
                <button
                  className="bg-gradient-to-r from-red-400 to-yellow-600 opacity-80 text-white py-1 px-20 mx-14"
                  onClick={handleAccept}
                >
                  Accept
                </button>
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
