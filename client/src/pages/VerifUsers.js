import React from "react";
import Auth from "../utils/auth";
import Nav from "../components/Nav";

const VerifUsers = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);

  const data = [
    {
      idFront: "./images/mclovinid.png",
      firstName: "Mc",
      lastName: "Lovin",
      _id: "23sD8kfja09sduf934m",
    },
  ];

  const handleAccept = (e) => {
    const target = e.target.parentNode;
    console.log('accepted user:', target.getAttribute("value"));
  };

  const handleReject = (e) => {
    const target = e.target.parentNode;
    console.log('rejected user:', target.getAttribute("value"));
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
        <div className="borderwrap">
          {data.map((user, index) => (
            <div key={index} value={user._id}>
              <h1>
                {" "}
                {user.firstName} {user.lastName}{" "}
              </h1>
              <p> {user._id} </p>
              <img src={user.idFront} alt="" />
              <br />
              <button onClick={handleReject}> Reject </button>
              <button onClick={handleAccept}> Accept </button>
            </div>
          ))}
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
