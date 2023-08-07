import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const AdminProdAdd = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const uniqueId = uuidv4();

  const [addProduct] = useMutation(ADD_PRODUCT);

  const [formData, setFormData] = useState({
    name: "",
    cloverId: "",
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

    let imageUrl;

    if (formData.name) {
      try {
        if (formData.image) {
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
          cloverId: "",
          category: "",
          description: "",
          image: "",
          price: "",
          quantity: "",
        });
        setPreviewImage(null);
        window.location.reload()
      }
    }
  };

  return (
    <>
      <h3 className="text-2xl font-bold">Add Product</h3>
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
              className="py-1 bg-blue-400 bg-opacity-80 text-white rounded hover:bg-blue-500"
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
            className={`py-2 bg-green-400 bg-opacity-80 text-white rounded`}
          >
            Create Product
          </button>
        </div>
      </form>
    </>
  );
};

export default AdminProdAdd;
