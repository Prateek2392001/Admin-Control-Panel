import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Example data to search through
  const items = ["Pizza", "Burger", "Pasta", "Sandwich", "Snacks"];

  // Filtered list based on search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="header-container ">
      <div className="header-left shadow">
        {/* Search Section */}
        <div className="search-section">
          <input
            type="text"
            placeholder="Type here to search"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Display Search Results */}
        {searchTerm && (
          <div className="search-results">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={index} className="search-item">
                  {item}
                </div>
              ))
            ) : (
              <div className="no-results">No results found</div>
            )}
          </div>
        )}

        <ul className="navbar-nav ms-auto">
          <li
            className="text-white border mb-2 mr-3 p-2 shadow logout-item"
            style={{ cursor: "pointer" }}
            onClick={() => {
              Cookies.remove("AdminControlToken");
              navigate("/signin");
            }}
          >
            <span className="text-dark d-flex align-items-center mb-1 ">
              <i className="bi bi-door-open me-2 fw-bold shadow"></i>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
