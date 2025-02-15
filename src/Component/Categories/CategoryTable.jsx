// import React, { useEffect, useState } from "react";
// import "./CategoriesPage.css";

// const CategoryTable = ({ setCategories }) => {
//   const [categories, setCategoryList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch categories from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(
//           "https://robust.mmrsolutions.co.in/api/product/category/List"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch categories");
//         }
//         const result = await response.json();
//         console.log("API Response:", result);

//         // Ensure categories is an array
//         const categoryData = Array.isArray(result) ? result : result.data || [];
//         setCategoryList(categoryData);
//         setCategories(categoryData);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, [setCategories]);

//   if (loading) return <p>Loading categories...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="category-table">
//       <table>
//         <thead>
//           <tr>
//             <th></th>
//             <th>ID</th>
//             <th>Name</th>
//             {/* <th>Description</th>
//             <th>Slug</th>
//             <th>Order</th>
//             <th>Actions</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((category, index) => (
//             <tr key={index}>
//               <td>
//                 <input type="checkbox" />
//               </td>
//               <td>{category._id}</td>
//               <td>{category.name}</td>
//               {/* <td>{category.description}</td>
//               <td>{category.slug}</td>
//               <td>{category.order}</td> */}
//               <td>
//                 <button onClick={() => alert(`Edit ${category.name}`)}>
//                   Edit
//                 </button>
//                 <button onClick={() => alert(`Delete ${category.name}`)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CategoryTable;

// import React, { useEffect, useState } from "react";
// import "./CategoriesPage.css";

// const CategoryTable = ({ setCategories }) => {
//   const [categories, setCategoryList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const token = "YOUR_AUTH_TOKEN_HERE"; // Replace with the actual token

//   // Fetch categories from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(
//           "https://robust.mmrsolutions.co.in/api/product/category/List"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch categories");
//         }
//         const result = await response.json();

//         // Ensure categories is an array
//         const categoryData = Array.isArray(result) ? result : result.data || [];
//         setCategoryList(categoryData);
//         setCategories(categoryData);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, [setCategories]);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this category?")) {
//       return;
//     }

//     try {
//       const response = await fetch(
//         `https://robust.mmrsolutions.co.in/api/product/deleteProduct/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.ok) {
//         alert("Category deleted successfully");
//         setCategoryList((prev) =>
//           prev.filter((category) => category._id !== id)
//         );
//       } else {
//         const result = await response.json();
//         alert(
//           `Failed to delete category: ${result.message || "Unknown error"}`
//         );
//       }
//     } catch (err) {
//       console.error("Error deleting category:", err);
//       alert("An error occurred while deleting the category.");
//     }
//   };

//   if (loading) return <p>Loading categories...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <div className="category-table">
//         <table>
//           <thead>
//             <tr>
//               <th></th>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((category, index) => (
//               <tr key={index}>
//                 <td>
//                   <input type="checkbox" />
//                 </td>
//                 <td>{category._id}</td>
//                 <td>{category.name}</td>
//                 <td>
//                   <button onClick={() => alert(`Edit ${category.name}`)}>
//                     Edit
//                   </button>
//                   <button onClick={() => handleDelete(category._id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default CategoryTable;

import React, { useEffect, useState } from "react";
import "./CategoriesPage.css";

const CategoryTable = ({ setCategories }) => {
  const [categories, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = "YOUR_AUTH_TOKEN_HERE"; // Replace with a valid token if required

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://robust.mmrsolutions.co.in/api/product/category/List"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const result = await response.json();

        // Ensure categories is an array
        const categoryData = Array.isArray(result.data) ? result.data : [];
        setCategoryList(categoryData);
        setCategories(categoryData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, [setCategories]);

  // Handle Edit Category (Dummy function for now)
  const handleEdit = (category) => {
    const newName = prompt(
      `Edit category name for ${category.name}:`,
      category.name
    );
    if (newName && newName !== category.name) {
      // Update state optimistically
      setCategoryList((prev) =>
        prev.map((cat) =>
          cat._id === category._id ? { ...cat, name: newName } : cat
        )
      );
      alert("Category updated successfully! (Backend update pending)");
    }
  };

  // Handle Delete Category
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) {
      return;
    }

    try {
      const response = await fetch(
        `https://robust.mmrsolutions.co.in/api/product/category/delete/${id}`, // Ensure this is the correct API endpoint
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Category deleted successfully!");
        setCategoryList((prev) =>
          prev.filter((category) => category._id !== id)
        );
      } else {
        const result = await response.json();
        alert(
          `Failed to delete category: ${result.message || "Unknown error"}`
        );
      }
    } catch (err) {
      console.error("Error deleting category:", err);
      alert("An error occurred while deleting the category.");
    }
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="category-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category._id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{category._id}</td>
              <td>{category.name}</td>
              <td>
                <button onClick={() => handleEdit(category)}>Edit</button>
                <button onClick={() => handleDelete(category._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
