import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";

import Nav from "../components/Nav";

const ManageProducts = () => {
  const [previewImage, setPreviewImage] = useState(null);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.name) {
      try {
        
        //   const { data } = await createProject({
        //     variables: { input: formData },
        //   });
        //   if (!data) {
        //     throw new Error("Something went wrong!");
        //   }

        console.log(formData);

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
      }
    }
  };

  if (Auth.isAdmin() === true) {
    return (
      <>
        <Nav />
        <br />
        <br />
        <br />
        <div>
          {" "}
          You're authorized to manage products additional checks will be made at
          server level.{" "}
        </div>
        <div className="borderwrap">
          <h1> Add Product </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <input
              label="name"
              name="name"
              placeholder="product name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <select
              name="category"
              onChange={handleInputChange}
              value={formData.category}
            >
              <option value={1}>Edible</option>
              <option value={2}>Flower</option>
              <option value={3}>Pens</option>
              <option value={4}>Extras</option>
            </select>
            <br />
            <br />
            <input
              label="description"
              name="description"
              placeholder="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                style={{ width: "200px", height: "auto" }}
              />
            )}
            <br />
            <br />
            <input
              label="price"
              name="price"
              placeholder="price"
              value={formData.price}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <input
              label="quantity"
              name="quantity"
              placeholder="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
            />
            <br /> <br /> <br />
            <button
              disabled={!formData.name}
              type="submit"
              variant="success"
              width="w-fit"
            >
              Create Product
            </button>
          </form>
          <br />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="center"> Err no auth to acess this page. </div>
      </>
    );
  }
};

export default ManageProducts;
