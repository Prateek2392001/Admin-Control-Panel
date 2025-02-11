import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Header from "../Categories/Header/Header";

const Dashboard = () => {
  return (
    <>
      <div className="sidebar">
        <div className="d-flex flex-row">
          <img src="./public/logo-icon.png" alt="Logo" className="logo-image" />
          <h1 className="logo">Snacked</h1>
        </div>
        <hr />
        <ul className="menu">
          <li className="menu-item">
            <Link to="/Product" className="icon">
              <i className="bi bi-archive mx-2 fw-bold"></i>
              <span>Product</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/categories" className="icon">
              <i className="bi bi-tags mx-2 fw-bold"></i>
              <span>Categories</span>
            </Link>
          </li>
        </ul>
      </div>
      <Header />
    </>
  );
};

export default Dashboard;
