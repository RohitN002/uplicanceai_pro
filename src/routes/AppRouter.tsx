// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Dashboard from "../pages/Dashboard";

// const AppRouter = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
// import ProtectedRoute from "./ProtectedRoute";
// ProtectedRoute
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
            <Dashboard />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
