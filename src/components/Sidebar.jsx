import {
  FiGrid,
  FiUsers,
  FiLogOut,
  FiCalendar,
  FiDollarSign,
  FiTrendingUp,
  FiFileText,
  FiSettings,
  FiMoon,
} from "react-icons/fi";


import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Sidebar() {
  const { logout } =
    useContext(AuthContext);

  const { toggleTheme } =
    useContext(ThemeContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <h2>EMP Dashboard</h2>

      <nav>

        <NavLink to="/dashboard">
          <FiGrid />
          Dashboard
        </NavLink>

        <NavLink to="/employees">
          <FiUsers />
          Employees
        </NavLink>

      </nav>
<NavLink to="/departments" className="sidebar-link">
  <FiGrid />
  <span>Departments</span>
</NavLink>

<NavLink to="/attendance" className="sidebar-link">
  <FiCalendar />
  <span>Attendance</span>
</NavLink>

<NavLink to="/payroll" className="sidebar-link">
  <FiDollarSign />
  <span>Payroll</span>
</NavLink>

<NavLink to="/performance" className="sidebar-link">
  <FiTrendingUp />
  <span>Performance</span>
</NavLink>

<NavLink to="/reports" className="sidebar-link">
  <FiFileText />
  <span>Reports</span>
</NavLink>

<hr />

<NavLink to="/settings" className="sidebar-link">
  <FiSettings />
  <span>Settings</span>
</NavLink>

<button className="theme-btn" onClick={toggleTheme}>
  <FiMoon />
  <span>Theme</span>
</button>

<button className="sidebar-link logout-btn" onClick={handleLogout}>
  <FiLogOut />
  <span>Logout</span>
</button>
    </aside>
  );
}
