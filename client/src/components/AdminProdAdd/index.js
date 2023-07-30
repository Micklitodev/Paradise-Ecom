import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';


const AdminProdAdd = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const uniqueId = uuidv4()

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

        const { name, category, description, image, price, quantity } =
          formData;

        const variables = {
          name,
          category,
          description,
          image: `${protocol}://${host}v0/b/${bucket}.appspot.com/o/images%2F${uniqueId}-${image.name}?alt=media`,
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
      <div className="borderwrap container p-4">
        <h3 className="text-2xl font-bold">Add Product</h3>
        <br />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4"
        >
          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <label htmlFor="name" className="w-full md:w-1/4">
              Product Name:
            </label>
            <input
              label="name"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full md:w-3/4 py-2 px-4 border rounded"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <label htmlFor="category" className="w-full md:w-1/4">
              Category:
            </label>
            <select
              name="category"
              onChange={handleInputChange}
              value={formData.category}
              className="w-full md:w-3/4 py-2 px-4 border rounded"
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

          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <label htmlFor="price" className="w-full md:w-1/4">
              Price:
            </label>
            <input
              label="price"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full md:w-3/4 py-2 px-4 border rounded"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <label htmlFor="quantity" className="w-full md:w-1/4">
              Quantity:
            </label>
            <input
              label="quantity"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full md:w-3/4 py-2 px-4 border rounded"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <label htmlFor="description" className="w-full md:w-1/4">
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
              className="w-full md:w-3/4 py-2 px-4 border rounded"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <label htmlFor="image" className="w-full md:w-1/4">
              Image File:
            </label>
            <button
              type="button"
              onClick={handleImageUploadClick}
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Upload Image
            </button>
            <input
              type="file"
              accept="image/*"
              name="image"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />

            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="w-64 mt-4"
              />
            )}
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
              className={`py-2 px-4 bg-green-500 text-white rounded ${
                !formData.name ||
                !formData.category ||
                !formData.price ||
                !formData.quantity ||
                !formData.image ||
                !formData.description
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-green-600'
              }`}
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminProdAdd;
