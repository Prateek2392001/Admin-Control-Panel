import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Dashboard from "./Component/Dashboard/Dashboard";
import CategoriesPage from "./Component/Categories/CategoriesPage";
import ProductTable from "./Component/Product/ProductTable";
import Header from "./Component/Categories/Header/Header";
import Cookies from "js-cookie";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./Component/Signin/SignIn";

const App = () => {
  const Token = Cookies.get("AdminControlToken");

  return (
    <>
      {Token ? (
        <>
          <Dashboard />
          <Outlet />
        </>
      ) : (
        <Navigate to={"/signin"} />
      )}
    </>
  );
};

export default App;
