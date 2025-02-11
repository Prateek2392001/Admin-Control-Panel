import React, { useState, useEffect } from "react";
import "./ProductTable.css";
import { Button } from "react-bootstrap";
import AddProductModal from "./AddProductModal";
import Dashboard from "../Dashboard/Dashboard";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const API = "https://robust.mmrsolutions.co.in/api/product/All";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
  };

  return (
    <>
      <Dashboard />

      <div className="product-list-container">
        <div className="header-section">
          <div className="filters">
            <select>
              <option>All Categories</option>
              <option>Fashion</option>
              <option>Electronics</option>
            </select>
            <input type="date" />
            <select>
              <option>Status</option>
              <option>Active</option>
              <option>Archived</option>
              <option>Disabled</option>
            </select>
          </div>
          <Button
            variant="primary"
            onClick={handleShowModal}
            className="add-product-btn"
          >
            Add New Product
          </Button>
        </div>
        <div>
          {products.length > 0 ? (
            <table className="product-table">
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price (&)</th>
                  <th>MRP (&)</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.SubCategoryID || product.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <div className="product-info">
                        {product.productPicture?.[0] ? (
                          <img
                            src={product.productPicture[0]}
                            alt={product.productName}
                          />
                        ) : (
                          "No Image"
                        )}
                      </div>
                    </td>
                    <td>{product.productName}</td>
                    <td>{product.CategoryName || product.category}</td>
                    <td>{product.productPrice || product.ourPrice}</td>
                    <td>{product.productMRP || product.mrp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading....</p>
          )}
        </div>

        {/* Add Product Modal */}
        <AddProductModal
          show={showModal}
          handleClose={handleCloseModal}
          addProduct={addProduct}
        />
      </div>
    </>
  );
};

export default ProductTable;
