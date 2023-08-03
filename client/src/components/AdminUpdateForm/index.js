import { useMutation } from "@apollo/client";
import { ADMIN_UPDATE_PRODUCT } from "../../utils/mutations";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const AdminUpdateForm = (props) => {
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const uniqueId = uuidv4();

  const [adminUpdateProduct] = useMutation(ADMIN_UPDATE_PRODUCT);

  const [formData, setFormData] = useState({
    name: props.name,
    cloverId: props.cloverId,
    category: props.category,
    description: props.description,
    image: props.image,
    price: props.price,
    quantity: props.quantity,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, image: file });
    setPreviewImage(URL.createObjectURL(file));
  };

  const fileUploadHandler = async () => {
    const imageRef = ref(storage, `images/${uniqueId}-${formData.image.name}`);
    await uploadBytes(imageRef, formData.image).then((res) => {
      console.log(res);
    });
  };

  const handleImageUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.name) {
      try {
        if (formData.image) {
          await fileUploadHandler();
        }
        const protocol = "https";
        const host = "firebasestorage.googleapis.com/";
        const bucket = "paradise-hemp-imgbucket";

        const {
          name,
          cloverId,
          category,
          description,
          image,
          price,
          quantity,
        } = formData;

        const variables = {
          name,
          cloverId,
          category,
          description,
          image: `${protocol}://${host}v0/b/${bucket}.appspot.com/o/images%2F${uniqueId}-${image.name}?alt=media`,
          price: parseFloat(price),
          quantity: parseInt(quantity),
        };

        const { data } = await adminUpdateProduct({
          variables,
        });

        if (!data) {
          throw new Error("Something went wrong!");
        }

        console.log(data);
      } catch (err) {
        console.error(err);
      } finally {
        setFormData({
          name: props.name,
          cloverId: props.cloverId,
          category: props.category,
          description: props.description,
          image: props.image,
          price: props.price,
          quantity: props.quantity,
        });
        setPreviewImage(null);
        window.location.assign("/manageproducts");
      }
    }
  };

  return (
    <>
      <>
        <div style={{ display: "block" }}>
          <div
            style={{
              overflowX: "hidden",
              overflowY: "auto",
              position: "fixed",
              inset: "0",
              zIndex: "50",
              outline: "none",
              focus: "outline-none",
            }}
          >
            <div style={{ width: "auto", margin: "6rem auto", maxWidth: 750 }}>
              <div
                style={{
                  border: "none",
                  borderRadius: "10px",
                  boxShadow: "lg",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  width: "full",
                  backgroundColor: "white",
                  outline: "none",
                  focus: "outline-none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "between",
                    padding: "1.25rem",
                    borderBottom: "1px solid rgba(156, 163, 175, 0.5)",
                    borderRadius: "t-lg",
                  }}
                >
                  <h3
                    className="container"
                    style={{
                      marginLeft: "48px",
                    }}
                  >
                    Update Product: {props.name}
                  </h3>
                  <button
                    style={{
                      padding: "0.25rem",
                      marginLeft: "auto",
                      backgroundColor: "transparent",
                      border: "none",
                      color: "black",
                      opacity: "0.5",
                      float: "right",
                      fontSize: "1.875rem",
                      lineHeight: "none",
                      fontWeight: "bold",
                      outline: "none",
                      focus: "outline-none",
                    }}
                    onClick={() => props.displayModal(false)}
                  >
                    <span
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                        opacity: "0.5",
                        height: "1.5rem",
                        width: "1.5rem",
                        fontSize: "1.25rem",
                        display: "block",
                        outline: "none",
                        focus: "outline-none",
                      }}
                    >
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <br />
                <div className="flex justify-center">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center space-y-4"
                  >
                    <div className="flex flex-col space-y-4 w-full">
                      <label htmlFor="name" className="w-full">
                        Product Name:
                      </label>
                      <input
                        label="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full py-2 px-4 border rounded"
                      />
                    </div>

                    <div className="flex flex-col space-y-4 w-full">
                      <label htmlFor="cloverId" className="w-full">
                        CloverId:
                      </label>
                      <input
                        label="cloverId"
                        name="cloverId"
                        value={formData.cloverId}
                        onChange={handleInputChange}
                        className="w-full py-2 px-4 border rounded"
                      />
                    </div>

                    <div className="flex flex-col space-y-4 w-full">
                      <label htmlFor="category" className="w-full">
                        Category:
                      </label>
                      <select
                        name="category"
                        onChange={handleInputChange}
                        value={formData.category}
                        className="w-full py-1 px-4 border rounded"
                      >
                        <option value={props.category}>{props.category}</option>
                        <option value="Edible">Edible</option>
                        <option value="Flower">Flower</option>
                        <option value="Pens">Pens</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Hookah">Hookah</option>
                        <option value="Glass">Glass</option>
                        <option value="CBD">CBD</option>
                        <option value="Nootropics">Nootropics</option>
                      </select>
                    </div>

                    <div className="flex flex-col space-y-4 w-full">
                      <label htmlFor="price" className="w-full">
                        Price:
                      </label>
                      <input
                        label="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full py-2 px-4 border rounded"
                      />
                    </div>

                    <div className="flex flex-col space-y-4 w-full">
                      <label htmlFor="quantity" className="w-full">
                        Quantity:
                      </label>
                      <input
                        label="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full py-2 px-4 border rounded"
                      />
                    </div>

                    <div className="flex flex-col space-y-4 w-full">
                      <label htmlFor="description" className="w-full">
                        Description:
                      </label>
                      <textarea
                        label="description"
                        name="description"
                        cols="60"
                        rows="10"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full py-2 px-4 border rounded"
                      />
                    </div>

                    <div className="flex flex-col space-y-4 w-full">
                      <label htmlFor="image">Image File:</label>
                      <div className="flex flex-col space-y-4">
                        <button
                          type="button"
                          onClick={handleImageUploadClick}
                          className="py-1 bg-blue-400 text-white rounded hover:bg-blue-500"
                        >
                          Upload Image
                        </button>
                        <input
                          type="file"
                          accept="image/*"
                          name="image"
                          ref={fileInputRef}
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                    {previewImage && (
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-full py-2 px-4 border rounded"
                      />
                    )}

                    <br />

                    <div className="flex-row flex-end">
                      <button
                        type="submit"
                        className="py-2 bg-green-500 text-white rounded"
                      >
                        Update Product
                      </button>
                    </div>
                  </form>
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    padding: "1.5rem",
                    borderTop: "1px solid rgba(156, 163, 175, 0.5)",
                    borderRadius: "b-lg",
                  }}
                >
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "rgb(100, 100, 100)",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      padding: "0.75rem 1.5rem",
                      fontSize: "0.875rem",
                      outline: "none",
                      focus: "outline-none",
                      marginRight: "0.25rem",
                      marginBottom: "0.25rem",
                      transition: "all 0.15s ease-linear",
                    }}
                    type="button"
                    onClick={() => props.displayModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              opacity: "0.25",
              position: "fixed",
              inset: "0",
              zIndex: "40",
              backgroundColor: "black",
            }}
          ></div>
        </div>
      </>
    </>
  );
};

export default AdminUpdateForm;
