import React, { useState } from "react";
import Auth from "../../utils/auth";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useMutation } from "@apollo/client";
import { ID_UPLOAD } from "../../utils/mutations";
import Jumbotron from "../Jumbotron";
import { v4 as uuidv4 } from "uuid";

const VerifForm = (props) => {
  const [formState, setFormState] = useState({ idFront: "", idBack: "" });

  const [idUpload] = useMutation(ID_UPLOAD);
  const uniqueId = uuidv4();

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
        idFront: `${protocol}://${host}v0/b/${bucket}.appspot.com/o/${dir}%2F${uniqueId}-${idFront.name}?alt=media`,
        idBack: `${protocol}://${host}v0/b/${bucket}.appspot.com/o/${dir}%2F${uniqueId}-${idBack.name}?alt=media`,
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
    const idFrontUpload = uploadBytes(idFrontRef, formState.idFront);
    const idBackUpload = uploadBytes(idBackRef, formState.idBack);

    await Promise.all([idFrontUpload, idBackUpload]).then((res) => {
      window.location.assign("/dashboard");
    });
  };

  if (!Auth.isVerified() && props.data?.user.isIdSubmitted === false) {
    return (
<>
  <div className="container borderwrap" style={{ minHeight: "35vh" }}>
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
          type="file"
          accept="image/*"
          name="idFront"
          onChange={handleImageChange}
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
        />
      </div>
      <div className="flex flex-col my-2">
        <label htmlFor="idBack" className="mb-1">
          ID Back:
        </label>
        <input
          type="file"
          accept="image/*"
          name="idBack"
          onChange={handleImageChange}
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
        />
      </div>
      <div className="flex justify-end">
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
  <div />
</>
    );
  } else if (props.data?.user.isIdSubmitted) {
    return (
      <div style={{ maxHeight: "20vh" }}>
        <Jumbotron>
          <h2> Submitted! </h2>
          <h4>Please wait for review! </h4>
        </Jumbotron>
      </div>
    );
  } else {
    return <div>Your account has already been verified!</div>;
  }
};

export default VerifForm;
