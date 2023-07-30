import React, { useState } from "react";
import Redirector from "../utils/redirector";
import useScrollHelper from "../utils/scrollhelper";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
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

  const [authResetProvider] = useMutation(AUTH_RESET_PROVIDER);
  const [authResetValidator] = useMutation(AUTH_RESET_VALIDATOR);

  const error = false;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await authResetProvider({
        variables: { ...formState },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitted(true);
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
      } else {
        setChangeReject(true);
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
      <Nav />
      <br />
      <br />
      {ChangeReject ? (
        <>
          <Jumbotron>
            <h2> Password Reset Failed! </h2>
            <p> Redirecting... </p>
            {setTimeout(() => {
              window.location.assign("/login");
            }, 3000)}
          </Jumbotron>
        </>
      ) : (
        <>
          {" "}
          {changeSuccess ? (
            <>
              <Jumbotron>
                <h2> Password Successfully Changed! </h2>
                <p> Redirecting... </p>
                {setTimeout(() => {
                  window.location.assign("/login");
                }, 3000)}
              </Jumbotron>
            </>
          ) : (
            <>
              {!submitted ? (
                <div
                  className="container borderwrap"
                  style={{ minHeight: "60vh" }}
                >
                  <h2>Reset Password</h2>
                  <p> Please enter your email for your account. </p>
                  <form style={{ maxWidth: 300 }} onSubmit={handleFormSubmit}>
                    <div className="flex-row space-between my-2">
                      <label htmlFor="email">Email address:</label>
                      <input
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                    {error ? (
                      <div>
                        <p className="error-text">
                          The provided credentials are incorrect
                        </p>
                      </div>
                    ) : null}
                    <div className="flex-row flex-end">
                      <button type="submit" disabled={!formState.email}>
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
                  className="container borderwrap"
                  style={{ minHeight: "60vh" }}
                >
                  <h2>Reset Password</h2>
                  <p style={{ textAlign: "center" }}>
                    {" "}
                    Please enter the 6 digit code from the email address that
                    you provided. If you do not see and email from us, Please
                    check your spam folder, if you still cannot find the email,
                    the email did not relate to an account.{" "}
                    <a href="/login"> try again </a>{" "}
                  </p>
                  <form
                    style={{ maxWidth: 300 }}
                    onSubmit={handleSecuritySubmit}
                  >
                    <div className="flex-row space-between my-2">
                      <label htmlFor="newPass">New Password:</label>
                      <input
                        name="newPass"
                        value={codeInput.newPass}
                        type="password"
                        onChange={handleSecurityChange}
                      />
                    </div>
                    <div className="flex-row space-between my-2">
                      <label htmlFor="securityCode">Security Code:</label>
                      <input
                        name="securityCode"
                        value={codeInput.securityCode}
                        onChange={handleSecurityChange}
                      />
                    </div>
                    {error ? (
                      <div>
                        <p className="error-text">
                          The provided credentials are incorrect
                        </p>
                      </div>
                    ) : null}
                    <div className="flex-row flex-end">
                      <button type="submit" disabled={!codeInput.securityCode}>
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

      <br />
      <br />
      <Footer />
    </>
  );
};

export default ResetLink;
