import React, { useState } from "react";
import Auth from "../../utils/auth";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
// import { useMutation } from "@apollo/client";
// import { UPLOAD_ID } from "../../utils/mutations";

const VerifForm = () => {
  const [formState, setFormState] = useState({ idFront: "", idBack: "" });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      fileUploadHandler();

      const protocol = "https";
      const host = "firebasestorage.googleapis.com/";
      const bucket = "paradise-hemp-imgbucket";
      const dir = "idphotos";

      const { idFront } = formState;

      const variables = {
        idFront: `${protocol}://${host}v0/b/${bucket}.appspot.com/o/${dir}%2F${idFront.name}?alt=media`,
      };

      console.log(variables)

      // const { data } = await uploadId({
      //   variables,
      // });

      // if (!data) {
      //   throw new Error("Something went wrong!");
      // }

      console.log(formState);
    } catch (e) {
      console.log(e);
    } finally {
      setFormState({ idFront: "", idBack: "" });
      // window.location.assign("/dashboard");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormState({ ...formState, [event.target.name]: file });
  };

  const fileUploadHandler = async () => {
    const imageRef = ref(storage, `idphotos/${formState.idFront.name}`);
    await uploadBytes(imageRef, formState.idFront).then((res) => {
      console.log(res);
    });
  };

  if (!Auth.isVerified()) {
    return (
      <>
        <div className="container my-1">
          <h2>Verify ID</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="idFront">ID Front:</label>
              <input
                type="file"
                accept="image/*"
                name="idFront"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="idBack">ID Back:</label>
              <input
                type="file"
                accept="image/*"
                name="idBack"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex-row flex-end">
              <button
                type="submit"
                disabled={!formState.idFront || !formState.idBack}
              >
                Submit
              </button>
            </div>
          </form>
          <br />
        </div>
      </>
    );
  } else {
    return <div>Your account has already been verified.</div>;
  }
};

export default VerifForm;
