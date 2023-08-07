import Nav from "../components/Nav";
import Footer from "../components/Footer";
import useScrollHelper from "../utils/scrollhelper";

const PrivacyPolicy = () => {
  useScrollHelper();
  return (
    <>
      <Nav />
      <h1 className="mt-20 text-center"> PRIVACY POLICY </h1>
      <div
        className="container borderwrap bg-black bg-opacity-40 px-2 py-2"
        style={{ width: "65%" }}
      >
        <h3>PRIVACY POLICY</h3>
        <p>
          This privacy policy sets out how www.paradisehempdispensary.com uses
          and protects any information that you give
          www.paradisehempdispensary.com when you use this website.
          www.paradisehempdispensary.com is committed to ensuring that your
          privacy is protected. Should we ask you to provide certain information
          by which you can be identified when using this website, then you can
          be assured that it will only be used in accordance with this privacy
          statement. www.paradisehempdispensary.com may change this policy from
          time to time by updating this page. You should check this page from
          time to time to ensure that you are happy with any changes.
        </p>
        <br />
        <h3>WHAT WE COLLECT</h3>
        <p>We may collect the following information:</p>
        <ul>
          <li>Name</li>
          <li>Contact Information (including email address)</li>
          <li>Demographic Information (postcode, preferences, interests)</li>
          <li>Other Information Relevant to Customer Surveys and/or Offers</li>
        </ul>
        <br />
        <h3>WHAT WE DO WITH THE INFORMATION WE GATHER</h3>
        <p>
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>
        <ul>
          <li>Internal record keeping.</li>
          <li>
            We may use the information to improve our products and services.
          </li>
          <li>
            We may periodically send promotional emails about new products,
            special offers or other information which we think you may find
            interesting using the email address which you have provided.
          </li>
          <li>
            From time to time, we may also use your information to contact you
            for market research purposes. We may contact you by email, phone,
            fax or mail. We may use the information to customize the website
            according to your interests.
          </li>
        </ul>
        <br />
        <h3>SECURITY</h3>
        <p>
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorized access or disclosure, we have put in place
          suitable physical, electronic and managerial procedures to safeguard
          and secure the information we collect online.
        </p>
        <br />
        <h3>HOW WE USE COOKIES</h3>
        <p>
          A cookie is a small file which asks permission to be placed on your
          computer's hard drive. Once you agree, the file is added and the
          cookie helps analyze web traffic or lets you know when you visit a
          particular site. Cookies allow web applications to respond to you as
          an individual. The web application can tailor its operations to your
          needs, likes, and dislikes by gathering and remembering information
          about your preferences.
        </p>
        <p>
          We use traffic log cookies to identify which pages are being used.
          This helps us analyze data about webpage traffic and improve our
          website to tailor it to customer needs. We only use this information
          for statistical analysis purposes, and then the data is removed from
          the system.
        </p>
        <p>
          Overall, cookies help us provide you with a better website, by
          enabling us to monitor which pages you find useful and which you do
          not. A cookie in no way gives us access to your computer or any
          information about you, other than the data you choose to share with
          us. You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies if you prefer. This may prevent you from
          taking full advantage of the website.
        </p>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
