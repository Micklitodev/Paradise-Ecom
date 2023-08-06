import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <div className="center">
        <h1>404 Page Not Found</h1>
        <button
          onClick={() => window.location.assign("/home")}
          className=" center mt-80 bg-green-400 bg-opacity-80 text-black"
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
