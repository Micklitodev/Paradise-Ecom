import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(77, 77, 77)",
          position: "absolute",
          bottom: -300,
          width: "100vw",
          color: "#d3d3d3",
          padding: 10,
        }}
      >
        <p style={{ textAlign: "center", fontSize: 15 }}>
          {" "}
          Products sold on this site contain 0.3% THC or less. Products sold on
          this site are derived from Cannabis.
        </p>
      </div>
    </>
  );
};

export default Footer;
