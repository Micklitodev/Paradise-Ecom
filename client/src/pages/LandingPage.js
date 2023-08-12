import React, { useState } from "react";
import Modal from "../components/Modal";

const LandingPage = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const handleClick = () => {
    setDisplayModal(true);
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          filter: displayModal ? "blur(20px)" : "none"
        }}
      >
        <div className="container2">
          <h1 className="mt-10 ml-2" style={{ color: "white" }}>
            Paradise Hemp Dispensary
          </h1>
          <button
            onClick={handleClick}
            className="bg-red-500 bg-opacity-50 text-white mb-30 w-40 h-20"
          >
            Enter Site
          </button>
          <em style={{ fontSize: 11 }}>
            {" "}
            All rights reserved to @Paradise Hemp Dispensary
          </em>
        </div>
        </div>

        {displayModal && <Modal displayModal={setDisplayModal} />}
    </>
  );
};

export default LandingPage;
