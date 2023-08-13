import React from "react";
import "./style.css";

const Overlay = ({ children }) => {
  return <div className="overlay bg-gray-400 bg-opacity-5">{children}</div>;
};

export default Overlay;
