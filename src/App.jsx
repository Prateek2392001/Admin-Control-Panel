import React from "react";
import { BrowserRouter as Router, Navigate, Outlet } from "react-router-dom";

import Dashboard from "./Component/Dashboard/Dashboard";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
