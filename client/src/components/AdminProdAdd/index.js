import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import React, { useState, useRef } from "react";

const AdminProdAdd = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const [addProduct] = useMutation(ADD_PRODUCT);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    image: "",
    price: "",
    quantity: "",
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
    const imageRef = ref(storage, `images/${formData.image.name}`);
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
          fileUploadHandler();
        }
        const protocol = "https";
        const host = "firebasestorage.googleapis.com/";
        const bucket = "paradise-hemp-imgbucket";

        const { name, category, description, image, price, quantity } =
          formData;

        const variables = {
          name,
          category,
          description,
          image: `${protocol}://${host}v0/b/${bucket}.appspot.com/o/images%2F${image.name}?alt=media`,
          price: parseFloat(price),
          quantity: parseInt(quantity),
        };

        const { data } = await addProduct({
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
          name: "",
          category: "",
          description: "",
          image: "",
          price: "",
          quantity: "",
        });
        setPreviewImage(null);
        window.location.assign("/manageproducts");
      }
    }
  };

  return (
    <>
      <div className="borderwrap container">
        <h3> Add Product </h3>
        <br />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4"
        >
          <div className="flex-row space-between my-2">
            <label htmlFor="name">Product Name:</label>
            <input
              label="name"
              name="name"
              placeholder="product name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex-row space-between my-2">
            <label htmlFor="category">Category:</label>
            <select
              name="category"
              onChange={handleInputChange}
              value={formData.category}
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
            </select>
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="price">Price:</label>
            <input
              label="price"
              name="price"
              placeholder="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="quanitity">Quantity:</label>
            <input
              label="quantity"
              name="quantity"
              placeholder="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="image">Image File:</label>
            <button
              style={{ width: 177 }}
              type="button"
              onClick={handleImageUploadClick}
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

            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                style={{ width: "400px", height: "auto" }}
              />
            )}
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="description">Description:</label>
            <textarea
              label="description"
              name="description"
              cols="60"
              rows="10"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
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
              variant="success"
              width="w-fit"
            >
              Create Product
            </button>
          </div>
        </form>
        <br />
      </div>
    </>
  );
};

export default AdminProdAdd;
