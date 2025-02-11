import React, { useState } from "react";
import "./CategoriesPage.css";

const CategoryForm = ({ addCategory }) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.slug && formData.description) {
      addCategory(formData);
      setFormData({ name: "", slug: "", description: "" });
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="category-form">
      <h3>Add Product Category</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Category name"
            onChange={handleChange}
          />
        </label>
        <label>
          Slug
          <input
            type="text"
            name="slug"
            value={formData.slug}
            placeholder="Slug name"
            onChange={handleChange}
          />
        </label>
        <label>
          Parent
          <select name="parent" value={formData.parent} onChange={handleChange}>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
          </select>
        </label>
        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            placeholder="Product Description"
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default CategoryForm;
