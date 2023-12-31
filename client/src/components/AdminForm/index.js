import { useMutation } from "@apollo/client";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ADD_PRODUCT, ADMIN_UPDATE_PRODUCT } from "../../utils/mutations";

const AdminForm = ({ action, productData, onSubmitSuccess, displayModal }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const uniqueId = uuidv4();

  const [addProduct] = useMutation(ADD_PRODUCT);
  const [adminUpdateProduct] = useMutation(ADMIN_UPDATE_PRODUCT);

  const [formData, setFormData] = useState({
    name: "",
    cloverId: "",
    category: "",
    description: "",
    image: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (action === "update" && productData) {
      setFormData({
        name: productData.name,
        cloverId: productData.cloverId,
        category: productData.category.name,
        description: productData.description,
        image: productData.image,
        price: productData.price,
        quantity: productData.quantity,
      });
      setPreviewImage(productData.image);
    }
  }, [action, productData]);

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
    await uploadBytes(imageRef, formData.image);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
  };

  const handleImageUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let imageUrl = formData.image;

    if (formData.name) {
      try {
        if (formData.image && formData.image instanceof File) {
          imageUrl = await fileUploadHandler();
        }

        const { name, cloverId, category, description, price, quantity } =
          formData;

        const variables = {
          name,
          cloverId,
          category,
          description,
          image: imageUrl,
          price: parseFloat(price),
          quantity: parseInt(quantity),
        };

        if (action === "add") {
          const { data } = await addProduct({
            variables,
          });

          if (!data) {
            throw new Error("Something went wrong while adding a product!");
          }
        } else if (action === "update" && productData && productData.id) {
          variables.id = productData.id;

          const { data } = await adminUpdateProduct({
            variables,
          });

          if (!data) {
            throw new Error("Something went wrong while updating the product!");
          }
        }

        onSubmitSuccess();
      } catch (err) {
        console.error(err);
      } finally {
        setFormData({
          name: "",
          cloverId: "",
          category: "",
          description: "",
          image: "",
          price: "",
          quantity: "",
        });
        setPreviewImage(null);
        window.location.reload();
      }
    }
  };

  return (
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
            backdropFilter: displayModal ? "blur(20px)" : "none",
          }}
        >
          <div style={{ width: "auto", margin: "6rem auto", maxWidth: 750 }}>
            <div
              style={{
                border: "none",
                borderRadius: "10px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                width: "full",
                backgroundColor: "rgba(255,255,255, .1)",
                outline: "none",
                focus: "outline-none",
                boxShadow: "0 0 1rem rgba(220, 220, 220, 0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "between",
                  padding: "1.25rem",
                  borderBottom: "1px solid rgba(246, 246, 246, 0.5)",
                  borderRadius: "t-lg",
                }}
              >
                <h3
                  className="container"
                  style={{
                    marginLeft: "48px",
                  }}
                >
                  {action === "update" ? "Update Product" : "Add Product"}
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
                  onClick={() => displayModal(false)}
                >
                  <span
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
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
              <div
                className=" container p-4"
                style={{
                  maxWidth: "1020px",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <br />
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
                      placeholder="Product Name"
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
                      placeholder="cloverId"
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
                      className="w-full py-1 px-4 border rounded text-black"
                    >
                      <option value="">Select a category</option>
                      <option value="Edible">Edible</option>
                      <option value="Flower">Flower</option>
                      <option value="Pens">Pens</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Hookah">Hookah</option>
                      <option value="Glass">Glass</option>
                      <option value="CBD">CBD</option>
                      <option value="Nootropics">Nootropics</option>
                      <option value="Batteries">Batteries</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-4 w-full">
                    <label htmlFor="price" className="w-full">
                      Price:
                    </label>
                    <input
                      label="price"
                      name="price"
                      placeholder="Price"
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
                      placeholder="Quantity"
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
                      placeholder="Product Description"
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
                        className="py-1 bg-red-400 opacity-80 text-white rounded hover:bg-blue-500"
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
                      disabled={
                        !formData.name ||
                        !formData.category ||
                        !formData.price ||
                        !formData.quantity ||
                        !formData.image ||
                        !formData.description
                      }
                      type="submit"
                      className={`py-2 bg-gradient-to-r from-red-400 to-yellow-600 opacity-80 text-white rounded`}
                    >
                      {action === "update" ? "Update Product" : "Add Product"}
                    </button>
                  </div>
                </form>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  padding: "1.5rem",
                  borderTop: "1px solid rgba(246, 246, 246, 0.5)",
                  borderRadius: "b-lg",
                }}
              >
                <button
                  style={{
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
                  onClick={() => displayModal(false)}
                  className="bg-red-500 opacity-70 text-white"
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
  );
};

export default AdminForm;
