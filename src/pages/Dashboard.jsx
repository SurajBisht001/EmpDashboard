import { useContext } from "react";

import Layout from "../components/Layout";

import StatCard from "../components/StatCard";

import { EmployeeContext } from "../context/EmployeeContext";
import {
  FiUsers,
  FiUserCheck,
  FiDollarSign,
  FiAward,
} from "react-icons/fi";

export default function Dashboard() {
  const { employees } =
    useContext(EmployeeContext);

  const totalEmployees =
    employees.length;

  const activeEmployees =
    employees.filter(
      (emp) =>
        emp.status === "Active"
    ).length;

  const totalSalary =
    employees.reduce(
      (sum, emp) =>
        sum + emp.salary,
      0
    );

  const highestPaid =
    employees.reduce(
      (prev, current) =>
        prev.salary >
        current.salary
          ? prev
          : current
    );

  return (
    <Layout>
      <h1>Dashboard Overview</h1>

      <div className="stats-grid">

        <StatCard
          title="Total Employees"
          value={totalEmployees}
          icon={<FiUsers />}
        />

        <StatCard
          title="Active Employees"
          value={activeEmployees}
          icon={<FiUserCheck />}
        />

        <StatCard
          title="Salary Expense"
          value={`₹${totalSalary}`}
          icon={<FiDollarSign />}
        />

        <StatCard
          title="Highest Paid"
          value={highestPaid.name}
          icon={<FiAward />}
        />

      </div>

      <div className="dashboard-grid">

        <div className="card">
          <h2>
            Department Wise Count
          </h2>

          {Object.entries(
            employees.reduce((acc, emp) => {
              acc[emp.department] =
                (acc[emp.department] || 0) + 1;
              return acc;
            }, {})
          ).map(([dept, count]) => (
            <div
              key={dept}
              className="dept-row"
            >
              <span>{dept}</span>

              <strong>
                {count}
              </strong>
            </div>
          ))}
        </div>

        

        <div className="card">
          <h2>
            Recent Employees
          </h2>

          {employees
            .slice(-3)
            .reverse()
            .map((emp) => (
              <p key={emp.id}>
                {emp.name}
              </p>
            ))}
        </div>

      </div>
    </Layout>
  );
}