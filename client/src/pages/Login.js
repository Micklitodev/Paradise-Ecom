import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";

function Login(props) {
  Redirector.checkTokens();
  useScrollHelper();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <Nav />
      <div className="mt-40 mb-40">
        <div
          className="container bg-black bg-opacity-40 borderwrap"
          style={{ minHeight: "60vh" }}
        >
          <h2 className="text-2xl font-semibold">Login</h2>
          <form
            style={{ maxWidth: 300 }}
            onSubmit={handleFormSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex flex-col my-2">
              <label htmlFor="email" className="mb-1">
                Email address:
              </label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
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
                id="pwd"
                onChange={handleChange}
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              />
            </div>
            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-400 bg-opacity-80 text-black"
              >
                Submit
              </button>
            </div>
            <div>
              <br />
              <em style={{ fontSize: 13 }}>
                <Link to="/signup" className="text-gray-300">
                  Don't have an account?
                </Link>
              </em>
              <br />
              <em style={{ fontSize: 13 }}>
                <Link to="/resetlink" className="text-gray-300">
                  Forgot username or password?
                </Link>
              </em>
            </div>
          </form>
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
