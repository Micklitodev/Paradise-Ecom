import { useState } from "react";
import { BsGithub, BsTelephone, BsEnvelope } from "react-icons/bs";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Contact = () => {
  const [fromSubmitted, setFormSubmitted] = useState(false);

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
      console.log(formData);
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
        <div>
          <div className="borderwrap container">
            <h2>Contact Me</h2>
            <br />
            <div>
              <div style={{ display: "inline-block", padding: 10 }}>
                <a
                  href="https://github.com/Micklitodev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub size={30} />
                </a>
              </div>
              <div style={{ display: "inline-block", padding: 10 }}>
                <a href="tel:4708314159">
                  <BsTelephone size={29} />
                </a>
              </div>

              <div style={{ display: "inline-block", padding: 10 }}>
                <a href="mailto: micklito.dev@gmail.com">
                  <BsEnvelope c size={34} />
                </a>
              </div>
            </div>
            <form>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
                <br /> 
              </form>
            </form>
          </div>
        </div>
      )}
      <br /> 
      <br /> 
      <Footer />
    </>
  );
};

export default Contact;
