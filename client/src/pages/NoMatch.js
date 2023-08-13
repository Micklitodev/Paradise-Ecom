import React from "react";
import { Link } from "react-router-dom";
import Redirector from "../utils/redirector";

const NoMatch = () => {
  Redirector.checkTokens();

  return (
    <div>
      <div className="center">
        <h1>404 Page Not Found</h1>
        <button
          onClick={() => window.location.assign("/home")}
          className=" center mt-80 bg-gradient-to-r from-red-400 to-yellow-600 opacity-80 bg-opacity-80 text-black"
        >
          Go Back Home
        </button>
      </div>
      <Link
        style={{
          marginLeft: 10,
          position: "absolute",
          zIndex: 1,
          top: 10,
          color: "white",
        }}
        to="/Home"
      >
        ← Back to Home{" "}
      </Link>
    </div>
  );
};

export default NoMatch;
