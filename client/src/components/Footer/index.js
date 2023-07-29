import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ffffff",
          position: "relative",
          bottom: 0,
          minHeight: "75vh",
          width: "100vw",
          color: "#7f7f7f",
          padding: 10,
        }}
      >
        <br />
        <p style={{ textAlign: "center", fontSize: 15 }}>
          {" "}
          Products sold on this site contain 0.3% THC or less. Products sold on
          this site are derived from Cannabis.
        </p>
        <br />
        <br />
        <div style={{ float: "left", maxWidth: "28%", marginLeft: '3%'}}>
          <h3 style={{ marginLeft: "1%", textTransform: 'uppercase'}}> Paradise Hemp Dispensary </h3>
          <br />
          <p>
            {" "}
            Welcome to Paradise Hemp and Smoke! We are a one stop shop for all
            your Smoking, Vaping, CBD, Hookah, and Delta 8 needs. We carry a
            multitude of products that range from Water Pipes, Delta 8, Vapes,
            E-Liquid, Coils, CBD, Hookahs, Shisha, and much much more. We have a
            great rewards point system that offers 10% cashback. Stop by at any
            of our three locations in Stockbridge, Sandy Springs, and Hapeville
            (right by Hartsfield-Jackson Atlanta International Airport). Let our
            friendly, experienced staff assist you in all of your vaping needs.
            We strive to give you a personalized experience you cant find
            anywhere else. Whether you are new to the vaping community, or an
            experienced vape user, Sam's Paradise Vape & Smoke is the shop for
            you. See you soon!
          </p>
        </div>

        <div style={{ float: "right", marginRight: "4%" }}>
          <h3 style={{ marginLeft: "25%", textTransform: 'uppercase' }}> We check ID </h3>
          <br />
          <img style={{width: '80%'}} src="./images/mclovinid.png" alt='notably fake corny id' />
        </div>

        <div style={{ marginLeft: "41%" }}>
          <h3 style={{ marginLeft: "4.5%", textTransform: 'uppercase'}}> Footer Menu</h3>
          <br />
          <ul>
            {/* <li>
              <Link  to="/search">
                {" "}
                Search
              </Link>
            </li> */}
            <li>
              <Link to="/terms">Terms Of Use</Link>
            </li>
            <br />
            <li>
              <Link to="/privacyPolicy"> Privacy Policy</Link>
            </li>
            <br />
            <li>
              <Link to="/contact"> Contact Us </Link>
            </li>
            <br />
            <li>
              <Link to="/lithiumIonBatWarn"> Lithium Ion Battery Warning</Link>
            </li>
            <br />
            <li>
              <Link to="/labRes"> Lab Results / COA</Link>
            </li>
          </ul>
        </div>
        <p style={{position: 'absolute', bottom: 0, marginLeft: '3%'}}> All Rights Reserved to @Paradise Hemp Dispensary. </p>
      </div>
    </>
  );
};

export default Footer;
