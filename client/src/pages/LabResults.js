import Nav from "../components/Nav";
import Footer from "../components/Footer";

const LabResultCOA = () => {
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <div className="container" style={{ width: "60%" }}>
        <h1 style={{ textAlign: "center" }}> LAB RESULTS / COA </h1>

        <a
          href="https://drive.google.com/drive/folders/1oBcy0O5CKqA6JOTRnjpJEUd0lbybWPK4"
          target="_blank"
          rel="noreferrer"
          style={{ display: "grid", placeItems: "center", marginTop: "10%" }}
        >
          Click HERE for all Lab Results / COA{" "}
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default LabResultCOA;
