import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import CategoryForm from "./CategoryForm";
import CategoryTable from "./CategoryTable";
import "./CategoriesPage.css";
import Dashboard from "../Dashboard/Dashboard";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([
    {
      id: "#85462",
      name: "Fashion",
      description: "Some lorem ipsum",
      slug: "/fashion",
      order: 1,
    },
    {
      id: "#63524",
      name: "Electronics",
      description: "Some lorem ipsum",
      slug: "/electronics",
      order: 2,
    },
  ]);

  const addCategory = (newCategory) => {
    const newId = `#${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder = categories.length + 1;
    const updatedCategory = { ...newCategory, id: newId, order: newOrder };
    setCategories([...categories, updatedCategory]);
  };

  return (
    <>
      <Dashboard />
      <div className="categories-page">
        <Breadcrumb />
        <div className="content">
          {/* <CategoryForm addCategory={addCategory} /> */}
          <CategoryTable
            categories={categories}
            setCategories={setCategories}
          />
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
