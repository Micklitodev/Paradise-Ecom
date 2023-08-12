import React from "react";
import "./style.css";

const Overlay = ({ children }) => {
  return (
    <div className="overlay bg-white bg-opacity-5 box-shadow-custom">
      {children}
    </div>
  );
};

export default Overlay;
 