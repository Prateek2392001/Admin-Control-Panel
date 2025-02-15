import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./Component/Signin/SignIn.jsx";
import ProductTable from "./Component/Product/ProductTable";
import App from "./App.jsx";
import CategoriesPage from "./Component/Categories/CategoriesPage.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import Profile from "./components/Profile.jsx";

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
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
