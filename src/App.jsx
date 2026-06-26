import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import ProtectedRoute from "./routes/ProtectedRoute";
import Departments from "./pages/Departments";
import Attendance from "./pages/Attendance";
import Payroll from "./pages/Payroll";
import Performance from "./pages/Performance";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const { isLoggedIn } =
    useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
          >
            <Dashboard />
          </ProtectedRoute>
        }
      />

         <Route
        path="/reports"
        element={
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
          >
            <Reports />
          </ProtectedRoute>
        }
      />

         <Route
        path="/settings"
        element={
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
          >
            <Settings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employees"
        element={
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
          >
            <Employees />
          </ProtectedRoute>
        }
      />
      <Route 
    path="/departments" 
    element={
      <ProtectedRoute
            isLoggedIn={isLoggedIn}
            >
    <Departments />
    </ProtectedRoute>} />

    <Route 
    path="/Attendance" 
    element={
      <ProtectedRoute
            isLoggedIn={isLoggedIn}
            >
    <Attendance />
    </ProtectedRoute>} />

    <Route 
    path="/payroll" 
    element={
      <ProtectedRoute
            isLoggedIn={isLoggedIn}
            >
    <Payroll />
    </ProtectedRoute>} />
    <Route 
    path="/performance" 
    element={
      <ProtectedRoute
            isLoggedIn={isLoggedIn}
            >
    <Performance />
    </ProtectedRoute>} />
    </Routes>
  );
}

export default App;