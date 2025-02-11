import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddProductModal = ({ show, handleClose, addProduct }) => {
  const [formData, setFormData] = useState({
    productCode: "",
    productName: "",
    quantity: "",
    minQuantity: "",
    madeInIndia: false,
    sustainable: false,
    brand: "",
    mrp: "",
    ourPrice: "",
    description: "",
    color: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://robust.mmrsolutions.co.in/api/product/addProducts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        addProduct({ ...formData, id: result.id || Date.now() });
        alert("Product added successfully!");
      } else {
        alert("Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    } finally {
      setLoading(false);
      handleClose();
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      productCode: "",
      productName: "",
      quantity: "",
      minQuantity: "",
      madeInIndia: false,
      sustainable: false,
      brand: "",
      mrp: "",
      ourPrice: "",
      description: "",
      color: "",
      category: "",
    });
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <div className="card m-4">
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row w-100">
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Product Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="productCode"
                    value={formData.productCode}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Minimum Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="minQuantity"
                    value={formData.minQuantity}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Select Brand</Form.Label>
                  <Form.Control
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>MRP</Form.Label>
                  <Form.Control
                    type="number"
                    name="mrp"
                    value={formData.mrp}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Our Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="ourPrice"
                    value={formData.ourPrice}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Short Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Select Color</Form.Label>
                  <Form.Control
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Add New Category</Form.Label>
                  <Form.Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    <option>Office</option>
                    <option>Drinkware</option>
                    <option>Bags</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Upload Files</Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={handleChange}
                  />
                  //{" "}
                </Form.Group>
              </div>
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Product"}
            </Button>
          </Form>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default AddProductModal;

// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";

// const AddProductModal = ({ show, handleClose, addProduct }) => {
//   const [formData, setFormData] = useState({
//     productCode: "",
//     productName: "",
//     quantity: "",
//     mrp: "",
//     ourPrice: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newProduct = { ...formData, id: Date.now() }; // Ensure unique ID
//     addProduct(newProduct);
//     resetForm();
//     handleClose();
//   };

//   const resetForm = () => {
//     setFormData({
//       productCode: "",
//       productName: "",
//       quantity: "",
//       mrp: "",
//       ourPrice: "",
//     });
//   };

//   return (
//     <Modal show={show} onHide={handleClose} size="lg">
//       <Modal.Header closeButton>
//         <Modal.Title>Add New Product</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>Product Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="productName"
//               value={formData.productName}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Quantity</Form.Label>
//             <Form.Control
//               type="number"
//               name="quantity"
//               value={formData.quantity}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>MRP</Form.Label>
//             <Form.Control
//               type="number"
//               name="mrp"
//               value={formData.mrp}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Our Price</Form.Label>
//             <Form.Control
//               type="number"
//               name="ourPrice"
//               value={formData.ourPrice}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Add New Category</Form.Label>
//             <Form.Select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//             >
//               <option value="">Select Category</option>
//               <option>Office</option>
//               <option>Drinkware</option>
//               <option>Bags</option>
//             </Form.Select>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Image</Form.Label>
//             <Form.Control
//               value={formData.productPicture}
//               type="file"
//               name="productPicture"
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Button type="submit">Add Product</Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default AddProductModal;
