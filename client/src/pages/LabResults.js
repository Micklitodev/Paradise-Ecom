import Nav from "../components/Nav";
import Footer from "../components/Footer";
import useScrollHelper from "../utils/scrollhelper";

const LabResultCOA = () => {
  useScrollHelper();
  return (
    <>
      <Nav />
      <div className="container mb-40 mt-20" style={{ width: "60%" }}>
        <h1 className="text-center mb-20"> LAB RESULTS / COA </h1>
        <div className="container borderwrap bg-white bg-opacity-10 py-28">
          <p>
            Click
            <a
              href="https://drive.google.com/drive/folders/1oBcy0O5CKqA6JOTRnjpJEUd0lbybWPK4"
              target="_blank"
              rel="noreferrer"
              className="text-red-500"
            >
              {" "}
              HERE{" "}
            </a>
            for all Lab Results / COA
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LabResultCOA;
