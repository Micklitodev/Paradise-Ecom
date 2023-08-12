import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useMutation } from "@apollo/client";
import { SEND_MAIL } from "../utils/mutations";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";
import Jumbotron from "../components/Jumbotron";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Contact = () => {
  Redirector.checkTokens();
  useScrollHelper();
  const [fromSubmitted, setFormSubmitted] = useState(false);
  const [sendMail, { error }] = useMutation(SEND_MAIL);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setFormSubmitted(true);

      const { data } = sendMail({
        variables: { ...formData },
      });
    } catch (err) {
      console.error(err);
    } finally {
      setFormData({
        email: "",
        name: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Nav />
      <br />
      {Auth.loggedIn() ? (
        <>
          {fromSubmitted ? (
            <>
              {error ? (
                <div>
                  <Jumbotron>
                    <h2 className="mt-20">Message Failed!</h2>
                    <p>Please reload the page and try again. </p>
                  </Jumbotron>
                </div>
              ) : (
                <div>
                  <Jumbotron>
                    <h2 className="mt-20">Message Sent!</h2>
                    <p>We will be in contact shortly!</p>
                  </Jumbotron>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="mt-20">
                <div className="borderwrap bg-white bg-opacity-10 container ">
                  <h3 className="text-2xl font-semibold">Contact Us</h3>
                  <br />

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center space-y-4"
                  >
                    <div className="flex flex-col my-2">
                      <label htmlFor="name" className="mb-1">
                        Name:
                      </label>
                      <input
                        style={{ width: 300 }}
                        className="border border-gray-300 px-3 py-2 rounded-md w-full"
                        label="name"
                        name="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="flex flex-col my-2">
                      <label htmlFor="email" className="mb-1">
                        Email:
                      </label>
                      <input
                        style={{ width: 300 }}
                        className="border border-gray-300 px-3 py-2 rounded-md w-full"
                        label="email"
                        name="email"
                        type="email"
                        placeholder="sample@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="flex flex-col my-2">
                      <label htmlFor="message" className="mb-1">
                        Message:
                      </label>
                      <textarea
                        className="border border-gray-300 px-3 py-2 rounded-md w-72"
                        label="message"
                        name="message"
                        placeholder="What would you like to let us know?"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <br />
                    <div className="flex justify-end">
                      <button
                        disabled={
                          !formData.name || !formData.email || !formData.message
                        }
                        className=" bg-red-400 bg-opacity-80 text-black py-1 w-40"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  <br />
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {" "}
          <div>
            <Jumbotron>
              <h2 className="mt-20">
                <Link className="text-green-400" to="/login">
                  Login{" "}
                </Link>
                to send contact form
              </h2>
            </Jumbotron>
          </div>
        </>
      )}
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Contact;
