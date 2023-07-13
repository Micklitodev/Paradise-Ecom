import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";


const AdminProdAdd = () => {
  const [previewImage, setPreviewImage] = useState(null);

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

  const fileUploadHandler = () => {
    const imageRef = ref(storage, `images/${formData.image.name}`);
    uploadBytes(imageRef, formData.image).then((res) => {
      console.log(res);
    });
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
            <option value="">Select a category</option>
            <option value="Edible">Edible</option>
            <option value="Flower">Flower</option>
            <option value="Pens">Pens</option>
            <option value="Extras">Extras</option>
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
};

export default AdminProdAdd;
