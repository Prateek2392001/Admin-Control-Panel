import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./Component/Signin/SignIn.jsx";
import ProductTable from "./Component/Product/ProductTable";
import App from "./App.jsx";
import CategoriesPage from "./Component/Categories/CategoriesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProductTable /> },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />;
  </RouterProvider>
);
