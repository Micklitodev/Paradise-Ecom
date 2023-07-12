import React, { useState } from "react";
import Auth from "../utils/auth";
import Nav from "../components/Nav";

const VerifUsers = () => {
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
