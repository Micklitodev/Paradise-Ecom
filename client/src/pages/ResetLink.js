import React, { useState } from "react";
import { Link } from "react-router-dom";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import { useMutation } from "@apollo/client";
import { AUTH_RESET_PROVIDER } from "../utils/mutations";
import { AUTH_RESET_VALIDATOR } from "../utils/mutations";

const ResetLink = () => {
  Redirector.checkTokens();
  useScrollHelper();
  const [formState, setFormState] = useState({ email: "" });
  const [codeInput, setCodeInput] = useState({ securityCode: "", newPass: "" });
  const [submitted, setSubmitted] = useState(false);
  const [changeSuccess, setChangeSuccess] = useState(false);
  const [ChangeReject, setChangeReject] = useState(false);

  const [authResetProvider, { error }] = useMutation(AUTH_RESET_PROVIDER);
  const [authResetValidator, { error: error2 }] =
    useMutation(AUTH_RESET_VALIDATOR);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await authResetProvider({
        variables: { ...formState },
      });

      setSubmitted(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSecuritySubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await authResetValidator({
        variables: { ...codeInput, ...formState },
      });

      if (data.authResetValidator.message === "success") {
        setChangeSuccess(true);
        console.log("accepted");
      }

      if (data.authResetValidator.message === "rejected") {
        setChangeReject(true);
        console.log("rejected");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSecurityChange = (event) => {
    const { name, value } = event.target;
    setCodeInput({
      ...codeInput,
      [name]: value,
    });
  };

  return (
    <>
      <div className="mt-40 mb-40">
        {ChangeReject ? (
          <>
            <Jumbotron className="text-center">
              <h2 className="text-2xl font-semibold">Password Reset Failed!</h2>
              <p>Redirecting...</p>
              {setTimeout(() => {
                window.location.assign("/login");
              }, 3000)}
            </Jumbotron>
          </>
        ) : (
          <>
            {changeSuccess ? (
              <>
                <Jumbotron className="text-center">
                  <h2 className="text-2xl font-semibold">
                    Password Successfully Changed!
                  </h2>
                  <p>Redirecting...</p>
                  {setTimeout(() => {
                    window.location.assign("/login");
                  }, 3000)}
                </Jumbotron>
              </>
            ) : (
              <>
                {!submitted ? (
                  <div
                    className="container bg-white bg-opacity-10 borderwrap"
                    style={{ minHeight: "60vh" }}
                  >
                    <h2 className="text-2xl font-semibold">Reset Password</h2>
                    <p> Please enter your email for your account. </p>
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
                          placeholder="email@example.com"
                          name="email"
                          type="email"
                          id="email"
                          value={formState.email}
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
                          disabled={!formState.email}
                          className="bg-gradient-to-r from-red-400 to-yellow-600 opacity-80 text-white"
                        >
                          Submit
                        </button>
                      </div>
                      <div>
                        <br />
                      </div>
                    </form>
                    <br />
                  </div>
                ) : (
                  <div
                    className="container bg-white bg-opacity-10 borderwrap"
                    style={{ minHeight: "60vh" }}
                  >
                    <h2 className="text-2xl font-semibold">Reset Password</h2>
                    <p className="text-center" style={{ maxWidth: "45%" }}>
                      {" "}
                      Please enter the 6-digit code from the email address that
                      you provided. If you do not see an email from us, please
                      check your spam folder. If you still cannot find the
                      email, the email did not relate to an account.{" "}
                      <Link
                        to="/login"
                        className="text-red-500 hover:underline"
                      >
                        Try again!
                      </Link>{" "}
                    </p>
                    <form
                      style={{ maxWidth: 300 }}
                      onSubmit={handleSecuritySubmit}
                      className="flex flex-col items-center space-y-4"
                    >
                      <div className="flex flex-col my-2">
                        <label htmlFor="newPass" className="mb-1">
                          New Password:
                        </label>
                        <input
                          name="newPass"
                          value={codeInput.newPass}
                          type="password"
                          placeholder="Password88!"
                          onChange={handleSecurityChange}
                          className="border border-gray-300 px-3 py-2 rounded-md w-full"
                        />
                      </div>
                      <div className="flex flex-col my-2">
                        <label htmlFor="securityCode" className="mb-1">
                          Security Code:
                        </label>
                        <input
                          name="securityCode"
                          value={codeInput.securityCode}
                          placeholder="541-323"
                          onChange={handleSecurityChange}
                          className="border border-gray-300 px-3 py-2 rounded-md w-full"
                        />
                      </div>
                      {error2 ? (
                        <div>
                          <p className="error-text">{error2.message}</p>
                        </div>
                      ) : null}
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={!codeInput.securityCode}
                          className="bg-gradient-to-r from-red-400 to-yellow-600 opacity-80 bg-opacity-80 text-black"
                        >
                          Submit
                        </button>
                      </div>
                      <div>
                        <br />
                      </div>
                    </form>
                    <br />
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ResetLink;
