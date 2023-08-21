import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import Footer from "../components/Footer";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";
import { Fade } from "react-awesome-reveal";

const Signup = () => {
  Redirector.checkTokens();
  useScrollHelper();

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Fade>
        <div className="mt-24 mb-40">
          <div
            className="container bg-white bg-opacity-10 borderwrap"
            style={{ minHeight: "60vh" }}
          >
            <br />
            <h2 className="text-2xl font-semibold">Signup</h2>
            <form
              style={{ maxWidth: 300 }}
              onSubmit={handleFormSubmit}
              className="flex flex-col items-center space-y-4"
            >
              <div className="flex flex-col my-2">
                <label htmlFor="firstName" className="mb-1">
                  First Name:
                </label>
                <input
                  placeholder="First"
                  name="firstName"
                  type="firstName"
                  id="firstName"
                  onChange={handleChange}
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col my-2">
                <label htmlFor="lastName" className="mb-1">
                  Last Name:
                </label>
                <input
                  placeholder="Last"
                  name="lastName"
                  type="lastName"
                  id="lastName"
                  onChange={handleChange}
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col my-2">
                <label htmlFor="email" className="mb-1">
                  Email:
                </label>
                <input
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  autoComplete="email"
                  onChange={handleChange}
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col my-2">
                <label htmlFor="pwd" className="mb-1">
                  Password:
                </label>
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  id="pwd"
                  onChange={handleChange}
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                />
              </div>
              {error ? (
                <div>
                  <p className="error-text">{error.message}</p>
                </div>
              ) : null}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-400 to-yellow-600 opacity-80 bg-opacity-80 text-white"
                >
                  Submit
                </button>
              </div>
              <div>
                <br />
                <em style={{ fontSize: 13 }}>
                  <Link to="/login" className="text-gray-200">
                    Already have an account?
                  </Link>
                </em>
              </div>
            </form>
            <br />
          </div>
        </div>
      </Fade>
      <Footer />
    </>
  );
};

export default Signup;
