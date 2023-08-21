import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";

const LandingPage = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const handleClick = () => {
    setDisplayModal(true);
  };

  useEffect(() => {
    console.log(`
  "We only have room
  for one specimen,       "Let us take the small,
  Dtlxvr. Which shall      low-decible one, Ftxbp.
      we take?"               I like peace."
                 _.-'~~~~'-._   /
      .       .-~            ~-.         .
           .-~   (oo)  (oo)    ~-.
          (______//~~//~~ ||_______)
      _.-~"                         "~-._
     |O=O=O=O=O=O=O=O=O=O=O=O=O=O=O=O=O=O|    *
    |_____________________________________|
                x x x x x x x
      .  *       x_x_x_x_x_x.

                   DEV: ML.
                                                   `);
  }, []);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          filter: displayModal ? "blur(20px)" : "none",
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
