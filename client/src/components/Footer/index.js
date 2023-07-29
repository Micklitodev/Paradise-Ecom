import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white relative bottom-0 min-h-[75vh] w-screen text-gray-700 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          <div className="md:w-3/5 mr-8">
            {/* section 1  */}
            <h3 className="text-2xl font-semibold uppercase mb-4">
              Paradise Hemp Dispensary
            </h3>
            <p>
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
          {/* section 2  */}
          <div className="md:w-3/5">
            <h3 className="text-2xl font-semibold md:ml-16 uppercase mb-4">
              We Check ID
            </h3>
            <img
              className="w-3/5 mx-auto"
              src="./images/mclovinid.png"
              alt="notably fake corny id"
            />
          </div>

          {/* section 3  */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold uppercase mb-4">
              Footer Menu
            </h3>
            <ul className="space-y-4">
              {/* <li>
                <Link to="/search">Search</Link>
              </li> */}
              <li>
                <Link to="/terms">Terms Of Use</Link>
              </li>
              <li>
                <Link to="/privacyPolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/lithiumIonBatWarn">Lithium Ion Battery Warning</Link>
              </li>
              <li>
                <Link to="/labRes">Lab Results / COA</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="absolute bottom-0 left-4">
          All Rights Reserved to @Paradise Hemp Dispensary.
        </p>
      </div>
    </div>
  );
};

export default Footer;
