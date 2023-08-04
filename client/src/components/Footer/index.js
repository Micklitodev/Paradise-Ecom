import { Link } from "react-router-dom";

import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-white min-h-[75vh] w-full text-gray-700 py-10">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-20">
        <div className="md:col-span-2 ml-5">
          {/* section 1 */}
          <h3 className=" font-semibold uppercase mb-4">
            Paradise Hemp Dispensary
          </h3>
          <p
            style={{
              maxWidth: "90%",
            }}
          >
            Welcome to Paradise Hemp and Smoke! We are a one-stop shop for all
            your Smoking, Vaping, CBD, Hookah, and Delta 8 needs. We carry a
            multitude of products that range from Water Pipes, Delta 8, Vapes,
            E-Liquid, Coils, CBD, Hookahs, Shisha, and much more. We have a
            great rewards point system that offers 10% cashback. Visit any of
            our three locations in Stockbridge, Sandy Springs, and Hapeville
            (right by Hartsfield-Jackson Atlanta International Airport). Our
            friendly, experienced staff is here to assist you with all of your
            vaping needs. We strive to give you a personalized experience you
            can't find anywhere else. Whether you are new to the vaping
            community or an experienced vape user, Sam's Paradise Vape & Smoke
            is the shop for you. See you soon!
          </p>
        </div>

        {/* section 2 */}
        <div className="ml-5">
          <h3 className=" font-semibold uppercase mb-4">Footer Menu</h3>
          <ul className="space-y-4">
            {/* <li>
      <Link to="/search">Search</Link>
    </li> */}
            <li>
              <Link to="/terms">
                <p>Terms Of Use</p>
              </Link>
            </li>
            <li>
              <Link to="/privacyPolicy">
                <p>Privacy Policy</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p>Contact Us</p>
              </Link>
            </li>
            <li>
              <Link to="/lithiumIonBatWarn">
                <p>Lithium Ion Battery Warning</p>
              </Link>
            </li>
            <li>
              <Link to="/labRes">
                <p>Lab Results / COA</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <br />

      <p className="text-center mt-10">
        All Rights Reserved to @Paradise Hemp Dispensary.
      </p>
      <div className="text-center mt-4">
        <Link
          className="inline-block"
          to="https://www.facebook.com/"
          target="_blank"
        >
          <CiFacebook size={30} />
        </Link>
        <Link
          className="inline-block"
          to="https://www.instagram.com/"
          target="_blank"
        >
          <CiInstagram size={30} />
        </Link>
        <Link
          className="inline-block"
          to="https://www.twitter.com/"
          target="_blank"
        >
          <CiTwitter size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
