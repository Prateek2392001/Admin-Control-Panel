import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
    <Router>
      <Routes>
        {!Token ? (
          <Route path="/signin" element={<SignIn />} />
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/header" element={<Header />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/product" element={<ProductTable />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Dashboard from "./Component/Dashboard/Dashboard";
// import CategoriesPage from "./Component/Categories/CategoriesPage";
// import ProductTable from "./Component/Product/ProductTable";
// import Header from "./Component/Categories/Header/Header";
// import SignIn from "./Component/Signin/SignIn";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Layout = ({ onLogout }) => (
//   <>
//     <Header />
//     <Dashboard onLogout={onLogout} />
//   </>
// );

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleSignIn = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <Routes>
//         {!isAuthenticated ? (
//           <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
//         ) : (
//           <>
//             <Route path="/" element={<Layout onLogout={handleLogout} />}>
//               <Route path="/categories" element={<CategoriesPage />} />
//               <Route path="/product" element={<ProductTable />} />
//             </Route>
//             <Route path="*" element={<Navigate to="/categories" replace />} />
//           </>
//         )}
//         <Route path="*" element={<Navigate to="/signin" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
