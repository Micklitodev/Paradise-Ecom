import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useMutation } from '@apollo/client'
import {SEND_MAIL} from '../utils/mutations'
import Redirector from '../utils/redirector'
import useScrollHelper from "../utils/scrollhelper";


const Contact = () => {
  Redirector.checkTokens()
  useScrollHelper()
  const [fromSubmitted, setFormSubmitted] = useState(false);
  const [sendMail] = useMutation(SEND_MAIL);

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
      
      const {data} = sendMail({
        variables: { ...formData }
      })
      
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
      <br />
      <br />
      {fromSubmitted ? (
        <div>
          <h2 style={{ textAlign: "center" }}>
            <br />
            <br />
            Message Sent! Thank you for reaching out. We will be in contact
            shortly!
          </h2>
        </div>
      ) : (
        <>
          <div className="borderwrap container">
            <h3> Contact Us </h3>
            <br />

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-4"
            >
              <div className="flex-row space-between my-2">
                <label htmlFor="name">Name:</label>
                <input
                  style={{ width: 300 }}
                  label="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex-row space-between my-2">
                <label htmlFor="email">Email:</label>
                <input
                  style={{ width: 300 }}
                  label="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex-row space-between my-2">
                <label htmlFor="message">Message:</label>
                <textarea
                  label="message"
                  name="message"
                  cols="100"
                  rows="10"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <br />
              <div className="flex-row flex-end">
                <button
                  disabled={
                    !formData.name || !formData.email || !formData.message
                  }
                  type="submit"
                  variant="success"
                  width="w-fit"
                >
                  Submit
                </button>
              </div>
            </form>
            <br />
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
