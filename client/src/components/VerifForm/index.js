import React, { useState } from "react";
import Auth from "../../utils/auth";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useMutation } from "@apollo/client";
import { ID_UPLOAD } from "../../utils/mutations";

const VerifForm = () => {
  const [formState, setFormState] = useState({ idFront: "", idBack: "" });
  const [submitted, setSubmitted] = useState(false);

  const [idUpload] = useMutation(ID_UPLOAD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      fileUploadHandler();

      const protocol = "https";
      const host = "firebasestorage.googleapis.com/";
      const bucket = "paradise-hemp-imgbucket";
      const dir = "idphotos";

      const { idFront, idBack } = formState;

      const variables = {
        idFront: `${protocol}://${host}v0/b/${bucket}.appspot.com/o/${dir}%2F${idFront.name}?alt=media`,
        idBack: `${protocol}://${host}v0/b/${bucket}.appspot.com/o/${dir}%2F${idBack.name}?alt=media`,
      };

      console.log(variables);

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
      setSubmitted(true)
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormState({ ...formState, [event.target.name]: file });
  };

  const fileUploadHandler = async () => {
    const idFrontRef = ref(storage, `idphotos/${formState.idFront.name}`);
    const idBackRef = ref(storage, `idphotos/${formState.idBack.name}`);

    const idFrontUpload = uploadBytes(idFrontRef, formState.idFront);
    const idBackUpload = uploadBytes(idBackRef, formState.idBack);

    await Promise.all([idFrontUpload, idBackUpload]).then((res) => {
      console.log(res);
    });
  };

  if (!Auth.isVerified() && !submitted) {
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
  } else if(submitted) {
    return <div> Submitted, Please Wait for Review! </div>;
  } else {
    return <div>Your account has already been verified!</div>;
  }
};

export default VerifForm;
