import React, { useState } from "react";
import Auth from "../../utils/auth";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useMutation } from "@apollo/client";
import { ID_UPLOAD } from "../../utils/mutations";
import Jumbotron from "../Jumbotron";
import { v4 as uuidv4 } from "uuid";

const VerifForm = (props) => {
  const [formState, setFormState] = useState({ idFront: "", idBack: "" });
  const [idUpload, { error }] = useMutation(ID_UPLOAD);
  const uniqueId = uuidv4();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
     const urls = await fileUploadHandler();
      console.log(urls)

      const variables = {
        idFront: `${urls.idFrontUrl}`,
        idBack: `${urls.idBackUrl}`,
      };

      const { data } = await idUpload({
        variables,
      });

      if (!data) {
        throw new Error("Something went wrong!");
      }

      console.log(formState);
    } catch (e) {
      console.log(e);
    } finally {
      setFormState({ idFront: "", idBack: "" });
      window.location.reload()
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormState({ ...formState, [event.target.name]: file });
  };

  const fileUploadHandler = async () => {
    const idFrontRef = ref(
      storage,
      `idphotos/${uniqueId}-${formState.idFront.name}`
    );
    const idBackRef = ref(
      storage,
      `idphotos/${uniqueId}-${formState.idBack.name}`
    );
    await uploadBytes(idFrontRef, formState.idFront);
    await uploadBytes(idBackRef, formState.idBack);

    const idFrontUrl = await getDownloadURL(idFrontRef);
    const idBackUrl = await getDownloadURL(idBackRef);

    return { idFrontUrl, idBackUrl }
  };

  const handleUploadButtonClick = (event, fieldName) => {
    event.preventDefault();
    const fileInput = document.getElementById(fieldName);
    if (fileInput) {
      fileInput.click();
    }
  };

  if (!Auth.isVerified() && props.data?.user.isIdSubmitted === false) {
    return (
      <>
        <div
          className="container borderwrap bg-white bg-opacity-10"
          style={{ minHeight: "35vh" }}
        >
          <h2 className="text-2xl font-semibold">Verify ID</h2>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex flex-col my-2">
              <label htmlFor="idFront" className="mb-1">
                ID Front:
              </label>
              <input
                id="idFront"
                type="file"
                accept="image/*"
                name="idFront"
                onChange={handleImageChange}
                className="hidden"
              />
              <button
                onClick={(e) => handleUploadButtonClick(e, "idFront")}
                className={`py-1 bg-red-400 ${
                  formState.idFront ? "bg-opacity-40" : "bg-opacity-80"
                } text-white`}
                style={{ height: 62 }}
              >
                {formState.idFront ? "Uploaded!" : "Select ID Front"}
              </button>
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="idBack" className="mb-1">
                ID Back:
              </label>
              <input
                id="idBack"
                type="file"
                accept="image/*"
                name="idBack"
                onChange={handleImageChange}
                className="hidden"
              />
              <button
                onClick={(e) => handleUploadButtonClick(e, "idBack")}
                className={`py-1 bg-red-400 ${
                  formState.idBack ? "bg-opacity-40" : "bg-opacity-80"
                } text-white`}
                style={{ height: 62 }}
              >
                {formState.idBack ? "Uploaded!" : "Select ID Back"}
              </button>
            </div>
            <br />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!formState.idFront || !formState.idBack}
                className="py-5 px-16 bg-gradient-to-r from-red-400 to-yellow-600 opacity-80 text-white"
              >
                Submit
              </button>
            </div>
          </form>
          <br />
        </div>
        <div />
      </>
    );
  } else if (props.data?.user.isIdSubmitted) {
    return (
      <>
        {error ? (
          <>
            <div style={{ maxHeight: "40vh" }}>
              <Jumbotron>
                <h2> Error </h2>
                <h4> Failed please reload and try again. </h4>
              </Jumbotron>
            </div>
          </>
        ) : (
          <>
            <div style={{ maxHeight: "50vh" }}>
              <Jumbotron>
                <h2> Submitted! </h2>
                <h4>Please wait for review! </h4>
              </Jumbotron>
            </div>
          </>
        )}
      </>
    );
  }
};

export default VerifForm;
